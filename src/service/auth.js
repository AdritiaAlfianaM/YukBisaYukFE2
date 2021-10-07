import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from '../config/firebaseConfig';

export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('profile');
googleProvider.addScope('email');

const auth = getAuth(app);

export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const { user } = result;
      return { credential, token, user };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const { email } = error;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      return { errorCode, errorMessage, email, credential };
    });
};

// kenapa ngga ada export default?
