
# BooksDB - ShopaDropa Assignment
![alt text](https://github.com/Yusuf-Khan-2002/shopa-dropa-assignment/blob/main/media/home.png?raw=true)

![alt text](https://github.com/Yusuf-Khan-2002/shopa-dropa-assignment/blob/main/media/form.png?raw=true)
![alt text](https://github.com/Yusuf-Khan-2002/shopa-dropa-assignment/blob/main/media/delete.png?raw=true)

# Installation

| Prerequisite  | Version |
| ------------- | ------- |
| Node.js       | 14.16.1 |

### First Time Setup

1. Download Node.js from [Node.js (nodejs.org)](https://nodejs.org/en/)
2. Clone this repo using the instructions here [Cloning a repository - GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
3. On your local machine, go into **/assignment/books-frontend** and type in `npm install` in a command line like PowerShell or Bash
4. Go into **/assignment/books-backend** and type in the same command

### Running the Project

1. Navigate to **/assignment/books-backend** and use the command `npm start` to start the Express.js server (Don't close this window while running the app)
2. In a new window navigate to **/assignment/books-frontend** and use the command `npm start` to start the frontend server (Don't close this window while running the app)
3. Go to [http://localhost:3000/#/books](http://localhost:3000/#/books) to start exploring.


# Backend Endpoints

**All Books**
----
  Returns JSON containing an array of all books.

* **URL**
  /books

* **Method:**
  `GET`

* **Example Response**
```{
    "data": [
        {
            "_id": "dd4b6da5-e26f-4a64-9156-397604a4ebba",
            "title": "Kenobi",
            "author": "Del Rey",
            "year": "2013",
            "isbn": "9780345546838",
            "image": {
                "fieldname": "image",
                "originalname": "Kenobi-Hardcover.jpg",
                "encoding": "7bit",
                "mimetype": "image/jpeg",
                "destination": "uploads/",
                "filename": "5ab7e934f53e20e57b879d3276367b76",
                "path": "uploads\\5ab7e934f53e20e57b879d3276367b76",
                "size": 76513
            }
        },
        {
            "_id": "5080ac18-ca8a-408a-b5b7-43260511366a",
            "title": "The Mandalorian Season 2 Junior Novel",
            "author": "Joe Schreiber",
            "year": "2022",
            "isbn": "9781368075961",
            "image": {
                "fieldname": "image",
                "originalname": "51bhHQ4XR3L.jpg",
                "encoding": "7bit",
                "mimetype": "image/jpeg",
                "destination": "test_uploads/",
                "filename": "test1",
                "path": "test_uploads\\test1",
                "size": 33123
            }
        },
        {
            "_id": "5e4ac93d-f933-4806-a1e4-e600dcd77db8",
            "title": "Star Wars: The Mandalorian Junior Novel",
            "author": "Joe Schreiber",
            "year": "2021",
            "isbn": "9781368057134",
            "image": {
                "fieldname": "image",
                "originalname": "51Y0ou0g39L.jpg",
                "encoding": "7bit",
                "mimetype": "image/jpeg",
                "destination": "test_uploads/",
                "filename": "test2",
                "path": "test_uploads\\test2",
                "size": 34485
            }
        }
    ]
}
```

**Book by ID**
----
  Returns JSON containing an a single book.
  
* **URL**
  /books/:id

* **Method:**
  `GET`
* **Example Response**
```
{
    "data": {
        "_id": "dd4b6da5-e26f-4a64-9156-397604a4ebba",
        "title": "Kenobi",
        "author": "Del Rey",
        "year": "2013",
        "isbn": "9780345546838",
        "image": {
            "fieldname": "image",
            "originalname": "Kenobi-Hardcover.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "uploads/",
            "filename": "5ab7e934f53e20e57b879d3276367b76",
            "path": "uploads\\5ab7e934f53e20e57b879d3276367b76",
            "size": 76513
        }
    }
}
```

**Book Image by ID**
----
  Returns an image file of the book cover.

* **URL**
  /books/:id/image

* **Method:**
  `GET`
  

**Create a New Book**
----
  Creates a new book

* **URL**
  /books
  
* **Method:**
  `POST`
 * **Content-Type**
 `multipart/form-data`
 * **Request Parameters**
 
| value  | type   |
|--------|--------|
| title  | string |
| year   | number |
| author | string |
| isbn   | string |
| image  | File   |


 * **Example Response**
```
{
    "data": {
        "_id": "7ebaae05-12ba-4113-ae60-771475aa203d",
        "title": "The Book of Boba Fett",
        "author": "Yusuf Khan",
        "year": "2021",
        "isbn": "9780385364942",
        "image": {
            "fieldname": "image",
            "originalname": "bobf-key-art-2.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "uploads/",
            "filename": "7cb1cd263a9b2ae5f66dbb69ebc8144b",
            "path": "uploads\\7cb1cd263a9b2ae5f66dbb69ebc8144b",
            "size": 637046
        }
    }
}
```

**Delete Book by ID**
----
  Deletes a book by its id.

* **URL**
  /books/:id

* **Method:**
  `DELETE`

**Update Book**
----
  Update a book by its id

* **URL**
  /books/:id
  
* **Method:**
  `PATCH`
 * **Content-Type**
 `multipart/form-data`
 * **Request Parameters (One Required)**
 
| value  | type   |
|--------|--------|
| title  | string |
| year   | number |
| author | string |
| isbn   | string |
| image  | File   |


 * **Example Response**
```
{
    "data": {
        "_id": "7ebaae05-12ba-4113-ae60-771475aa203d",
        "title": "The Book of Boba Fett",
        "author": "Yusuf Khan",
        "year": "2021",
        "isbn": "9780385364942",
        "image": {
            "fieldname": "image",
            "originalname": "bobf-key-art-2.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "uploads/",
            "filename": "7cb1cd263a9b2ae5f66dbb69ebc8144b",
            "path": "uploads\\7cb1cd263a9b2ae5f66dbb69ebc8144b",
            "size": 637046
        }
    }
}
```
