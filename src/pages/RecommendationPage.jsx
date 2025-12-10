import React, { useEffect, useState } from "react";
const dummyBooks = [
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Atomic Habits", author: "James Clear" },
    { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson" },
    { title: "Sapiens", author: "Yuval Noah Harari" }
  ];
const RecommendationPage = () => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  useEffect(() => {
    // Simulate a delay like fetching from server
    setTimeout(() => {
      setRecommendedBooks(dummyBooks);
    }, 500);
  }, []);

  return (
    <div className="recommendation-results">
      <h1>Your Recommendations 📚</h1>
      <ul>
        {recommendedBooks.map((book, idx) => (
          <li key={idx}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationPage;
