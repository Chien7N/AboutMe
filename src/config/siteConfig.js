// Site Configuration
// Edit this file to customize your website settings

export const siteConfig = {
  // Site Information
  siteName: "Personal Portfolio",
  siteDescription: "A modern personal website showcasing my career and interests",
  
  // Navigation
  navigation: [
    { path: '/about', label: 'About Me', icon: 'User' },
    { path: '/more', label: 'More About Me', icon: 'Heart' }
  ],
  
  // Theme Colors (CSS Variables)
  colors: {
    primary: '#3b82f6', // Blue
    secondary: '#8b5cf6', // Purple
    accent: '#10b981', // Green
    // You can add more colors here
  },
  
  // Contact Information
  contact: {
    email: 'your.email@example.com',
    location: 'City, Country',
    social: {
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      twitter: 'https://twitter.com/yourusername',
      // Add more social links as needed
    }
  },
  
  // SEO
  seo: {
    title: 'Your Name - Software Developer',
    description: 'Personal portfolio and resume website',
    keywords: ['software developer', 'web developer', 'portfolio', 'resume'],
    author: 'Your Name',
    ogImage: '/images/og-image.jpg'
  },
  
  // Features
  features: {
    darkMode: true,
    analytics: false, // Set to true to enable Google Analytics
    contactForm: false, // Set to true to enable contact form
  }
}

// How to use this configuration:
// 1. Import in your components: import { siteConfig } from '../config/siteConfig'
// 2. Use values: siteConfig.siteName, siteConfig.contact.email, etc.
// 3. Update this file to customize your site without touching component code 