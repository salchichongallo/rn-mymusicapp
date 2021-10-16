import React from 'react';
import SignIn from './src/pages/SignIn/SignIn';
import SignUp from './src/pages/SignUp/SignUp';

function App() {
  const [signningUp, setSigningUp] = React.useState(false);
  return signningUp ? (
    <SignUp onSignIn={() => setSigningUp(false)} />
  ) : (
    <SignIn onSignUp={() => setSigningUp(true)} />
  );
}

export default App;
