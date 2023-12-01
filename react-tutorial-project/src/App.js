import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>This is the project config detail project </h1>
          <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          <Test />
        </header>
      </div>
    </>
  );
}

function Test() {
  return (
    <div>This is to test the second function randering</div>
  )
}

export default App;
