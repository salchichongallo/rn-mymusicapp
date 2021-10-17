import {useContext} from 'react';
import {AuthContext} from './AuthProvider';

export function useUser() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useUser must be used inside AuthContext');
  }
  return context.user;
}
