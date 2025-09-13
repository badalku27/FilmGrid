# 🎬 Blockbuster - Movie Reviews Social Platform

A modern full-stack social media application where movie enthusiasts can share reviews, rate films, and connect with other cinephiles. Built with the MERN stack and featuring secure authentication and real-time interactions.

## 🌟 **Live Demo**
> *Coming soon - deployment in progress*

## � **Features**

### 🔐 **Secure Authentication**
- **User Registration & Login** with encrypted password storage using bcrypt
- **Google OAuth2 Integration** for seamless social login
- **JWT Token Authentication** ensuring secure API access
- **Protected Routes** - authentication required for posting and interactions

### 🎥 **Movie Review System**
- **Create Reviews** - Share detailed movie opinions with rich content
- **Browse Reviews** - Explore community reviews without login required  
- **Edit Your Content** - Update your reviews anytime
- **Delete Posts** - Full control over your content
- **Like & Interact** - Engage with other users' reviews
- **User Profiles** - Personalized movie review collections

### 🎨 **Modern User Experience**
- **Responsive Design** - Works perfectly on all devices
- **Material-UI Components** - Clean, professional interface
- **Error Boundaries** - Graceful error handling throughout the app
- **Loading States** - Smooth user interactions
- **Real-time Updates** - Instant feedback on user actions

## 🛠 **Technology Stack**

### **Frontend**
- **React 18** - Latest React with hooks and modern patterns
- **Redux Toolkit** - Efficient state management
- **Material-UI (MUI)** - Professional component library
- **Axios** - HTTP client for API communication
- **React Router** - Client-side routing

### **Backend** 
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, minimalist web framework
- **MongoDB** - Flexible NoSQL database
- **Mongoose** - Elegant MongoDB object modeling
- **JWT** - Secure token-based authentication
- **bcryptjs** - Password hashing and security

### **Database & Deployment**
- **MongoDB Atlas** - Cloud database solution
- **Environment Variables** - Secure configuration management

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js (v16.0.0 or higher)
- MongoDB Atlas account
- Google Cloud Platform account (for OAuth)

### **Installation & Setup**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/badalku27/Mern-movie-Review.git
   cd Mern-movie-Review
   ```

2. **Backend Configuration**
   ```bash
   cd backend
   npm install
   ```
   
   Create `.env` file:
   ```env
   PORT=5000
   CONNECTION_URL=your_mongodb_atlas_connection_string
   JWT_SECRET=your_secure_jwt_secret
   ```

3. **Frontend Configuration**
   ```bash
   cd ../frontend
   npm install
   ```
   
   Create `.env` file:
   ```env
   REACT_APP_CLIENT_ID=your_google_oauth_client_id
   ```

4. **Launch the Application**
   
   Terminal 1 - Backend:
   ```bash
   cd backend
   npm start
   ```
   
   Terminal 2 - Frontend:
   ```bash
   cd frontend  
   npm start
   ```
   
   🌐 Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 **API Documentation**

### **Authentication Endpoints**
```
POST /user/signin     # User login
POST /user/signup     # User registration  
```

### **Movie Review Endpoints**
```
GET    /posts         # Retrieve all reviews
POST   /posts         # Create new review (auth required)
PATCH  /posts/:id     # Update review (auth required)
DELETE /posts/:id     # Delete review (auth required)
PATCH  /posts/:id/likePost  # Like/unlike review (auth required)
```

## ⚙️ **Environment Setup**

### **MongoDB Atlas Setup**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create new cluster
3. Set up database user
4. Get connection string
5. Add to backend `.env` file

### **Google OAuth Configuration**
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add client ID to frontend `.env`

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 **Developer**

**Badal Kumar**
- GitHub: [@badalku27](https://github.com/badalku27)
- Portfolio: [Coming Soon]
- LinkedIn: [Connect with me]

---

## 🙏 **Acknowledgments**

- React community for excellent documentation
- Material-UI team for beautiful components  
- MongoDB for reliable database solutions
- Google for OAuth2 services
- All contributors and testers

---

**⭐ Star this repo if you find it helpful!**
