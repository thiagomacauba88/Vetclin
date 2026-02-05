# VetClin Veterinary Website

Professional veterinary clinic website built with React, featuring:
- Veterinary clinic services showcase
- Pet shop, hotel, and daycare information
- Contact form with WhatsApp integration
- Customer reviews and gallery
- Mobile-first responsive design

## 🚀 Quick Deployment

### Option 1: Deploy to Vercel

1. **Push this repo to GitHub** (if you haven't already)

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - **IMPORTANT Settings:**
     - Framework Preset: **Other** (not Create React App)
     - Root Directory: `frontend`
     - Build Command: `npm run build`
     - Output Directory: `build`
     - Install Command: `npm install`

3. **Environment Variables** (optional):
   ```
   REACT_APP_BACKEND_URL=(leave empty for now)
   ```

4. **Deploy** - Takes 2-3 minutes!

### Option 2: Deploy to Netlify

1. **Push this repo to GitHub**

2. **Import to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Netlify will auto-detect settings from `netlify.toml`

3. **Deploy** - Automatic!

---

## 💻 Local Development

```bash
# Clone the repository
git clone <your-repo-url>
cd <repo-name>

# Install dependencies
cd frontend
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📁 Project Structure

```
├── frontend/           # React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── data/          # Mock data
│   │   ├── App.js         # Main app component
│   │   └── index.css      # Global styles
│   ├── public/
│   └── package.json
├── backend/            # FastAPI backend (future)
├── vercel.json         # Vercel configuration
├── netlify.toml        # Netlify configuration
└── README.md
```

## 🛠️ Tech Stack

- **Frontend:** React 19, Tailwind CSS, Shadcn UI
- **Styling:** Tailwind CSS with custom configuration
- **Icons:** Lucide React
- **Notifications:** Sonner
- **Build Tool:** CRACO (Create React App Configuration Override)

## 📱 Features

- ✅ WhatsApp integration for instant booking
- ✅ Click-to-call phone integration
- ✅ Google Maps integration
- ✅ Contact form with validation
- ✅ Customer reviews showcase
- ✅ Pet photo gallery
- ✅ FAQ section
- ✅ Mobile-first responsive design
- ✅ Professional blue color scheme
- ✅ Smooth scroll navigation

## 🌐 Custom Domain Setup

After deployment, add your custom domain:

### On Vercel:
1. Go to Project Settings → Domains
2. Add your domain (e.g., `vetclin.com.br`)
3. Update DNS records at your domain registrar (GoDaddy, Namecheap, etc.)

### On Netlify:
1. Go to Site Settings → Domain management
2. Add custom domain
3. Update DNS records

## 📝 Content Updates

To update business information, edit:
- `/frontend/src/data/mock.js` - All business data, services, reviews, FAQs

## 🔧 Troubleshooting

**Issue:** Blank page or "Here are your instructions"
**Solution:** Make sure Root Directory is set to `frontend` in deployment settings

**Issue:** Build fails
**Solution:** Check that Node.js version is 18.x or higher

**Issue:** Images not loading
**Solution:** Image URLs are from Unsplash/Pexels - they should work. If not, replace with your own images.

## 📞 Business Contact Information

- **Name:** PETS Veterinary (VetClin)
- **Phone:** (34) 3237-6685
- **WhatsApp:** 5534323766685
- **Address:** R. Augusto César, 641 - Lídice, Uberlândia - MG
- **Rating:** 4.9 ⭐ (359 Google reviews)

## 🚀 Next Steps

1. ✅ Deploy to Vercel/Netlify
2. 🌐 Add custom domain
3. 📝 Replace stock images with real clinic photos
4. 📧 Implement backend API for contact form
5. 📊 Add Google Analytics
6. 🔍 Optimize SEO with meta tags

---

Built with ❤️ for pets and their owners
