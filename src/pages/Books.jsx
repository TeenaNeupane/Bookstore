import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Books.css";

// Book data categorized by exact genre
const genreData = {
  fantasy: {
    category: "Fiction",
    price: 300,
    books: [
      "The Hobbit by J.R.R. Tolkien",
      "Harry Potter by J.K. Rowling",
      "The Name of the Wind by Patrick Rothfuss",
    ],
  },
  mystery: {
    category: "Fiction",
    price: 280,
    books: [
      "Gone Girl by Gillian Flynn",
      "The Girl with the Dragon Tattoo by Stieg Larsson",
      "Sherlock Holmes by Arthur Conan Doyle",
    ],
  },
  "self-help": {
    category: "Non-Fiction",
    price: 250,
    books: [
      "Atomic Habits by James Clear",
      "The 7 Habits of Highly Effective People by Stephen Covey",
      "Think Like a Monk by Jay Shetty",
    ],
  },
  business: {
    category: "Non-Fiction",
    price: 270,
    books: [
      "Rich Dad Poor Dad by Robert Kiyosaki",
      "Zero to One by Peter Thiel",
      "The Lean Startup by Eric Ries",
    ],
  },
};

const Books = ({ addToBusiness }) => {
  const { genre } = useParams();
  const navigate = useNavigate();

  const genreKey = genre.toLowerCase();
  const selected = genreData[genreKey];

  if (!selected) {
    return (
      <div className="books-container">
        <h2>No books found for "{genre}"</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  const handleOrder = () => {
    addToBusiness(selected.category, selected.price);
    navigate("/business");
  };

  return (
    <div className="books-container">
      <h1>{genre.charAt(0).toUpperCase() + genre.slice(1)} Books</h1>
      <h2>Category: {selected.category}</h2>
      <h3>Price: ₹{selected.price}</h3>
      <ul>
        {selected.books.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
      <button onClick={handleOrder}>Order</button>
    </div>
  );
};
export default Books;
