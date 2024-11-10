import "./App.css";
import shop from "./image.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cookies and Beyond</h1>
        <h5>Where cookies maniacs gather</h5>
        <img src={shop} alt="logo" />
      </header>
    </div>
  );
}

export default App;
{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
}
