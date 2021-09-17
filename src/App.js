import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="mt-2">
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
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
