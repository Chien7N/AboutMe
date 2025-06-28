# Personal Website

A modern, responsive personal website built with React, Vite, and Tailwind CSS. Features a clean homepage with two main sections, career-focused "About Me" section, and personal interests "More About Me" section with full dark mode support.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Profile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
Profile/
├── src/
│   ├── components/          # React components
│   │   └── Navigation.jsx  # Navigation bar component with dark mode toggle
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx    # Homepage with two main sections
│   │   ├── AboutMe.jsx     # Career-focused page
│   │   └── MoreAboutMe.jsx # Personal interests page
│   ├── config/             # Configuration files
│   │   └── siteConfig.js   # Site-wide settings
│   ├── App.jsx             # Main app component with dark mode state
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── content/                # Content files (JSON)
│   ├── about/
│   │   └── profile.json    # Profile data
│   └── more/
│       └── interests.json  # Personal interests data
├── public/
│   └── images/             # Image assets
│       ├── profile_photo.jpg
│       └── hobbies/        # Travel and hobby photos
└── package.json
```

## 🎨 Customization

### 1. Update Profile Information
Edit `content/about/profile.json` to update your:
- Name, title, and contact information
- Skills list
- Work experience
- Education
- Certifications
- Social media links

### 2. Update Personal Interests
Edit `content/more/interests.json` to update your:
- Hobbies and interests
- Travel experiences
- Reading list
- Personal projects

### 3. Add Images
- **Profile Photo**: Place your photo as `public/images/profile_photo.jpg`
- **Travel Photos**: Add photos to `public/images/hobbies/` directory
- Update the JSON files to reference your new images

### 4. Customize Colors
Edit `src/index.css` to change the accent color:
```css
:root {
  --accent: #3b82f6; /* Change this to your preferred color */
}
```

### 5. Site Configuration
Edit `src/config/siteConfig.js` to customize:
- Site name and description
- Navigation items
- Contact information
- SEO settings

## 🌙 Dark Mode

The website includes a beautiful dark mode that:
- Automatically detects user's system preference
- Can be toggled manually with the sun/moon icon in the navigation
- Provides smooth transitions between light and dark themes
- Maintains excellent readability and contrast in both modes

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "gh-pages" branch as source
   - Your site will be available at `https://<username>.github.io/Profile/`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your web hosting service

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Build and deploy to GitHub Pages

## 🎯 Features

- ✅ Modern, responsive design
- ✅ Clean homepage with two main sections
- ✅ Career-focused "About Me" section
- ✅ Personal interests "More About Me" section
- ✅ Full dark mode support with system preference detection
- ✅ Dark mode toggle in navigation
- ✅ Skills display with tag cloud
- ✅ Experience timeline
- ✅ Education and certifications
- ✅ Travel gallery
- ✅ Reading list with ratings
- ✅ Personal projects showcase
- ✅ Social media integration
- ✅ Mobile-friendly navigation
- ✅ Smooth animations and hover effects
- ✅ Easy content management via JSON files
- ✅ Public static website (no authentication required)

## 🔧 Technical Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with dark mode
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:
1. Check the documentation above
2. Review the code comments for guidance
3. Open an issue on GitHub

---

**Happy coding! 🎉**
