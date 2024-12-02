const mongoose = require("mongoose");

// MongoDB connection string
const uri = "mongodb://127.0.0.1:27017/MongoDB_Books";

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Define a schema for books
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  year: Number,
});

// Create a model for books
const Book = mongoose.model("Book", bookSchema);

// Perform operations
async function run() {
  try {
    // Insert sample data
    await Book.insertMany([
      { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937 },
      { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960 },
      { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },
    ]);
    console.log("Sample data inserted!");

    // Retrieve the titles of all books
    const titles = await Book.find({}, { title: 1, _id: 0 });
    console.log("All book titles:", titles);

    // Find all books written by "J.R.R. Tolkien"
    const tolkienBooks = await Book.find({ author: "J.R.R. Tolkien" });
    console.log("Books by J.R.R. Tolkien:", tolkienBooks);

    // Update the genre of "1984" to "Science Fiction"
    await Book.updateOne({ title: "1984" }, { $set: { genre: "Science Fiction" } });
    console.log("Updated genre of '1984'");

    // Delete the book "The Hobbit"
    await Book.deleteOne({ title: "The Hobbit" });
    console.log("Deleted 'The Hobbit'");
  } catch (err) {
    console.error("Error during operations:", err);
  } finally {
    // Close the database connection 
    mongoose.connection.close();
  }
}

// Run the operations
run();
