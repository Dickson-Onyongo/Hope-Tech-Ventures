import "./App.css";

export default function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>Hope Tech Ventures</p>
        </header>

        <div className="App-body">
          <p>HELLO WORLD</p>
          <form>
            <label forhtml="email">Email:</label>
            <input type="email" id="email" name="email"></input>

            <label forhtml="password">password:</label>
            <input type="password" id="password"></input>

            <button type="submit">Ok</button>
          </form>
        </div>

        <footer className="App-footer">
          <p>I LOVE CODING</p>
        </footer>
      </div>
    </>
  );
}
