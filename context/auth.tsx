// context/AuthContext.tsx
import { useRouter } from 'expo-router';
import * as React from 'react';
import * as AuthService from '../service/auth';

const AuthContext = React.createContext<any>(null);

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const [user, setUser] = React.useState<string | undefined>('');

  const signIn = async (username: string, password: string) => {
    try {
      const userData = await AuthService.signIn(username, password);
      setUser(userData.username); // Assuming you get the username from the API response
      router.push('/'); // Navigate to the home screen after successful sign-in
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  const signUp = async (username: string,email: string, password: string) => {
    try {
      await AuthService.signUp(username, password, email);
      router.push('/(auth)/login'); // Navigate to the login screen after successful registration
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  const signOut = () => {
    setUser('');
    // Optionally, perform additional cleanup tasks (e.g., remove tokens, clear user data, etc.)
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}