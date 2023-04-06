'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AuthInputs from './AuthInputs';

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

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

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
            <div className='uppercase font-bold text-center pb-2 border-b mb-2'>
              <p className='text-sm'>
                {isSignin ? 'Sign In' : 'Create Account'}
              </p>
            </div>
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
              <button className=' uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400'>
                {isSignin ? 'Sign in' : 'Create account'}
              </button>
            </div>
          </div>
          {/* <Typography id='modal-modal-title' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
