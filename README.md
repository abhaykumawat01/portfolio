# CSE Student Portfolio Website

A beautiful, professional multi-page portfolio website for Computer Science and Engineering students.

## Pages

- **Home** - Hero section, highlights, and featured technologies
- **About** - Personal information, interests, and hobbies
- **Skills** - Technical skills with proficiency levels and certifications
- **Education** - Educational background with timeline display
- **Projects** - Project showcase with filtering
- **Contact** - Contact form and information

## Getting Started

### Prerequisites
- Node.js installed on your computer

### Installation

1. Extract the zip file
2. Open terminal in the extracted folder
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:5173`

## Customization Guide

### Personal Information - CHANGE THESE

1. **Name**: Search for `John Doe` and replace with your name
2. **Email**: Replace `your.email@example.com` with your email
3. **Phone**: Update `+1 234 567 890` with your phone number
4. **Location**: Update `New York, USA` with your location
5. **Social Links**: Update GitHub, LinkedIn, Twitter URLs

### Pages to Customize

#### Home Page (`src/pages/Home.tsx`)
- Update your role/title on line 35
- Change your tagline on lines 38-40
- Update stats on lines 52-55
- Modify highlights section on lines 65-75
- Update tech stack list on lines 115-118

#### About Page (`src/pages/About.tsx`)
- Update `personalInfo` object (lines 10-18)
- Change your bio text (lines 83-92)
- Update hobbies/interests (lines 20-25)
- Change the quote (lines 148-150)

#### Skills Page (`src/pages/Skills.tsx`)
- Update `skills` array with your actual skills
- Modify `categories` if you want different groupings
- Update `certifications` array with your certificates
- Change `currently learning` section

#### Education Page (`src/pages/Education.tsx`)
- Update `education` array with your academic history
- Modify `extraAchievements` with your awards
- Add/remove coursework as needed

#### Projects Page (`src/pages/Projects.tsx`)
- Update `projects` array with your actual projects
- Add real GitHub links and live demo URLs
- Update project images

#### Contact Page (`src/pages/Contact.tsx`)
- Update `contactInfo` with your details
- Modify `socialLinks` with your profiles
- Update FAQ section with your own Q&As

### Global Styles (`src/index.css`)
- Change primary color scheme (line 7-10)
- Modify fonts (line 13-14)
- Adjust animations

### Navigation (`src/components/Navbar.tsx`)
- Nav items are defined on lines 15-22
- Brand name on lines 35-39

### Footer (`src/components/Footer.tsx`)
- Social links on lines 8-12
- Contact info on lines 50-66

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Add Your Resume

1. Name your resume file `resume.pdf`
2. Place it in the `public` folder
3. The "Download Resume" button will automatically work

## Technologies Used

- React 18
- TypeScript
- React Router DOM
- Tailwind CSS
- Lucide React Icons

## Support

If you need help customizing, search for `// CHANGE THIS:` comments in the code to find all places that need your personal information.
