# Auto Resume Generator Web Application

A modern, full-stack web application for creating professional resumes with multiple templates, real-time preview, auto-save functionality, and PDF export capabilities.

## 🚀 Features

- **11 Professional Templates**: Modern, Minimal, Classic, Creative, Executive, Tech Pro, Academic, Professional, Modern Gradient, and Elegant designs
- **Real-time Preview**: Live preview updates as you edit your resume
- **Auto-save**: Automatic saving every 3 seconds to prevent data loss
- **Multi-section Support**: Personal details, work experience, education, skills, projects, certifications, and languages
- **Social Media Links**: Support for LinkedIn, GitHub, Telegram, Discord, and personal websites
- **PDF Export**: Browser-based PDF generation for easy sharing and printing
- **Public Sharing**: Generate shareable resume links with privacy controls
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Dark/Light Theme**: Switch between themes for comfortable editing

## 🛠️ Tech Stack

### Frontend
- **React** with TypeScript for type-safe component development
- **Vite** for fast development and optimized builds
- **Tailwind CSS** with shadcn/ui components for consistent styling
- **Wouter** for lightweight client-side routing
- **TanStack Query** for efficient server state management
- **React Hook Form** with Zod validation for robust form handling

### Backend
- **Express.js** server with TypeScript
- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** database for data persistence
- **RESTful API** with proper HTTP status codes

### Development
- **TypeScript** throughout for type safety
- **ESBuild** for fast production builds
- **Hot Module Replacement** for instant development feedback

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- PostgreSQL database (optional - uses in-memory storage by default)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnZomorodian/auto-resume-generator.git
   cd auto-resume-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   # Create .env file for database connection
   echo "DATABASE_URL=your_postgresql_connection_string" > .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000` to start creating your resume!

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Backend Express server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage layer
│   └── vite.ts            # Vite integration
├── shared/                # Shared types and schemas
│   └── schema.ts          # Zod schemas and types
└── README.md              # Project documentation
```

## 🎨 Available Resume Templates

1. **Modern** - Clean and contemporary design with blue accents
2. **Minimal** - Simple and elegant layout with minimal styling
3. **Classic** - Traditional professional format with serif fonts
4. **Creative** - Bold and expressive design with emerald theme
5. **Executive** - Sophisticated corporate style with purple gradients
6. **Tech Pro** - Dark theme perfect for developers and tech professionals
7. **Academic** - Professional academic format for researchers and educators
8. **Professional** - Corporate executive design with two-column layout
9. **Modern Gradient** - Colorful modern design with purple-pink gradients
10. **Elegant** - Sophisticated serif layout with classic styling

## 📝 Usage Guide

### Creating Your Resume

1. **Personal Details**: Add your basic information, contact details, and social media links
2. **Work Experience**: List your professional experience with achievements and descriptions
3. **Education**: Add your educational background with degrees and institutions
4. **Skills**: Organize your technical skills, soft skills, and language proficiencies
5. **Projects**: Showcase your notable projects with technologies and links
6. **Certifications**: Include professional certifications and credentials

### Template Selection

Choose from 10 professionally designed templates that suit your industry and personal style. Each template is optimized for different use cases:

- **Tech/Development**: Tech Pro, Modern, Creative
- **Corporate/Business**: Executive, Professional, Classic
- **Academic/Research**: Academic, Elegant, Minimal
- **Creative Industries**: Creative, Modern Gradient

### Export and Sharing

- **PDF Export**: Use your browser's print function to generate PDF files
- **Public Sharing**: Generate a public link to share your resume online
- **Privacy Controls**: Toggle public visibility on/off as needed

## 🔧 Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Building
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:push      # Push database schema changes

# Type Checking
npm run check        # Run TypeScript type checking
```

## 🗄️ Database Schema

The application uses PostgreSQL with the following main tables:

- **users**: User authentication and profiles
- **resumes**: Resume data with JSON columns for flexibility
- **Personal details, work experience, education, skills, projects, certifications**: All stored as structured JSON

## 🌐 Environment Variables

```env
# Database (Optional - uses in-memory storage if not provided)
DATABASE_URL=postgresql://username:password@localhost:5432/resume_db

# Development
NODE_ENV=development
```

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 About

**Powered By DeepInk Team**

## 📞 Contact

- **GitHub**: [@AnZomorodian](https://github.com/AnZomorodian)
- **Telegram**: [@ArtinZomorodian](https://t.me/ArtinZomorodian)
- **Discord**: [Join our community](https://discord.gg/NbTDTRhu)

## 🎯 Roadmap

- [ ] Cover letter builder integration
- [ ] AI-powered content suggestions
- [ ] More export formats (Word, LaTeX)
- [ ] Advanced customization options
- [ ] Team collaboration features
- [ ] Resume analytics and tracking

---

Made with ❤️ by the DeepInk Team