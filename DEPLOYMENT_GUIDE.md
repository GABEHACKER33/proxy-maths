# 🚀 Quick Deployment Guide

## Files Included

Your Ultraviolet proxy includes:
- `index.js` - Main server file
- `package.json` - Dependencies and configuration
- `vercel.json` - Vercel deployment config
- `public/` - Frontend files (HTML, CSS, JS)
- `README.md` - Complete documentation
- `.gitignore` - Git ignore rules

## Deploy to Vercel (Recommended Method)

### Option 1: GitHub + Vercel (Easiest)

1. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Create a new repository (e.g., "ultraviolet-proxy")
   - Don't initialize with README

2. **Upload your files:**
   ```bash
   cd path/to/your/files
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ultraviolet-proxy.git
   git push -u origin main
   ```

3. **Deploy to Vercel:**
   - Go to https://vercel.com/new
   - Sign in with GitHub
   - Click "Import Project"
   - Select your repository
   - Click "Deploy" (Vercel auto-detects settings)

### Option 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to project folder:**
   ```bash
   cd path/to/your/files
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   Follow the prompts and your site will be live!

## ⚠️ Important Vercel Considerations

While Vercel deployment works, be aware of limitations:

**Pros:**
- ✅ Free hosting
- ✅ Easy deployment
- ✅ Automatic HTTPS
- ✅ Good for basic proxy needs

**Cons:**
- ⚠️ 10-second function timeout (Hobby plan)
- ⚠️ Limited WebSocket support
- ⚠️ Some complex sites may not work perfectly

**Best For:**
- Static websites
- News sites
- Basic web browsing
- Educational purposes

## Alternative Deployment Options

### Railway (Recommended for better performance)

1. Go to https://railway.app
2. Sign in with GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-deploys

**Advantages:**
- Better WebSocket support
- No 10-second timeout
- More reliable for complex sites

### Render

1. Go to https://render.com
2. Sign up and connect GitHub
3. "New Web Service"
4. Select repository
5. Use these settings:
   - Build Command: `npm install`
   - Start Command: `npm start`

### Self-Hosting (Best Performance)

Use a VPS (DigitalOcean, Linode, etc.):

```bash
git clone your-repo
cd your-repo
npm install
npm start
```

Use PM2 to keep it running:
```bash
npm install -g pm2
pm2 start index.js
pm2 save
```

## Testing Locally First

Before deploying, test locally:

```bash
npm install
npm start
```

Visit http://localhost:3000 to test the proxy.

## Configuration Tips

Edit `public/uv.config.js` to customize:
- Change encoding method
- Adjust paths
- Modify bare server endpoint

## Need Help?

Common issues:
- **Service worker errors**: Make sure site is on HTTPS
- **Sites not loading**: Some sites block proxies
- **Vercel timeout**: Site may be too complex, try Railway/Render

## Legal Reminder

Use this proxy responsibly and ethically:
- Respect website terms of service
- Don't use for illegal activities
- Educational purposes only
- Be aware of your local laws

---

**Your proxy is ready to deploy! Choose your preferred method above and you'll be live in minutes.**
