import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookCards from "./components/BookCards/BookCards";
import BookNavbar from "./components/BookNavbar/BookNavbar";
import ListingPage from "./pages/ListingPage/ListingPage";

function App() {
  return (
    <div className="App">
      <BookNavbar/>
      <ListingPage/>
    </div>
  );
}

export default App;
