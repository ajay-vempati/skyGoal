Skygoal Innova Technologies - Backend Developer Assignment
This project is a secure backend application built with Node.js, Express.js, MongoDB, and JWT Authentication as part of the evaluation process for Skygoal Innova Technologies.

🚀 Tech Stack
Node.js

Express.js

MongoDB (Mongoose)

JWT (Authentication)

bcryptjs (Password Hashing)

dotenv (Environment Variables)

lodash (Input Validation)

📁 Project Structure
pgsql
Copy
Edit
skygoal-backend/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── .env
├── server.js
├── package.json
⚙️ Setup Instructions
1. Clone the repository
git clone https://github.com/your-username/skygoal-backend.git
cd skygoal-backend
2. Install dependencies
npm install
3. Create .env file
Create a .env file in the root directory and add the following:
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
4. Run the server
For development:
npm run dev
For production:
npm start
Server will run on: http://localhost:5000

🛡️ Features
User Authentication (Register, Login)

Password Hashing using bcryptjs

JWT Token Generation and Validation

Role-based Access Control (Admin and User)

CRUD operations for Users and Tasks

Protected Routes

MongoDB Atlas database integration

Secure environment variable management with dotenv

🛠️ API Endpoints
User Routes

Method	Route	Access	Description
POST	/api/users/register	Public	Register a new user
POST	/api/users/login	Public	User login
DELETE	/api/users/:id	Admin	Delete a user (Admin only)
Task Routes

