# User Management Backend

This is a Node.js backend for a user management system built with Express.js, designed to handle user authentication and management functionalities.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Routes](#routes)
  - [Authentication Routes](#authentication-routes)
  - [User Routes](#user-routes)
- [Starting the Server](#starting-the-server)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
    ```
2. Install the necessary packages:
    ```bash
    npm install
    ```
3. Create a .env file in the root directory of the project with the following content:
    ```bash 
    MONGO_URI="mongodb+srv://negiaditya1234:negi8979@cluster0.qsswk1d.mongodb.net/userManagement?retryWrites=true&w=majority"
    JWT_SECRET="secret123jasdn1nidniansd"
    ```

## Starting the Server

To start the server, run the following command:

```bash
node index.js
```
You should see the message indicating that the server is running:

Server running on port 3000
Now your backend server is ready to handle requests!


### Routes
Authentication Routes: /auth
POST /auth/login:

Description: Log in a user.
Request Body:
```json
{
  "email": "user@example.com",
  "password": "yourPassword"
}
```

POST /auth/register:

Description: Register a new user.
Request Body:
```json
{
  "email": "user@example.com",
  "password": "yourPassword"
}
```

User Routes: /users
GET /users:

Description: Get a list of all users. (Requires authentication)
GET /users/:id:

Description: Get details of a specific user by ID. (Requires authentication)
PUT /users/:id:

Description: Update user information by ID. (Requires authentication)
Request Body:
```json
{
  "email": "updated@example.com",
  "name": "Updated Name"
}
```
DELETE /users/:id:
Description: Delete a user by ID. (Requires authentication)


License
This project is licensed under the MIT License.








