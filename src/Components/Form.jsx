import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import logo from '../assets/logo-nobg.png';

function Form() {
  const [state, handleSubmit] = useForm('mleyzewl');
  if (state.succeeded) {
    return (
      <div className='w-full'>
        <img src={logo} alt='' className='h-72 w-auto mx-auto flex items-center justify-center' />
        <p className='text-xl font-medium font-montserrat flex justify-center text-center pb-20 text-white'>
          Thanks for Contacting us.<br /> We will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <div className='mt-16 px-4'>
        <h1 className='text-bem-primary flex justify-center text-xl mx-auto font-semibold font-montserrat'>Ready to elevate your business?</h1>
        <h2 className='pt-2 pb-5 text-white flex justify-center mx-auto w-3/4 font-raleway text-center'>Contact us for a free consultation and let's bring your vision to life!</h2>



      <form onSubmit={handleSubmit} className='max-w-xl mx-auto'>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='mt-1 p-2 w-full border rounded-md bg-transparent text-white focus:ring-2 focus:ring-bem-primary'
            required
          />

        </div>

        <div className='mb-4 flex gap-4'>
          <div className='w-1/2'>
            <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
              Phone Number
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              className='mt-1 p-2 w-full border rounded-md bg-transparent text-white focus:ring-2 focus:ring-bem-primary'
              required
            />
          </div>

          <div className='w-1/2'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='mt-1 p-2 w-full border rounded-md bg-transparent text-white focus:ring-2 focus:ring-bem-primary'
              required
            />
          </div>
        </div>

        <div className='mb-4'>
          <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows='4'
            className='mt-1 p-2 w-full border rounded-md bg-transparent text-white focus:ring-2 focus:ring-bem-primary'
            required
          ></textarea>
        </div>

        <button type='submit' className=' bg-bem-primary font-montserrat font-semibold hover:text-black  text-white p-2 px-3 rounded-md'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
