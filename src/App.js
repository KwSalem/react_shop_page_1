import "./App.css";
import shop from "./images/image.png";
import ProductItem from "./Components/ProductItem";

function App() {
  // JSX Codes is Below
  return (
    <div className="App">
      {/* Header of page */}
      <header className="App-header">
        <h1>Cookies and Beyond</h1>
        <h5>Where cookies maniacs gather</h5>
        <img src={shop} className="Shop-Image" alt="shop" />
      </header>
      {/* display Products List */}
      <div className="Products-Container">{ProductItem}</div>
    </div>
  );
}

export default App;
