import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://eloquent-swartz-9918f7.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Abigail Yi
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/abigailyi/weather-react"
            target="_blank"
            rel="noreferrer noopener"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://affectionate-clarke-6d6c81.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
