import '../config/firebaseApp';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

const auth = getAuth();

export default {
  async signIn({username, password}) {
    const email = this.ensureEmail(username);
    return signInWithEmailAndPassword(auth, email, password)
      .then(this.getUserFromCredentials)
      .catch(error => {
        console.error(error);
        throw mapFirebaseErrorToMessage(error);
      });
  },

  ensureEmail(username) {
    return username.includes('@') ? username : `${username}@gmail.com`;
  },

  getUserFromCredentials({user}) {
    return {
      id: user.uid,
      username: user.displayName,
    };
  },

  async signUp({username, password}) {
    const email = this.ensureEmail(username);
    return createUserWithEmailAndPassword(auth, email, password)
      .then(credentials => this.updateDisplayName(credentials, username))
      .then(this.getUserFromCredentials)
      .catch(error => {
        console.error(error);
        throw mapFirebaseErrorToMessage(error);
      });
  },

  async updateDisplayName(credentials, displayName) {
    await updateProfile(credentials.user, {displayName});
    return credentials;
  },
};

function mapFirebaseErrorToMessage(error) {
  switch (error.code) {
    case 'auth/wrong-password':
      return 'Wrong password';
    case 'auth/too-many-requests':
      return 'Too many attempts. Try again later.';
    case 'auth/email-already-in-use':
      return 'Already registered. Please login.';
    default:
      return "Couldn't authenticate. Try again later.";
  }
}
