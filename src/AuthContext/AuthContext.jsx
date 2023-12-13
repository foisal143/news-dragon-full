import React, { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const UserContext = createContext(null);
const AuthContext = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState('');
  const auth = getAuth(app);
  const googleProvaider = new GoogleAuthProvider();

  // google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvaider);
  };

  // create user with email password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email password
  const signInEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout function
  const logout = () => {
    return signOut(auth);
  };
  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    googleSignIn,
    loader,
    createUser,
    signInEmailPassword,
    logout,
  };
  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
