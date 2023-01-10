import { initializeApp } from 'firebase/app';
import {getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';




// TODO: Replace the following with your app's Firebase project configuration

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeazv_WpZk6COPy0kcENb8st6a6EUTKuw",
    authDomain: "crwn-clothing-db-fed97.firebaseapp.com",
    projectId: "crwn-clothing-db-fed97",
    storageBucket: "crwn-clothing-db-fed97.appspot.com",
    messagingSenderId: "1016089774044",
    appId: "1:1016089774044:web:580c77257207808deb3119"
  };

  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider)
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth:any,additionalInformation = {displayName:'Dani'}) => {
    if(!userAuth) return;
    const userDocRef = doc(db,'users', userAuth.uid);
   
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists())
    {
       const {displayName , email} = userAuth;
       const createdAt  = new Date();
       try{
        await setDoc(userDocRef, {
          
            displayName,
            email,
            createdAt,
            ...additionalInformation as object,
           
        });
       }catch(error:any){
        console.log('error creating the user',error.message );

       }
    }
   
    return userDocRef;
   

  }

  export const createAuthUserWithEmailAndPassword = async(email:string,password:string) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password)

  }

  export const signInAuthUserWithEmailAndPassword = async(email:string,password:string) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password)

  }