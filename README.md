# 🚀 Vikas Dwivedi - Developer Portfolio

A modern, responsive, and SEO-friendly portfolio website built with React, Vite, and Tailwind CSS, showcasing Vikas Dwivedi's expertise as a Software Engineer and LLM Evaluator.

![Portfolio Preview](https://via.placeholder.com/800x400/2563eb/ffffff?text=Modern+Portfolio+Website)

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices  
- **Interactive Animations**: Powered by Framer Motion for engaging user experience
- **Smooth Navigation**: Sticky header with smooth scrolling to sections
- **Contact Form**: Functional contact form with mailto integration
- **SEO Optimized**: Structured for search engine visibility

## 🛠️ Tech Stack

- **Frontend**: React 18+ with Vite
- **Styling**: Tailwind CSS 
- **Animations**: Framer Motion
- **Icons**: React Icons (HeroIcons & FontAwesome)
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel deployment

## 📁 Project Structure

```
vikas-portfolio/
├── public/
│   └── resume.pdf          # Downloadable resume
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Hero.jsx        # Hero section with intro
│   │   ├── About.jsx       # About me section
│   │   ├── Experience.jsx  # Professional experience
│   │   ├── Projects.jsx    # Featured projects
│   │   ├── Skills.jsx      # Technical skills
│   │   └── Contact.jsx     # Contact form & info
│   ├── assets/             # Images and static assets
│   ├── App.jsx            # Main application component
│   ├── index.css          # Tailwind CSS imports
│   └── main.jsx           # Application entry point
├── package.json
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vikas-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📄 Sections Overview

### 🏠 Hero Section
- Full-screen introduction with name and title
- Call-to-action buttons (Resume download, LinkedIn)
- Animated background elements
- Smooth scroll indicator

### 👨‍💻 About Me
- Professional bio and summary
- Key focus areas and strengths
- Visual profile representation
- Professional highlights

### 💼 Experience
- Timeline layout of work experience
- **Golden Eagle IT Technologies**: Software Engineer roles
- **Turing**: LLM Evaluator position
- Key achievements and technologies used

### 🚀 Projects
- **CokeEvals**: LLM evaluation platform
- **Tribute**: CMS migration project
- Interactive project cards with tech stacks
- Links to live demos and source code

### 🔧 Skills
- Categorized technical skills with progress bars
- Programming languages, frameworks, databases
- Tools, DevOps, and LLM technologies
- Additional expertise areas

### 📞 Contact
- Contact information and social links
- Interactive contact form with validation
- Direct email integration via mailto
- Professional footer

## 🎨 Customization

### Updating Personal Information

1. **Personal Details**: Update name, title, bio in respective components
2. **Contact Info**: Modify email, phone, location in `Contact.jsx`
3. **Social Links**: Update LinkedIn, GitHub URLs throughout components
4. **Resume**: Replace `public/resume.pdf` with actual resume

### Styling Customization

1. **Colors**: Modify color scheme in Tailwind classes
2. **Fonts**: Update font families in `index.css` or Tailwind config
3. **Animations**: Adjust Framer Motion variants for different effects
4. **Layout**: Modify component structures and Tailwind layouts

### Adding New Sections

1. Create new component in `src/components/`
2. Import and add to `App.jsx`
3. Update navigation in `Header.jsx`
4. Ensure proper section IDs for smooth scrolling

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. **Automatic Deployments**: Connect GitHub repository for automatic deployments

### Other Platforms

- **Netlify**: Drag and drop `dist` folder after `npm run build`
- **GitHub Pages**: Use `gh-pages` package for deployment
- **Custom Server**: Upload `dist` folder contents to web server

## 📱 SEO & Performance

### SEO Features
- Semantic HTML structure
- Meta tags for social sharing
- Structured data markup ready
- Descriptive alt texts for images

### Performance Optimizations
- Vite's fast build system
- Code splitting with React lazy loading
- Optimized images and assets
- Minimal bundle size with tree shaking

## 🔧 Configuration Files

### Vite Configuration (`vite.config.js`)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### Tailwind CSS (`index.css`)
```css
@import "tailwindcss";
```

## 📦 Dependencies

### Core Dependencies
- `react` - UI library
- `framer-motion` - Animation library
- `react-icons` - Icon components
- `react-scroll` - Smooth scrolling

### Development Dependencies
- `vite` - Build tool
- `tailwindcss` - CSS framework
- `@tailwindcss/vite` - Tailwind Vite plugin

## 🐛 Troubleshooting

### Common Issues

1. **Tailwind Styles Not Loading**
   - Ensure `@import "tailwindcss";` is in `index.css`
   - Check Vite plugin configuration

2. **Icons Not Displaying**
   - Verify `react-icons` installation
   - Check icon import statements

3. **Smooth Scrolling Not Working**
   - Ensure section IDs match navigation hrefs
   - Check scroll behavior CSS

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Vikas Dwivedi**
- Email: V8236014408@gmail.com
- Phone: +91 8839034415
- LinkedIn: [vikas-dwivedi-668328227](https://www.linkedin.com/in/vikas-dwivedi-668328227/)

---

⭐ If you found this portfolio template helpful, please give it a star!

**Built with ❤️ using React, Vite, and Tailwind CSS**
