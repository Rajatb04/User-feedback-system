# User-feedback-system

## Overview
User Feedback System is a full-stack application designed to collect, store, and analyze user feedback. It provides an intuitive interface for users to submit feedback and for administrators to review and respond to submissions.

## Features
- User feedback submission
- Admin dashboard for feedback management

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

### Setting Up MongoDB
1. Download and install MongoDB Community Server from [MongoDB's official website](https://www.mongodb.com/try/download/community)
2. Make sure to select the option to add MongoDB to your system PATH during installation
3. After installation, MongoDB service should start automatically
4. Verify MongoDB is running with `mongod --version` in your terminal

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd User_Feedback_System/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/feedback-system
   ```

4. Start the backend server:
   ```
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd ../frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```



3. Start the frontend development server:
   ```
   npm start
   ```

## Usage
1. Access the frontend at http://localhost:3000
2. Access the admin dashboard at http://localhost:3000/admin (default credentials: admin/admin)
3. Submit feedback through the user interface to test functionality

## Troubleshooting
### MongoDB Connection Issues
- Ensure MongoDB is installed and running (`mongod --version`)
- Check if MongoDB service is active in your system's service manager
- Verify the connection string in your backend `.env` file
- Try using "127.0.0.1" instead of "localhost" in your connection string

### Common Errors
- "Failed to connect to MongoDB": MongoDB service is not running or connection string is incorrect
- "MongooseServerSelectionError": Cannot reach MongoDB at the specified address/port

## Deployment
### MongoDB Production Setup
- For production, consider using MongoDB Atlas for cloud-hosted database
- Update your MONGODB_URI in .env with the Atlas connection string

