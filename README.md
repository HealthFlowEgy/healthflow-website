# Healthflow Website

Professional healthcare RegTech website built with React, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern React Architecture**: Built with React 18+ and Vite for optimal performance
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Professional UI Components**: Using shadcn/ui component library
- **Healthcare RegTech Focus**: Showcasing HFCX, HPR, and Digital Prescription platforms
- **Contact Integration**: Direct email integration to info@healthflow.tech
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Technology Stack

- **Frontend**: React 18+, Tailwind CSS, shadcn/ui
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Deployment**: DigitalOcean App Platform
- **CI/CD**: GitHub Actions

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/HealthFlowEgy/healthflow-website.git
cd healthflow-website

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

## 🚀 Deployment

### Automatic Deployment (CI/CD)

The website automatically deploys to DigitalOcean App Platform when code is pushed to the `main` branch.

#### Required GitHub Secrets:

1. **DIGITALOCEAN_ACCESS_TOKEN**: Your DigitalOcean API token
2. **SSH_KEY_CONTENT**: SSH key content for secure deployments

#### Setup Instructions:

### 1. **Create DigitalOcean API Token**

1. Go to [DigitalOcean Control Panel](https://cloud.digitalocean.com/account/api/tokens)
2. Click "Generate New Token"
3. Name: `Healthflow Deployment`
4. Scopes: Select "Write" access
5. Copy the generated token

### 2. **Add GitHub Secrets**

1. Go to your GitHub repository: https://github.com/HealthFlowEgy/healthflow-website
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret"

**Add these secrets:**

**Secret 1:**
- Name: `DIGITALOCEAN_ACCESS_TOKEN`
- Value: `[Your DigitalOcean API Token]`

**Secret 2:**
- Name: `SSH_KEY_CONTENT`
- Value: `[Your SSH Key Content]`

### 3. **Deploy to DigitalOcean App Platform**

#### Option A: Automatic Deployment (Recommended)
1. Push any change to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Check the "Actions" tab to monitor deployment progress

#### Option B: Manual Deployment via DigitalOcean Dashboard
1. Go to [DigitalOcean Apps](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Choose "GitHub" as source
4. Select repository: `HealthFlowEgy/healthflow-website`
5. Branch: `main`
6. Auto-deploy: Enable
7. Use the provided `.do/app.yaml` configuration

### 4. **Configure Custom Domain**

1. In DigitalOcean App Platform dashboard
2. Go to your app → "Settings" → "Domains"
3. Click "Add Domain"
4. Enter: `healthflow.tech`
5. Add alias: `www.healthflow.tech`
6. DigitalOcean will provide DNS records

### 5. **Update DNS Records**

Add these records to your domain registrar:

```
Type: A
Name: @
Value: [IP provided by DigitalOcean]

Type: CNAME
Name: www
Value: [CNAME provided by DigitalOcean]
```

## 📁 Project Structure

```
healthflow-website/
├── src/
│   ├── components/ui/          # shadcn/ui components
│   ├── assets/                 # Images and static assets
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── .github/workflows/          # GitHub Actions CI/CD
├── .do/                        # DigitalOcean App Platform config
├── public/                     # Public static files
└── package.json               # Dependencies and scripts
```

## 🎨 Customization

### Brand Colors
- **Primary Navy**: #1E3A8A
- **Primary Gold**: #B8860B
- **Supporting**: Light blue, gray, white, success green

### Key Sections
- Hero section with value propositions
- Trust & partnerships
- Solutions showcase (HFCX, HPR, Digital Prescriptions)
- Technology pillars (AI, Blockchain, Digital Identity)
- About section with company information
- Market impact statistics
- Stakeholder benefits
- Contact form integration

## 📞 Contact

- **Email**: info@healthflow.tech
- **Phone**: +201110047666
- **Website**: https://healthflow.tech
- **Location**: Cairo, Egypt

## 💰 Cost Estimation

### DigitalOcean App Platform Pricing:
- **Basic Static Site**: $0/month (512MB RAM, 1GB bandwidth)
- **Pro Static Site**: $5/month (1GB RAM, 100GB bandwidth)
- **Custom Domain**: Free
- **SSL Certificate**: Free (automatic)

## 🔧 Development

### Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build locally
- `pnpm run lint` - Run ESLint

### Environment Variables

Create a `.env.local` file for local development:

```env
VITE_API_URL=your_api_url_here
VITE_CONTACT_EMAIL=info@healthflow.tech
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**: 
   - Ensure all dependencies are installed with `pnpm install`
   - Check build logs in GitHub Actions

2. **Deployment Issues**: 
   - Verify GitHub Secrets are properly configured
   - Check DigitalOcean App Platform logs

3. **Domain Issues**: 
   - Verify DNS records are correctly configured
   - Allow 24-48 hours for DNS propagation

4. **SSL Issues**: 
   - DigitalOcean automatically provisions SSL certificates
   - Ensure domain is properly verified

### Deployment Status

Check deployment status:
- **GitHub Actions**: Repository → Actions tab
- **DigitalOcean**: Apps dashboard → Your app → Activity tab

## 🔄 CI/CD Pipeline

The automated deployment pipeline:

1. **Trigger**: Push to `main` branch
2. **Build**: Install dependencies and build React app
3. **Deploy**: Deploy to DigitalOcean App Platform
4. **Domain**: Automatic SSL and domain configuration

## 📄 License

© 2025 Healthflow. All rights reserved. Leading Egypt's healthcare digital transformation.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Support

For technical support:
- Create an issue in this repository
- Contact: info@healthflow.tech
- Documentation: [DigitalOcean App Platform Docs](https://docs.digitalocean.com/products/app-platform/)

