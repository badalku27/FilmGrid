# Blockbuster - Movie Reviews App

A full-stack social media application for movie reviews where users can share their thoughts, rate movies, and interact with other movie enthusiasts.

## 🚀 **Features**

### 🔐 Authentication
- **Email/Password Sign Up & Sign In** with secure bcrypt password hashing
- **Google OAuth2** integration using the latest Google Identity Services SDK
- **JWT Token Authentication** for secure API access
- **Protected Routes** - users must sign in to create, edit, or delete posts

### 📝 Movie Reviews
- **Create Reviews** - Share your movie opinions with rich text content
- **Read Reviews** - Browse reviews from the community (no login required)
- **Update Reviews** - Edit your own reviews anytime
- **Delete Reviews** - Remove your posts when needed
- **Like System** - Like and interact with other users' reviews

### 🎨 Modern UI/UX
- **Material-UI Components** for a sleek, responsive design
- **Error Boundary** with graceful error handling
- **Loading States** for better user experience
- **Mobile Responsive** design

## 🛠 **Tech Stack**

### Frontend
- **React** - Modern UI library
- **Redux Toolkit** - State management
- **Material-UI** - Component library
- **Axios** - HTTP client
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

### Deployment & Storage
- **MongoDB Atlas** - Cloud database
- **Environment Variables** - Secure configuration

## 🚀 **Getting Started**

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB Atlas account
- Google Cloud Console project (for OAuth)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bkbadal/blockbuster.git
   cd blockbuster
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   CONNECTION_URL=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

   Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_CLIENT_ID=your_google_oauth_client_id
   ```

4. **Run the Application**
   
   Start the backend server:
   ```bash
   cd backend
   npm start
   ```

   Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## 🔧 **Configuration**

### MongoDB Atlas
1. Create a MongoDB Atlas cluster
2. Get your connection string
3. Replace `<db_password>` with your database user password

### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add your client ID to the frontend `.env` file

## 📝 **API Endpoints**

### Authentication
- `POST /user/signin` - User login
- `POST /user/signup` - User registration

### Posts
- `GET /posts` - Get all posts
- `POST /posts` - Create new post (authenticated)
- `PATCH /posts/:id` - Update post (authenticated)
- `DELETE /posts/:id` - Delete post (authenticated)
- `PATCH /posts/:id/likePost` - Like/unlike post (authenticated)

## 🤝 **Contributing**

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License.

## 👨‍💻 **Author**

**Badal Kumar**
- GitHub: [@bkbadal](https://github.com/bkbadal)
- Email: bkbadal@example.com

## 🙏 **Acknowledgments**

- Material-UI for the beautiful components
- MongoDB Atlas for reliable database hosting
- Google for OAuth2 services
- The React and Node.js communities
