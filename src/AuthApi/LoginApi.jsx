import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,signOut } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";

export const LoginApi = (email, password) => {
  try {
   const response= signInWithEmailAndPassword(auth, email, password);
   return response;
  } catch (err) {
    return err;
  }
};

export const SignUpApi = (email, password) => {
  try {
   const response= createUserWithEmailAndPassword(auth, email, password);
   return response;
  } catch (err) {
    return err;
  }
};

export const GoogleLoginApi = (email, password) => {
  try {
    const googleProvider=new GoogleAuthProvider();
   const res=signInWithPopup(auth,googleProvider)
   return response;
  } catch (err) {
    return err;
  }
};


export const onLogout =()=>{
     try{  signOut(auth)
      
     }
     catch (err)
     {
      return
     }
}