import logo from "./logo.svg";
import "./App.css";
import initializeAuthentication from "./Firebase/firebase.initialize";
initializeAuthentication();
function App() {
  return (
    <div className="App">
      <h1>Yo Bro</h1>
    </div>
  );
}

export default App;
