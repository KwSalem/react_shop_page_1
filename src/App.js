import "./App.css";
import shop from "./images/image.png";
import ProductItem from "./Components/ProductItem";
import { useState } from "react";
import productList from "./Components/productList";

function App() {
  // counting vistors by clicking
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  const products = productList.map((product) => {
    return <ProductItem myItem={product} />;
  });
  // JSX Codes is Below
  return (
    <div className="App">
      {/* Header of page */}
      <header className="App-header">
        <h1>Cookies and Beyond</h1>
        <h5>Where cookies maniacs gather</h5>
        {/* display vistors counting */}
        <p> ({count}) Vsitors </p>
        <button onClick={handleClick}>
          Click for your visted our website
        </button>{" "}
        <img src={shop} className="Shop-Image" alt="shop" />
      </header>
      {/* display Products List */}
      <div className="Products-Container">{products}</div>
    </div>
  );
}

export default App;
