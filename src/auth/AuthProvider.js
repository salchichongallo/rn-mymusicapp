import React, {useState, createContext} from 'react';

export const AuthContext = createContext();

function AuthProvider({children}) {
  const [user, setUser] = useState({});
  const onAuth = nextUser => setUser(nextUser);
  return (
    <AuthContext.Provider value={{user, onAuth}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
