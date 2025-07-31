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
- **Deployment**: Google Cloud Run with Docker
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

The website automatically deploys to Google Cloud Run when code is pushed to the `main` branch.

#### Required GitHub Secrets:

1. **GCP_PROJECT_ID**: Your Google Cloud Project ID
2. **GCP_SA_KEY**: Service Account JSON key with the following permissions:
   - Cloud Build Editor
   - Cloud Run Admin
   - Storage Admin
   - DNS Administrator

#### Setup Instructions:

1. **Create Google Cloud Service Account**:
   ```bash
   # Create service account
   gcloud iam service-accounts create healthflow-deployer \
     --description="Service account for Healthflow website deployment" \
     --display-name="Healthflow Deployer"

   # Grant necessary permissions
   gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
     --member="serviceAccount:healthflow-deployer@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
     --role="roles/cloudbuild.builds.editor"

   gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
     --member="serviceAccount:healthflow-deployer@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
     --role="roles/run.admin"

   gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
     --member="serviceAccount:healthflow-deployer@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
     --role="roles/storage.admin"

   gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
     --member="serviceAccount:healthflow-deployer@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
     --role="roles/dns.admin"

   # Create and download service account key
   gcloud iam service-accounts keys create key.json \
     --iam-account=healthflow-deployer@YOUR_PROJECT_ID.iam.gserviceaccount.com
   ```

2. **Add GitHub Secrets**:
   - Go to GitHub repository → Settings → Secrets and variables → Actions
   - Add `GCP_PROJECT_ID` with your Google Cloud Project ID
   - Add `GCP_SA_KEY` with the contents of the service account JSON key

3. **Enable Required APIs**:
   ```bash
   gcloud services enable cloudbuild.googleapis.com
   gcloud services enable run.googleapis.com
   gcloud services enable containerregistry.googleapis.com
   ```

### Manual Deployment

```bash
# Build Docker image
docker build -t gcr.io/YOUR_PROJECT_ID/healthflow-website .

# Push to Google Container Registry
docker push gcr.io/YOUR_PROJECT_ID/healthflow-website

# Deploy to Cloud Run
gcloud run deploy healthflow-website \
  --image gcr.io/YOUR_PROJECT_ID/healthflow-website \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 80
```

## 🌐 Custom Domain Setup

### 1. Map Custom Domain to Cloud Run

```bash
# Map domain to Cloud Run service
gcloud run domain-mappings create \
  --service healthflow-website \
  --domain healthflow.tech \
  --region us-central1
```

### 2. Configure DNS Records

Add the following DNS records to your domain registrar:

```
Type: CNAME
Name: www
Value: ghs.googlehosted.com

Type: A
Name: @
Value: [IP addresses provided by Google Cloud]
```

### 3. Verify Domain Ownership

Follow the domain verification process in Google Cloud Console.

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
├── public/                     # Public static files
├── Dockerfile                  # Docker configuration
├── nginx.conf                 # Nginx configuration
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

## 📄 License

© 2025 Healthflow. All rights reserved. Leading Egypt's healthcare digital transformation.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

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

1. **Build Failures**: Ensure all dependencies are installed with `pnpm install`
2. **Deployment Issues**: Check GitHub Secrets are properly configured
3. **Domain Issues**: Verify DNS records and domain verification
4. **SSL Issues**: Google Cloud automatically provisions SSL certificates

### Support

For technical support, please contact the development team or create an issue in this repository.

