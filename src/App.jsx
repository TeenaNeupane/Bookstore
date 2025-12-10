import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Business from "./pages/Business";
import Recommendation from "./pages/Recommendation"; // Import Recommendation
import "./App.css";
import RecommendationPage from "./pages/RecommendationPage";
function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/business">Business</Link>
          <Link to="/recommendation">Recommendation</Link> {/* Add Recommendation Link */}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/business" element={<Business />} />
          <Route path="/recommendation" element={<Recommendation />} /> 
          <Route path="/RecommendtionPage" element={<RecommendationPage />} />
          </Routes>

        <footer>
          <p>Contact us at: <a href="mailto:info@example.com">info@example.com</a></p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Library Street, Booktown</p>
        </footer>
      </div>
    </Router>
  );
}
export default App;
