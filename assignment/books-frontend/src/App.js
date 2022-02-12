import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookNavbar from "./components/BookNavbar/BookNavbar";
import ListingPage from "./pages/ListingPage/ListingPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import NewBookPage from "./pages/NewBookPage/NewBookPage";
import EditBookPage from "./pages/EditBookPage/EditBookPage";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <BookNavbar />
        <AlertProvider template={AlertTemplate} timeout={5000}>
          <Routes>
            <Route path="/" element={<ListingPage />} />
            <Route path="/books" element={<ListingPage />} />
            <Route path="/books/new" element={<NewBookPage />} />
            <Route path="/books/:id" element={<EditBookPage />} />
          </Routes>
        </AlertProvider>
      </HashRouter>
    </div>
  );
}

export default App;
