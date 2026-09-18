# NodeJS-Assignment8

A beginner-friendly Node.js Express assignment created to understand **MongoDB connection using Mongoose, schema creation, model creation, routing, and storing and retrieving user data**.

## Tasks

1. MongoDB Connection
2. Create User Schema
3. Create User Model
4. Create User Router
5. POST `/api/users`
6. GET `/api/users`

## Project Structure

```text
NodeJS-Assignment8/
├── schema/
│   └── userSchema.js
├── model/
│   └── userModel.js
├── router/
│   └── userRouter.js
├── server.js
├── README.md
└── package.json
Concepts Used
Node.js
Express.js
MongoDB
Mongoose
Express Routing
Mongoose Schema
Mongoose Model
express.json()
req.body
res.send()
res.json()
Tasks Performed
Task 1: MongoDB Connection
Connected the Express application to MongoDB using Mongoose.
Database used:
userDatabase
Successful connection message:
MongoDB connected successfully
Task 2: Create User Schema
Created userSchema.js inside the schema folder.
The schema contains the following fields:
name
email
age
course
Task 3: Create User Model
Created userModel.js inside the model folder.
The User model is created using the User schema and exported for use in the router.
Task 4: Create User Router
Created userRouter.js inside the router folder.
The router contains:
POST /api/users
GET /api/users
Task 5: POST /api/users
Used the POST route to accept user data and store it in MongoDB.
Example request:
{
  "name": "Rahul",
  "email": "rahul@gmail.com",
  "age": 22,
  "course": "MCA"
}
Successful response:
User added successfully
Task 6: GET /api/users
Used the GET route to retrieve all users from MongoDB.
The users are returned in JSON format.
MongoDB
Database:
userDatabase
Collection:
users
How to Run
Install the required packages:
npm install
Start the server:
node server.js
Server URL:
http://localhost:8000
Routes
Method	Route	Expected Output
POST	/api/users	User added successfully
GET	/api/users	All users in JSON format
Expected Output
MongoDB Connection
MongoDB connected successfully
Server running on port 8000
POST Request
User added successfully
GET Request
[
  {
    "name": "Rahul",
    "email": "rahul@gmail.com",
    "age": 22,
    "course": "MCA"
  }
]
Screenshots
MongoDB connected successfully
Successful POST request
User data stored in MongoDB
Successful GET request
Project folder structure
Author
Sanika Kangane 👩🏻‍💻
