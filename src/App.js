import "./App.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "./Firebase/firebase.initialize";

initializeAuthentication();

const provider = new GoogleAuthProvider();

function App() {
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(user);
    });
  };

  return (
    <div className="App">
      <h1>Yo Bro</h1>

      <button onClick={handleGoogleSignIn}>google sign in</button>
    </div>
  );
}

export default App;
