# Part 1: Express Tasks Application

## Overview
This folder contains:
- `index.js`: The main Express.js application file.
- Supporting files: `package.json` and other necessary configurations for the app.

## Prerequisites
- Node.js and npm installed on your machine.
- PostgreSQL installed locally or accessible via a remote database.

## How to Use

### Setup
1. Install dependencies:
   ```bash
   npm install
2. Start the app
   ```bash
      npm start
   

# Part 2: MongoDB Queries - Book Collection

## Overview

This folder contains MongoDB queries for creating a book collection and performing operations on the data. The main operations include inserting sample book data, retrieving data, updating documents, and deleting documents from the collection.

The following files are included:
- `book.js`: The MongoDB query script for performing the required operations.
- Supporting files: Instructions for setting up MongoDB.

## Prerequisites

- MongoDB installed locally or accessible via a remote MongoDB instance (e.g., MongoDB Atlas).
- MongoDB Compass (optional, for visual query execution).
- Node.js installed on your machine (for running the `book.js` script).

## How to Use

### Setup

1. **Install MongoDB**:
   - If you're using a local MongoDB instance, ensure that MongoDB is installed and running.
   - Alternatively, use **MongoDB Atlas** (a cloud-hosted MongoDB service).
   
2. **Connect to MongoDB**:
   - Open **MongoDB Compass** and connect to your MongoDB instance using your connection credentials (e.g., connection string or localhost details).
   - Alternatively, you can use the **MongoDB Shell** by typing `mongo` in your terminal if you're using a local MongoDB setup.

3. **Install Node.js**:
   - If Node.js is not installed on your machine, download and install it from [nodejs.org](https://nodejs.org/).

### Create the Database and Insert Data

1. **Create the Database**:
   - In MongoDB Compass, click the **`+`** button in the left sidebar to create a new database.
   - Name the database **`MongoDB_Books`**.

2. **Create the Collection**:
   - Once you're in the **`MongoDB_Books`** database, click on the **`Create Collection`** button in the database dashboard.
   - Name the collection **`books`** and click **Create**.

### Running the `book.js` Script

1. **Run the Script using Node.js**:
   - Open your terminal/command prompt.
   - Navigate to the folder where your `book.js` file is located.
   - Run the script by typing:
     ```bash
     node book.js
     ```

2. **Script Actions**:
   - This script will:
     - Insert sample data into the `books` collection.
     - Retrieve all book titles.
     - Find books by a specific author (e.g., J.R.R. Tolkien).
     - Update the genre of **1984** to "Science Fiction".
     - Delete **The Hobbit** from the collection.

### Perform the Queries in MongoDB Compass (Optional)

If you prefer to use MongoDB Compass to manually execute the queries instead of using the `book.js` script, you can follow these steps:

1. **Insert Sample Data**:
   - In the **`books`** collection, click on the **`Insert Document`** button.
   - Add the following sample data:
     - **The Hobbit**: J.R.R. Tolkien, Fantasy, 1937
     - **To Kill a Mockingbird**: Harper Lee, Fiction, 1960
     - **1984**: George Orwell, Dystopian, 1949
   - Click **Insert** to add the documents to the collection.

2. **Retrieve Titles**:
   - Go to the **`Find`** tab in the **`books`** collection.
   - Leave the query filter empty to retrieve all documents and select the **Projection** options to display only the `title`.

3. **Find Books by Author**:
   - In the **`Find`** tab, enter the following query to find books by "J.R.R. Tolkien":
     ```json
     { "author": "J.R.R. Tolkien" }
     ```

4. **Update Genre of "1984"**:
   - In the **`Find`** tab, locate the document for **1984**.
   - Click the pencil icon to edit the document and change the genre to **"Science Fiction"**.
   - Click **Save** to update the document.

5. **Delete "The Hobbit"**:
   - In the **`Find`** tab, locate the document for **The Hobbit**.
   - Click the trash icon to delete the document.

### Expected Results

- **Insert**: The `books` collection will be created with the following documents:
  - **The Hobbit**: J.R.R. Tolkien, Fantasy, 1937
  - **To Kill a Mockingbird**: Harper Lee, Fiction, 1960
  - **1984**: George Orwell, Dystopian, 1949

- **Retrieve Titles**: A list of all book titles.
- **Find Author**: Documents containing books written by "J.R.R. Tolkien".
- **Update Genre**: The genre of "1984" will be updated to "Science Fiction".
- **Delete**: The book "The Hobbit" will be deleted from the collection.
