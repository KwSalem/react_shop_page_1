import "./App.css";
import shop from "./images/image.png";

function App() {
  // JavaScript is Below
  // products arrays
  const products = [
    {
      name: "Chocolate Chip Cookies",
      price: 10,
      image:
        "https://d1lgpy5kbjv9mr.cloudfront.net/public%2Frecipe%2Fthumbnail%2F1711348559552%2FUntitled_design_7_.png",
    },
    {
      name: "Cute Cookies",
      price: 10,
      image:
        "https://d1lgpy5kbjv9mr.cloudfront.net/public%2Frecipe%2Fthumbnail%2F1714371033624%2Fpinach_pumpkin_puree_12_.png",
    },
  ];

  const productsList = products.map((product, index) => {
    return (
      /*display Pictures and Names' products and Prices  */
      <div key={index} className="Product-Card">
        <img src={product.image} alt={product.name} className="Product-Image" />
        <h2>{product.name}</h2>
        <p>{product.price} KD</p>
      </div>
    );
  });
  // JSX Codes is Below
  return (
    <div className="App">
      {/* {Header of page } */}
      <header className="App-header">
        <h1>Cookies and Beyond</h1>
        <h5>Where cookies maniacs gather</h5>
        <img src={shop} className="Shop-Image" alt="shop" />
      </header>
      {/* {display Products List} */}
      <div className="Products-Container">{productsList}</div>
    </div>
  );
}

export default App;
