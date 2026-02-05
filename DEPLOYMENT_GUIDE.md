# Vercel Deployment Instructions for VetClin

## Your app uses CRACO (Create React App Configuration Override)

### Vercel Settings:

**Framework Preset:** Other

**Root Directory:** `frontend`

**Build Command:** `npm run build`

**Output Directory:** `build`

**Install Command:** `npm install`

### Important:
- Set Root Directory to `frontend` 
- Do NOT select "Create React App" as framework preset (use "Other")
- Make sure Node.js version is 18.x or higher

### Environment Variables:
Add this in Vercel:
- REACT_APP_BACKEND_URL = (leave empty for now)

---

## If Vercel Still Fails:

### Option 1: Build Locally & Deploy to Netlify

```bash
cd frontend
npm install
npm run build

# Then drag & drop the 'build' folder to Netlify
```

### Option 2: Use These Exact Vercel CLI Commands

```bash
# In your local repo
cd frontend
vercel --prod
```

When prompted:
- Setup and deploy? Yes
- Which scope? (your account)
- Link to existing project? No
- Project name? vetclin
- In which directory is your code located? ./
- Build Command: npm run build
- Output Directory: build
