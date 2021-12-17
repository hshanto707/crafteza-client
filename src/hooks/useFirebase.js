import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // SIGN IN WITH GOOGLE

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // GET THE SIGNED IN USER

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
      if (signedInUser) {
        setUser(signedInUser);
      } else {
        setUser([]);
      }
      setIsLoading(false)
    });
    return () => unsubscribe;
  }, [])

  // LOG OUT

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser([]);
      })
      .finally(() => setIsLoading(false))
  }

  // GET NAME

  const getName = (e) => {
    setName(e?.target?.value);
  }

  // GET EMAIL

  const getEmail = (e) => {
    setEmail(e?.target?.value);
  }

  return {
    user,
    isLoading,
    signInUsingGoogle,
    getName,
    getEmail,
    logOut
  };
};

export default useFirebase;