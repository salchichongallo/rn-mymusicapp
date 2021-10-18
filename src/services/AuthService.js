import '../config/firebaseApp';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const auth = getAuth();

export default {
  async signIn({username, password}) {
    const email = username.includes('@') ? username : `${username}@gmail.com`;
    return signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => ({
        id: user.uid,
        username: user.displayName,
      }))
      .catch(error => {
        console.error(error);
        throw mapFirebaseErrorToMessage(error);
      });
  },
};

function mapFirebaseErrorToMessage(error) {
  switch (error.code) {
    case 'auth/wrong-password':
      return 'Wrong password';
    case 'auth/too-many-requests':
      return 'Too many attempts. Try again later.';
    default:
      return "Couldn't login. Try again later.";
  }
}
