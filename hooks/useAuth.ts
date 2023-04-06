'use client';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../app/(context)/AuthContext';

export default function useAuth() {
  const { loading, data, error, setAuthState } = useContext(AuthContext);
  const signin = async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    handleClose?: () => void
  ) => {
    setAuthState((cur) => ({ ...cur, data: null, error: null, loading: true }));
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/signin',
        {
          email,
          password,
        }
      );
      if (handleClose) handleClose();
      setAuthState((cur) => ({
        ...cur,
        data: response.data,
        error: null,
        loading: false,
      }));
    } catch (error: any) {
      console.log(error);
      setAuthState((cur) => ({
        ...cur,
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      }));
    }
  };
  const signup = async (
    {
      email,
      password,
      firstName,
      lastName,
      city,
      phone,
    }: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      city: string;
      phone: string;
    },
    handleClose?: () => void
  ) => {
    setAuthState((cur) => ({ ...cur, data: null, error: null, loading: true }));
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/signup',
        {
          email,
          password,
          firstName,
          lastName,
          city,
          phone,
        }
      );
      if (handleClose) handleClose();
      setAuthState((cur) => ({
        ...cur,
        data: response.data,
        error: null,
        loading: false,
      }));
    } catch (error: any) {
      console.log(error);
      setAuthState((cur) => ({
        ...cur,
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      }));
    }
  };

  return { signin, signup };
}
