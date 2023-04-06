'use client';
import { SetStateAction, createContext, useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { getCookie } from 'cookies-next';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
}

interface State {
  loading: boolean;
  data: User | null;
  error: string | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<SetStateAction<State>>;
}

export const AuthContext = createContext<AuthState>({
  loading: false,
  data: null,
  error: null,
  setAuthState: () => {},
});

export default function AuthContextComp({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<State>({
    loading: false,
    data: null,
    error: null,
  });

  // const { fetchUser } = useAuth();
  const fetchUser = async () => {
    setAuthState((cur) => ({ ...cur, data: null, error: null, loading: true }));
    try {
      const jwt = getCookie('jwt');
      if (!jwt) {
        return setAuthState((cur) => ({
          ...cur,
          data: null,
          error: null,
          loading: false,
        }));
      }
      const response = await axios.get('http://localhost:3000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
      setAuthState((cur) => ({
        ...cur,
        data: response.data,
        error: null,
        loading: false,
      }));
    } catch (error: any) {
      setAuthState((cur) => ({
        ...cur,
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      }));
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}
