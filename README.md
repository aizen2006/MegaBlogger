# 🌅 MegaBlogger

A modern, full-featured blogging platform built with React and Appwrite, featuring the beautiful **Sunset Swirl** design palette. Create, edit, and share your stories with an elegant and responsive user interface.

![Version](https://img.shields.io/badge/version-1.0.0-coral)
![React](https://img.shields.io/badge/React-19.1.1-61dafb)
![License](https://img.shields.io/badge/license-MIT-lavender)

## ✨ Features

- 🎨 **Beautiful Sunset Swirl UI** - Warm coral, soft lavender, and cream yellow color palette
- 📝 **Rich Text Editor** - Create beautifully formatted posts with TinyMCE
- 🔐 **User Authentication** - Secure login and signup with Appwrite
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🖼️ **Image Upload** - Upload and display feature images for posts
- ✏️ **CRUD Operations** - Create, Read, Update, and Delete posts
- 🎯 **Redux State Management** - Efficient state handling with Redux Toolkit
- 🚀 **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎭 **Modern Animations** - Smooth transitions and hover effects throughout
- 🔒 **Protected Routes** - Authentication-based access control

## 🎨 Color Palette

The Sunset Swirl design features a warm and inviting color scheme:

- **Primary (Coral):** `#FA9A91` - Main brand color for headers and CTAs
- **Secondary (Lavender):** `#B8A9CA` - Soft complementary color for accents
- **Accent (Cream Yellow):** `#FADDA3` - Highlights and borders
- **Background:** `#FDF0DA` - Light, airy background
- **Text:** `#4A4A4A` - Readable dark gray for body text
- **UI Blue:** `#40D2EA` - Fresh blue for UI elements
- **UI Mint:** `#B3E0C6` - Soft mint for buttons and highlights

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.7
- **Styling:** Tailwind CSS 4.1.15
- **State Management:** Redux Toolkit 2.9.1
- **Backend Service:** Appwrite 21.2.1
- **Routing:** React Router DOM 7.9.4
- **Form Handling:** React Hook Form 7.65.0
- **Rich Text Editor:** TinyMCE React 6.3.0
- **HTML Parser:** html-react-parser 5.2.7

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Appwrite** account ([Get started here](https://appwrite.io))

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/megablogger.git
cd megablogger/MegaBlogger
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Appwrite

1. Create an [Appwrite](https://appwrite.io) account
2. Create a new project
3. Create a database and collection with the following attributes:
   - `title` (String, required)
   - `content` (String, required)
   - `featureImage` (String, required)
   - `status` (String, required)
   - `userId` (String, required)
4. Create a storage bucket for images
5. Set up authentication (Email/Password)

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_PROJECT_NAME=MegaBlogger
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

Replace the placeholder values with your actual Appwrite credentials.

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
MegaBlogger/
├── public/
│   └── favicon.ico
├── src/
│   ├── appwrite/
│   │   ├── auth.js          # Authentication service
│   │   └── config.js        # Database & storage service
│   ├── components/
│   │   ├── header/
│   │   │   ├── header.jsx
│   │   │   └── LogoutBtn.jsx
│   │   ├── footer/
│   │   │   └── footer.jsx
│   │   ├── post-form/
│   │   │   └── postForm.jsx
│   │   ├── container/
│   │   │   └── container.jsx
│   │   ├── Btn.jsx          # Button component
│   │   ├── Input.jsx        # Input component
│   │   ├── Select.jsx       # Select component
│   │   ├── PostCard.jsx     # Post card component
│   │   ├── Login.jsx        # Login form
│   │   ├── SignUp.jsx       # Signup form
│   │   ├── RTE.jsx          # Rich text editor
│   │   ├── Logo.jsx         # Logo component
│   │   ├── AuthLayout.jsx   # Protected route wrapper
│   │   └── index.js         # Component exports
│   ├── conf/
│   │   └── conf.js          # Environment configuration
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── AllPosts.jsx     # All posts page
│   │   ├── Post.jsx         # Single post view
│   │   ├── Addpost.jsx      # Create post page
│   │   ├── EditPost.jsx     # Edit post page
│   │   ├── Login.jsx        # Login page
│   │   ├── Signup.jsx       # Signup page
│   │   └── pageindex.js     # Page exports
│   ├── store/
│   │   ├── authSlice.js     # Redux auth slice
│   │   └── store.js         # Redux store
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   ├── index.css            # Tailwind imports
│   └── main.jsx             # App entry point
├── .env                      # Environment variables
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── package.json             # Dependencies
```

## 🎯 Key Features Breakdown

### Authentication
- User registration with email and password
- Secure login system
- Session management with Redux
- Protected routes for authenticated users

### Post Management
- Create posts with rich text formatting
- Upload feature images
- Edit existing posts
- Delete posts (author only)
- View all posts in responsive grid
- Individual post view pages

### User Interface
- Gradient header with glass-morphism effect
- Modern card-based design
- Smooth hover animations and transitions
- Responsive navigation
- Beautiful form designs with focus states
- Loading and error states

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: 1 column grid
  - Tablet (sm): 2 column grid
  - Desktop (lg): 3 column grid
  - Large (xl): 4 column grid

## 📸 Screenshots

*Coming soon - Add screenshots of your application here*

## 🏗️ Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by the beautiful Sunset Swirl color palette
- Built with [Appwrite](https://appwrite.io) for backend services
- UI components styled with [Tailwind CSS](https://tailwindcss.com)
- Rich text editing powered by [TinyMCE](https://www.tiny.cloud)

## 📞 Contact

For questions or support, please open an issue in the GitHub repository.

---

**Made with ❤️ and ☕ by the MegaBlogger Team**
