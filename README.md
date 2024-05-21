# Kriscent Assignment Backend

This is the backend API for the Kriscent Assignment. It provides routes for user authentication, authorization, and book management. The project uses Node.js, Express, Mongoose, JWT, and Swagger for API documentation.

## Project Structure
backend/
│
├── config/
│   └── db.js
├── controllers/
│   ├── user.controller.js
│   └── book.controller.js
├── logs/
│   ├── requests.log
├── middlewares/
│   ├── authentication.middleware.js
│   ├── authorization.middleware.js
│   ├── requestLogger.middleware.js
│   ├── validation.middleware.js
│   └── validateObjectId.middleware.js
├── models/
│   ├── user.model.js
│   └── book.model.js
├── routes/
│   ├── index.js
│   ├── user.route.js
│   └── book.route.js
├── swagger/
│   ├── swagger.js
│   ├── user.js
│   └── book.js
├── .gitignore
├── index.js
├── package.lock.json
└── package.json



## API Reference

### SWAGGER_DOCS

#### Serve swagger docs
```http
http://localhost:3000/api-docs
```

### USER
#### Register a new user
```http
POST /api/user/register
```

#### Log in a user
```http
POST /api/user/login
```

#### Log out a user
```http
POST /api/user/logout
```

#### Get all users (Admin)
```http
POST /api/user/
```

### BOOK
#### Create a new book (Admin, Author)
```http
POST /api/book
```

#### Update a book (Admin, Author)
```http
PUT /api/book/:id
```

#### Delete a book (Admin)
```http
DELETE /api/book/:id
```

#### Get all books
```http
GET /api/book
```

#### Get a single book by ID
```http
GET /api/book/:id
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`MONGO_URL`
`JWT_SECRET_KEY`


## Run Locally

Clone the project

```bash
  git clone https://github.com/kirti136/kriscent_assignment.git
```

Go to the project directory

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start or npm start
```


## Tech Stack

- **Node.js**: JavaScript runtime for server-side programming.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **JWT**: JSON Web Token for secure user authentication.
- **Swagger**: Simplifies API development by documenting API endpoints.
- **express-validator**: Middleware for validating and sanitizing user input.
- **dotenv**: Loads environment variables from a `.env` file.
- **cookie-parser**: Parse HTTP request cookies.
- **cors**: Provides a Connect/Express middleware to enable CORS.
- **bcryptjs**: Library to hash passwords.
