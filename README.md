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
- `book.txt`: The MongoDB query script for performing the required operations.
- Supporting files: Instructions for setting up MongoDB.

## Prerequisites

- MongoDB installed locally or accessible via a remote MongoDB instance (e.g., MongoDB Atlas).
- MongoDB Compass (optional, for visual query execution).

## How to Use

### Setup

1. **Install MongoDB**:
   - If you're using a local MongoDB instance, ensure that MongoDB is installed and running.
   - Alternatively, use **MongoDB Atlas** (a cloud-hosted MongoDB service).
   
2. **Connect to MongoDB**:
   - Open **MongoDB Compass** and connect to your MongoDB instance using your connection credentials (e.g., connection string or localhost details).
   - Alternatively, you can use the **MongoDB Shell** by typing `mongo` in your terminal if you're using a local MongoDB setup.

### Create the Database and Insert Data

1. **Create the Database**:
   - In MongoDB Compass, click the **`+`** button in the left sidebar to create a new database.
   - Name the database **`MongoDB_Books`**.
   
2. **Create the Collection**:
   - Once you're in the **`MongoDB_Books`** database, click on the **`Create Collection`** button in the database dashboard.
   - Name the collection **`books`** and click **Create**.

### Run the Queries

1. Open the `book.txt` file and copy the code into the shell.

2. Execute the script using MongoDB Compass's Playground tab or paste it directly into   the MongoDB Shell.
