import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookNavbar from "./components/BookNavbar/BookNavbar";
import ListingPage from "./pages/ListingPage/ListingPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import NewBookPage from "./pages/NewBookPage/NewBookPage";
import EditBookPage from "./pages/EditBookPage/EditBookPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <BookNavbar />
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/books" element={<ListingPage />} />
          <Route path="/books/new" element={<NewBookPage />} />
          <Route path="/books/:id" element={<EditBookPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
