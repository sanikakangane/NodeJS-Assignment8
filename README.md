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
├── Screenshots/
├── model/
│   └── userModel.js
├── router/
│   └── userRouter.js
├── schema/
│   └── userSchema.js
├── README.md
└── server.js
```

## Concepts Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Express Routing
- Mongoose Schema
- Mongoose Model
- `express.json()`
- `req.body`
- `res.send()`
- `res.json()`

## Tasks Performed

### Task 1: MongoDB Connection

Connected the Express application to MongoDB using Mongoose.

Database used:

```text
userDatabase
```

Successful connection message:

```text
MongoDB connected successfully...
```

### Task 2: Create User Schema

Created `userSchema.js` inside the `schema` folder.

The schema contains the following fields:

```text
name
email
age
course
```

### Task 3: Create User Model

Created `userModel.js` inside the `model` folder.

The User model is created using the User schema and exported for use in the router.

### Task 4: Create User Router

Created `userRouter.js` inside the `router` folder.

The router contains the following routes:

```text
POST /api/users
GET /api/users
```

### Task 5: POST `/api/users`

Used the POST route to accept user data and store it in MongoDB.

Example request:

```json
{
  "name": "Rahul",
  "email": "rahul@gmail.com",
  "age": 22,
  "course": "MCA"
}
```

Successful response:

```text
User added successfully...
```

### Task 6: GET `/api/users`

Used the GET route to retrieve all users from MongoDB.

The users are returned in JSON format.

## MongoDB

Database:

```text
userDatabase
```

Collection:

```text
users
```

## How to Run

Install the required packages:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The server runs on:

```text
http://localhost:8000
```

## Routes

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/users` | Add a new user to MongoDB |
| GET | `/api/users` | Retrieve all users from MongoDB |

## Expected Output

### MongoDB Connection

```text
MongoDB connected successfully...
Server running on port 8000
```

### POST Request

```text
User added successfully...
```

### GET Request

```json
[
  {
    "_id": "generated_by_mongodb",
    "name": "Rahul",
    "email": "rahul@gmail.com",
    "age": 22,
    "course": "MCA"
  }
]
```

## Author

**Sanika Kangane 👩🏻‍💻**
