# Getting Ready for Production and Dev Environments

This guide covers three things in order:
1. Setting up Vercel and connecting the GitHub repository
2. Migrating `mokuri.art` from GoDaddy to Vercel
3. Code changes to support dev/prod environment separation

---

## Part 1 — Vercel Setup

### 1.1 Create a Vercel account

1. Go to **vercel.com** and sign up with your GitHub account (same account as `rmauceri/mokuri`)
2. Vercel will request permission to access your GitHub repositories — grant it

### 1.2 Import the Mokuri repository

1. From the Vercel dashboard, click **Add New → Project**
2. Find `rmauceri/mokuri` in the repository list and click **Import**
3. Vercel will detect it as a static site (no framework, no build step)
4. **Framework Preset**: leave as **Other**
5. **Build Command**: leave empty (no build step)
6. **Output Directory**: leave as `.` (root) or leave empty
7. **Install Command**: leave empty
8. Click **Deploy**

Vercel will deploy `main` branch immediately. You'll get a URL like `mokuri-xxx.vercel.app`.

### 1.3 Create the dev branch in GitHub (if not already exists)

```
git checkout -b dev
git push -u origin dev
```

Vercel automatically detects new branches and creates preview deployments for them. The `dev` branch will get a stable URL like `mokuri-git-dev-rmauceri.vercel.app` — find it in the Vercel dashboard under **Deployments**, filtered by branch.

### 1.4 Pin the dev branch URL (optional but recommended)

In Vercel dashboard:
1. Go to your project → **Settings → Domains**
2. You can optionally assign a custom alias like `dev.mokuri.art` to the dev branch (do this after Part 2)

---

## Part 2 — Migrating mokuri.art from GoDaddy to Vercel

You are not transferring the domain registrar — GoDaddy keeps the domain registration. You are only pointing the DNS records to Vercel's servers.

### 2.1 Add the domain in Vercel

1. In Vercel dashboard → your project → **Settings → Domains**
2. Click **Add Domain**, enter `mokuri.art`
3. Also add `www.mokuri.art` (Vercel will redirect www → apex automatically)
4. Vercel will show you the DNS records you need to set

You will see something like:

| Type | Name | Value |
|------|------|-------|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

Keep this screen open — you'll need these values in the next step.

### 2.2 Update DNS records in GoDaddy

1. Log in to **GoDaddy → My Products → DNS** for `mokuri.art`
2. Find the existing `A` record for `@` — edit it to point to Vercel's IP (`76.76.21.21`)
   - If there are multiple A records for `@`, delete the extras, keep one pointing to Vercel
3. Find or add a `CNAME` record for `www` pointing to `cname.vercel-dns.com`
4. Save changes

> **Note**: DNS propagation takes 10 minutes to a few hours. Vercel shows a green checkmark on the domain once it verifies. GitHub Pages will stop serving `mokuri.art` once the DNS switches — there will be a brief overlap period where both may respond, which is harmless.

### 2.3 Disable GitHub Pages (after DNS switches)

Once `mokuri.art` is confirmed working on Vercel:
1. GitHub repository → **Settings → Pages**
2. Set Source to **None** (disables Pages)
3. The `https://rmauceri.github.io/mokuri/` URL will stop working — update any links that reference it (the blog post uses `mokuri.art` directly, so that's fine)

### 2.4 Verify

- `https://mokuri.art` → serves main branch ✅
- `https://www.mokuri.art` → redirects to `mokuri.art` ✅
- `https://mokuri-git-dev-rmauceri.vercel.app` → serves dev branch ✅

---

## Part 3 — Code Changes for Dev/Prod Environment Separation

Three changes, in order of dependency.

### 3.1 Add MOKURI_IS_DEV constant

Add this near the top of `index.html`, just after the `<script>` section begins (before STATE is defined):

```js
// Environment detection — dev features enabled on file://, localhost, and Vercel preview URLs
const MOKURI_IS_DEV = location.hostname === ''              // file:// local testing
  || location.hostname === 'localhost'
  || location.hostname === '127.0.0.1'
  || location.hostname.endsWith('.vercel.app');             // all Vercel preview/dev deployments
```

Production at `mokuri.art` never matches any of these — dev features are locked automatically with no manual step required.

### 3.2 Gate test-elements loading on MOKURI_IS_DEV

Find the test-elements push in `index.html` (currently around line 3270):

```js
// Before:
if (typeof MOKURI_TEST_ELEMENTS !== 'undefined') {
  MOKURI_ELEMENTS.push(...MOKURI_TEST_ELEMENTS);
}

// After:
if (MOKURI_IS_DEV && typeof MOKURI_TEST_ELEMENTS !== 'undefined') {
  MOKURI_ELEMENTS.push(...MOKURI_TEST_ELEMENTS);
}
```

On production, test elements are never registered — they cannot appear in the picker, in saved compositions, or via any code path.

### 3.3 Replace binary dev-styles flag with per-pack enabled set

**Replace** the `mokuri-dev-styles` localStorage key with `mokuri-enabled-packs` (a JSON array of enabled pack ids).

Add a helper function alongside `getAffinityElements` in `pack-registry.js`:

```js
// Returns Set of currently enabled (non-core) pack ids.
// Empty set = only core is active (production default).
function getEnabledPackIds() {
  if (typeof MOKURI_IS_DEV === 'undefined' || !MOKURI_IS_DEV) return new Set();
  try {
    return new Set(JSON.parse(localStorage.getItem('mokuri-enabled-packs') || '[]'));
  } catch {
    return new Set();
  }
}

function setEnabledPackIds(ids) {
  if (!MOKURI_IS_DEV) return;
  localStorage.setItem('mokuri-enabled-packs', JSON.stringify([...ids]));
}
```

**Update the 5 call sites in index.html:**

| Old | New |
|-----|-----|
| `localStorage.getItem('mokuri-dev-styles')` | `getEnabledPackIds().size > 0` |
| Binary toggle: set/remove `mokuri-dev-styles` | Toggle: populate/clear full registered pack set |

**Long press behavior** (the two toggle locations):

```js
// Before (binary):
if (localStorage.getItem('mokuri-dev-styles')) {
  localStorage.removeItem('mokuri-dev-styles');
} else {
  localStorage.setItem('mokuri-dev-styles', '1');
}

// After (full pack set toggle):
const enabled = getEnabledPackIds();
if (enabled.size > 0) {
  setEnabledPackIds(new Set()); // turn all off
} else {
  // turn all registered non-core, non-test packs on
  const allPackIds = getAllPacks()
    .map(p => p.id)
    .filter(id => id !== 'core');
  setEnabledPackIds(new Set(allPackIds));
}
```

**STATE init** (activeStyle):

```js
// Before:
activeStyle: (localStorage.getItem('mokuri-dev-styles') 
  ? localStorage.getItem('mokuri-activeStyle') 
  : null) || 'core',

// After:
activeStyle: (getEnabledPackIds().size > 0 
  ? localStorage.getItem('mokuri-activeStyle') 
  : null) || 'core',
```

**sourceElements filter** in `buildElementPanel`:

```js
// Before:
const devStyles = !!localStorage.getItem('mokuri-dev-styles');
const sourceElements = devStyles 
  ? MOKURI_ELEMENTS 
  : MOKURI_ELEMENTS.filter(d => !d.pack || d.pack === 'core');

// After:
const enabledPackIds = getEnabledPackIds();
const sourceElements = enabledPackIds.size > 0
  ? MOKURI_ELEMENTS.filter(d => !d.pack || d.pack === 'core' || enabledPackIds.has(d.pack))
  : MOKURI_ELEMENTS.filter(d => !d.pack || d.pack === 'core');
```

**Style chips visibility:**

```js
// Before:
if (packs.length <= 1 || !localStorage.getItem('mokuri-dev-styles')) { 
  container.style.display = 'none'; return; 
}

// After:
const enabledPackIds = getEnabledPackIds();
if (enabledPackIds.size === 0) { 
  container.style.display = 'none'; return; 
}
// Only render chips for enabled packs (+ core)
const visiblePacks = packs.filter(p => p.id === 'core' || enabledPackIds.has(p.id));
```

---

## Summary of Changes

| What | Where | Why |
|------|-------|-----|
| `MOKURI_IS_DEV` constant | `index.html` (top of scripts) | Single source of truth for environment detection |
| Gate test-elements on `MOKURI_IS_DEV` | `index.html` line ~3270 | Test elements invisible in production regardless of pack tags |
| `getEnabledPackIds()` / `setEnabledPackIds()` helpers | `pack-registry.js` | Replaces binary `mokuri-dev-styles` with per-pack set |
| 5 `mokuri-dev-styles` call sites | `index.html` | Use new helpers; long press toggles full pack set on/off |

After these changes:
- **Production** (`mokuri.art`): core only, no style chips, no test elements, no long press effect
- **Dev** (`file://` or `.vercel.app`): long press reveals all registered packs; test elements visible
- **Future entitlement**: replace `getEnabledPackIds()` internals with auth/subscription check — nothing else changes
