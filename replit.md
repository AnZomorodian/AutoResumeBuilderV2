# Auto Resume Generator Web Application

## Overview

This is a full-stack web application that allows users to create professional resumes through an intuitive form-based interface. The application features multiple template designs, real-time preview, auto-save functionality, and PDF export capabilities. It's built with a modern React frontend and Express.js backend, using Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with a clear separation between client and server code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with shadcn/ui components for consistent UI design
- **State Management**: TanStack Query for server state and local React state for UI state

## Key Components

### Frontend Architecture
- **Client Directory Structure**: React application using modern hooks and functional components
- **UI Components**: shadcn/ui component library providing consistent design system
- **Routing**: wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Styling**: Tailwind CSS with CSS custom properties for theming

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **Storage Layer**: Abstracted storage interface with in-memory implementation (easily replaceable with database)
- **API Routes**: CRUD operations for resume management with proper HTTP status codes
- **Development Setup**: Vite integration for development with hot module replacement

### Database Design
- **Users Table**: Basic user authentication structure (username, password)
- **Resumes Table**: Comprehensive resume data storage with JSON columns for flexible content
- **Schema Validation**: Zod schemas for runtime type checking and validation

## Data Flow

1. **User Input**: Forms capture user data with real-time validation
2. **Auto-save**: Changes are automatically saved every 3 seconds using debounced updates
3. **State Management**: TanStack Query handles server state synchronization
4. **Preview**: Real-time preview updates as user types
5. **Export**: PDF generation through browser print functionality
6. **Sharing**: Public URLs for sharing resumes with unique share IDs

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity for Neon
- **drizzle-orm & drizzle-zod**: Type-safe ORM and validation
- **@tanstack/react-query**: Server state management
- **@hookform/resolvers**: Form validation integration
- **nanoid**: Unique ID generation for entities

### UI Dependencies
- **@radix-ui/react-***: Headless UI primitives for accessibility
- **class-variance-authority**: Utility for component variant management
- **tailwind-merge**: Intelligent Tailwind class merging
- **lucide-react**: Icon library
- **react-icons**: Additional icon sets (GitHub, Discord, Telegram)

### Development Dependencies
- **Vite**: Build tool with hot module replacement
- **TypeScript**: Type safety across the application
- **ESBuild**: Fast bundling for production builds

## Deployment Strategy

### Development
- Uses Vite dev server with Express middleware integration
- Hot module replacement for fast development cycles
- TypeScript compilation with strict type checking

### Production Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Static Serving**: Express serves built frontend assets
4. **Database**: Uses Drizzle migrations for schema management

### Environment Configuration
- **Development**: Local development with in-memory storage fallback
- **Production**: PostgreSQL database with environment-based configuration
- **Database URL**: Required environment variable for database connection

### Key Features Implemented
- **Multi-template Support**: 5 different resume templates (Modern, Minimal, Classic, Creative, Executive)
- **Auto-save**: Prevents data loss with automatic saving
- **Real-time Preview**: Live preview updates as user edits
- **PDF Export**: Browser-based PDF generation
- **Public Sharing**: Shareable resume links with privacy controls
- **Responsive Design**: Mobile-friendly interface
- **Form Validation**: Comprehensive input validation with user feedback
- **Drag & Drop**: Reorderable sections and items (prepared structure)

The application is designed to be easily extensible, with clear separation of concerns and modern development practices throughout.