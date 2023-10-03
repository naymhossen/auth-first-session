/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const [loding, setLoding] = useState(true);

  const googleLogin = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  };

  //create user with email and password
  //ragistration function
  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signin function
  const loginUser = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  }


  //using ovserver
  useEffect(() => {
    onAuthStateChanged( auth, (user) => {
        setUser(user);
        setLoding(false);
    })
  }, [])


  const authentication = { googleLogin, createUser, user, loginUser, logOut, loding };

  return <AuthContext.Provider value={authentication}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
