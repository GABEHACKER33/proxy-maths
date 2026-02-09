# Ultraviolet Web Proxy

A modern, fast web proxy built with Ultraviolet that can be deployed to Vercel.

## Features

- 🚀 Fast and reliable proxy service
- 🔒 Enhanced privacy and security
- 🌐 Bypass web filters and restrictions
- 📱 Responsive design works on all devices
- ☁️ Easy deployment to Vercel

## Local Development

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd ultraviolet-proxy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Deployment to Vercel

### Method 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to complete deployment

### Method 2: Deploy from GitHub

1. Push your code to a GitHub repository

2. Go to [Vercel](https://vercel.com) and sign in

3. Click "New Project"

4. Import your GitHub repository

5. Vercel will auto-detect the configuration and deploy

## Configuration

You can customize the proxy by editing `public/uv.config.js`:

- `prefix`: The path prefix for proxied URLs (default: `/service/`)
- `bare`: The path to the bare server (default: `/bare/`)
- `encodeUrl`/`decodeUrl`: URL encoding/decoding method

## Usage

1. Enter a URL or search query in the search bar
2. Click "Go" or press Enter
3. The proxied website will load

You can also use the quick links for popular websites.

## How It Works

This proxy uses:
- **Ultraviolet** - The proxy framework
- **Bare Server** - Protocol for proxying requests
- **Service Workers** - Client-side request interception

## Important Notes

### Vercel Limitations

⚠️ **Important**: Vercel has some limitations that may affect proxy functionality:

- Serverless functions have a 10-second execution timeout on Hobby plan
- WebSocket connections may be limited
- Some websites with heavy JavaScript or complex streaming may not work perfectly

For best results with Vercel:
- The proxy works well for most standard websites
- Static sites and content-heavy sites work great
- Some interactive web apps may have limitations

### Alternative Hosting Options

If you need more robust proxy capabilities, consider:
- **Railway** - Better for long-running connections
- **Render** - Good free tier with better WebSocket support
- **Self-hosting** - Full control, no limitations

## Troubleshooting

### Service Worker Not Registering

- Make sure you're accessing the site via HTTPS (required for service workers)
- Check browser console for errors
- Clear browser cache and reload

### Sites Not Loading

- Some sites may block proxy access
- Check if the site uses heavy anti-bot protection
- Try a different encoding method in config

### Vercel Deployment Issues

- Ensure all dependencies are in `package.json`
- Check Vercel build logs for errors
- Verify Node.js version compatibility

## License

MIT License - feel free to use and modify as needed.

## Disclaimer

This proxy is for educational purposes. Please respect websites' terms of service and use responsibly.
