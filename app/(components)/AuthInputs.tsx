import { Inputs } from './AuthModal';

export default function AuthInputs({
  inputs,
  handleChangeInputs,
  isSignin,
}: {
  inputs: Inputs;
  handleChangeInputs: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignin: boolean;
}) {
  const { firstName, lastName, email, phone, city, password } = inputs;
  return (
    <div className=''>
      {!isSignin && (
        <div className='my-3 flex justify-between text-sm'>
          <input
            onChange={handleChangeInputs}
            value={firstName}
            name='firstName'
            type='text'
            placeholder='first name'
            className='border rounded px-2 py-3 w-[49%]'
          />
          <input
            onChange={handleChangeInputs}
            value={lastName}
            name='lastName'
            type='text'
            placeholder='last name'
            className='border rounded px-2 py-3 w-[49%]'
          />
        </div>
      )}
      <div className='my-3 flex justify-between text-sm'>
        <input
          onChange={handleChangeInputs}
          value={email}
          name='email'
          type='email'
          placeholder='email'
          className='border rounded px-2 py-3 w-full'
        />
      </div>
      {!isSignin && (
        <div className='my-3 flex justify-between text-sm'>
          <input
            onChange={handleChangeInputs}
            value={phone}
            name='phone'
            type='text'
            placeholder='phone'
            className='border rounded px-2 py-3 w-[49%]'
          />
          <input
            onChange={handleChangeInputs}
            value={city}
            name='city'
            type='text'
            placeholder='city'
            className='border rounded px-2 py-3 w-[49%]'
          />
        </div>
      )}
      <div className='my-3 flex justify-between text-sm'>
        <input
          onChange={handleChangeInputs}
          value={password}
          name='password'
          type='password'
          placeholder='password'
          className='border rounded px-2 py-3 w-full'
        />
      </div>
    </div>
  );
}
