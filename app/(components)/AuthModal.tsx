'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AuthInputs from './AuthInputs';
import useAuth from '../../hooks/useAuth';
import { AuthContext } from '../(context)/AuthContext';
import { Alert, CircularProgress } from '@mui/material';

export interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  password: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignin }: { isSignin: boolean }) {
  const { loading, data, error, setAuthState } = React.useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const btnClass = isSignin
    ? 'bg-blue-400 text-white border p-1 px-4 rounded mr-3'
    : 'border p-1 px-4 rounded';

  const [inputs, setInputs] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    password: '',
  });

  const { signin, signup } = useAuth();
  const handleClick = async () => {
    if (isSignin) {
      await signin(
        { email: inputs.email, password: inputs.password },
        handleClose
      );
    } else {
      await signup(
        {
          email: inputs.email,
          password: inputs.password,
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          phone: inputs.phone,
          city: inputs.city,
        },
        handleClose
      );
    }
  };

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    if (isSignin) {
      setDisabled(!inputs.password || !inputs.email);
    } else {
      setDisabled(
        !inputs.password ||
          !inputs.email ||
          !inputs.firstName ||
          !inputs.lastName ||
          !inputs.password ||
          !inputs.phone
      );
    }
  }, [inputs]);

  return (
    <div>
      <Button className={btnClass} onClick={handleOpen}>
        {isSignin ? 'Sign in' : 'Sign up'}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='p-2 h-[500px]'>
            {loading ? (
              <div className=' flex justify-center mt-20'>
                <CircularProgress />
              </div>
            ) : (
              <>
                <div className='uppercase font-bold text-center pb-2 border-b mb-2'>
                  <p className='text-sm'>
                    {isSignin ? 'Sign In' : 'Create Account'}
                  </p>
                </div>
                {error && (
                  <Alert className='my-4' severity='error'>
                    {error}
                  </Alert>
                )}
                <div className=' m-auto'>
                  <h2 className=' text-2xl font-light text-center'>
                    {isSignin
                      ? 'Log Into Your Account'
                      : 'Create Your OpenTable Account'}
                  </h2>
                  <AuthInputs
                    handleChangeInputs={handleChangeInputs}
                    inputs={inputs}
                    isSignin={isSignin}
                  />
                  <button
                    disabled={disabled}
                    className=' uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400'
                    onClick={handleClick}
                  >
                    {isSignin ? 'Sign in' : 'Create account'}
                  </button>
                </div>
              </>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
