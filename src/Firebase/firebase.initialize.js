import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
