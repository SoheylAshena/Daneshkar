## API Endpoints

### Authentication

#### Register User

- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```

- **Response:**

  ```json
  {
    "_id": "user_id",
    "username": "your_username",
    "token": "your_jwt_token"
  }
  ```

#### Login User

- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```

- **Response:**

  ```json
  {
    "_id": "user_id",
    "username": "your_username",
    "token": "your_jwt_token"
  }
  ```

### Books

#### Get All Books

- **URL:** `/api/books`
- **Method:** `GET`
- **Authentication:** Required

#### Get Single Book

- **URL:** `/api/books/:id`
- **Method:** `GET`
- **Authentication:** Required

#### Create Book

- **URL:** `/api/books`
- **Method:** `POST`
- **Authentication:** Required
- **Request Body:**

  ```json
  {
    "title": "book_title",
    "author": "book_author",
    "publicationYear": 2022,
    "isbn": "book_isbn"
  }
  ```

#### Update Book

- **URL:** `/api/books/:id`
- **Method:** `PUT`
- **Authentication:** Required
- **Request Body:**

  ```json
  {
    "title": "updated_book_title",
    "author": "updated_book_author",
    "publicationYear": 2023,
    "isbn": "updated_book_isbn"
  }
  ```

#### Delete Book

- **URL:** `/api/books/:id`
- **Method:** `DELETE`
- **Authentication:** Required
