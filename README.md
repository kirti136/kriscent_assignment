
# Kriscent Assignment Backend

This is the backend API for the Kriscent Assignment. It provides routes for user authentication, authorization, and book management. The project uses Node.js, Express, Mongoose, JWT, and Swagger for API documentation.

## Demo Video and Postman Data

 - [Demo Video](https://drive.google.com/file/d/1H0nnJiNiWfXqdH7soxwjDUf1q2SS9Nyz/view?usp=drive_link)
 - [Postman Data](https://drive.google.com/file/d/1CFR-nJ61t7YGO3e3j9eEECKyN_5mbkP2/view?usp=drive_link)

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


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`MONGO_URL`
`JWT_SECRET_KEY`


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
