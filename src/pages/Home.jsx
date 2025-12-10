import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const books = [
  {
    title: "Fantasy",
    image: "https://images.pexels.com/photos/1559259/pexels-photo-1559259.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Mystery",
    image: "https://images.pexels.com/photos/261857/pexels-photo-261857.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    title: "Self-help",
    image: "https://images.pexels.com/photos/7230752/pexels-photo-7230752.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Business",
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (genre) => {
    navigate(`/books/${genre.toLowerCase()}`);
  };
  return (
    <div className="home-container">
      <h1 className="animated-text">Welcome to Our Bookstore!</h1>
      <p>Explore a vast collection of books across different genres.</p>

      <div className="book-cards">
        {books.map((book, index) => (
          <div
            className="book-card"
            key={index}
            onClick={() => handleClick(book.title)}
            style={{ cursor: "pointer" }}
          >
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;

