// import { Link } from "react-router-dom";
// import { initializeApp } from 'firebase/app';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { toast } from "react-toastify";
// import { loginStart, loginFailure, loginSuccess } from './redux/userRedux';



// const firebaseConfig = {
//     apiKey: "AIzaSyAjqWQZV9xJE4MBE4oXFe_U1pyt76hAKg4",
//     authDomain: "ecofreak-54c4f.firebaseapp.com",
//     databaseURL: "https://ecofreak-54c4f-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "ecofreak-54c4f",
//     storageBucket: "ecofreak-54c4f.appspot.com",
//     messagingSenderId: "1035874734601",
//     appId: "1:1035874734601:web:1fe21388b28974d2ab1ed8",
//     measurementId: "G-BHWE4DS0ME"
// }
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const SignIn = async (event, email, password, dispatch) => {
//     event.preventDefault();
//     dispatch(loginStart());
//     await signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential?.user
//       dispatch(loginSuccess(userCredential?.user))
//       if(user.displayName!=="null"){
//         toast.success(`Welcome ${user.displayName}`, {
//           position: toast.POSITION.TOP_CENTER,
//           onClose: <Link to='/'/>
//         });
//       } else{
//         toast.success(`Welcome ${user.email}`, {
//           position: toast.POSITION.TOP_CENTER
//         });
//       }
      
//     }).catch((error) => {
//       dispatch(loginFailure());
//       const errorCode = error.code;
//         console.log(errorCode)
//         const errorMessage = error.message;
//         if(error){
//           toast.error(`Sorry! ${errorMessage}`, {
//             position: toast.POSITION.TOP_CENTER
//           })
//         }
//     })
// }

// export const LogOut = async () => {
//   await signOut(auth);
// }





