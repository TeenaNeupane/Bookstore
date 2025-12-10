import React, { useState } from "react";
import "./Business.css"; 

const genres = {
  "Fiction": { price: 300, types: ["Novels", "Short Stories", "Fantasy", "Sci-Fi"] },
  "Non-Fiction": { price: 250, types: ["Biographies", "Self-Help", "Business", "Science"] },
  "Educational": { price: 400, types: ["Textbooks", "Dictionaries", "Cookbooks", "Health"] },
  "Children’s Books": { price: 200, types: ["Picture Books", "Fairy Tales", "Young Adult"] }
};

const Business = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedBookType, setSelectedBookType] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleTransaction = (type) => {
    if (!selectedGenre || !selectedBookType) {
      alert("Please select both genre and book type!");
      return;
    }

    const genreData = genres[selectedGenre];
    if (genreData) {
      setTotalQuantity(totalQuantity + 1);
      setTotalPrice(totalPrice + genreData.price);
      alert(`${type} successful for ${selectedBookType} in ${selectedGenre} at ₹${genreData.price}`);
    }
  };

  const resetTransactions = () => {
    setTotalQuantity(0);
    setTotalPrice(0);
    setSelectedGenre("");
    setSelectedBookType("");
    alert("Transactions have been reset!");
  };

  return (
    <div className="business-container">
      <h1>Book Marketplace</h1>

      {/* Genre Selection */}
      <div className="genre-selection">
        <label>Select Genre:</label>
        <br />
        <select onChange={(e) => setSelectedGenre(e.target.value)} value={selectedGenre}>
          <option value="">-- Choose Genre --</option>
          {Object.keys(genres).map((genre, index) => (
            <option key={index} value={genre}>{genre} - ₹{genres[genre].price}</option>
          ))}
        </select>
        <br />
      </div>

      {/* Book Type Selection (Appears After Genre is Selected) */}
      {selectedGenre && (
        <div className="book-selection">
          <label>Select Book Type:</label>
          <br />
          <select onChange={(e) => setSelectedBookType(e.target.value)} value={selectedBookType}>
            <option value="">-- Choose Book Type --</option>
            {genres[selectedGenre].types.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
          <br />
        </div>
      )}

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="sell-button" onClick={() => handleTransaction("Sell")}>Sell Books</button>
        <br />
        <button className="buy-button" onClick={() => handleTransaction("Buy")}>Buy Books</button>
        <br />
        <button className="reset-button" onClick={resetTransactions}>Reset Transactions</button>
      </div>

      {/* Summary Section */}
      <div className="summary">
        <h2 style={{ color: "white" }}>Total Transactions</h2>
        <p>Books Sold/Ordered: {totalQuantity}</p>
        <p>Total Price: ₹{totalPrice}</p>
      </div>
    </div>
  );
};
export default Business;
