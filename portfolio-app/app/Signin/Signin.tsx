'use client';

import { useEffect, useState } from 'react';
import React from 'react';
import { Typography, Input, IconButton } from '../material-tailwind';

export const Signin = () => {
  const [userName, setUserMail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {}, [userName, password]);

  const handleSingIn = () => {
    console.log(`name: ${userName} und das password: ${password}`);
  };

  return (
    <div className="h-screen bg-[#221e29] flex flex-col justify-center items-center gap-5">
      <div className="bg-[#1f2937] rounded-lg w-[70%] h-[60%] flex overflow-hidden">
        {/* Left side - Form Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center text-white">
          <h1 className="text-3xl font-bold mb-4">Welcome back</h1>
          <p className="mb-8 text-sm">
            Start your website in seconds. Don't have an account?{' '}
            <a href="#" className="text-blue-500">
              Sign up.
            </a>
          </p>

          <div className="mb-4">
            {/* <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-[#1E293B] rounded-md text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="name@company.com"
            /> */}
            <Input
              size="md"
              label="Email"
              color="white"
              onChange={(e: any) => setUserMail(e.target.value)}
            />
          </div>

          <Input
            size="md"
            label="Password"
            color="white"
            onChange={(e: any) => setPassword(e.target.value)}
          />

          <div className="mb-4"></div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="text-blue-500" />
              <label htmlFor="remember" className="ml-2 text-sm">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-700">
              Forgot password?
            </a>
          </div>

          <button
            className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 rounded-lg mb-4"
            onSubmit={handleSingIn}
          >
            Sign in to your account
          </button>

          <div className="my-4 flex items-center gap-2 mb-10">
            <span className="h-[1px] w-1/2 bg-blue-gray-100" />
            <Typography variant="small" color="white">
              or
            </Typography>
            <span className="h-[1px] w-1/2 bg-blue-gray-100" />
          </div>

          <button className="w-full bg-white text-black font-semibold py-2 rounded-lg flex items-center justify-center mb-5">
            <img
              src="https://docs.material-tailwind.com/icons/google.svg"
              alt="metamask"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>

          <button className="w-full bg-white text-black font-semibold py-2 rounded-lg flex items-center justify-center">
            <img
              src="https://docs.material-tailwind.com/icons/Github.svg"
              alt="Github"
              className="w-5 h-5 mr-2"
            />
            Sign in with Github
          </button>
        </div>

        {/* Right side - Image Section */}
        <div className="w-1/2 bg-[#221e29] flex items-center justify-center">
          <img
            src="https://via.placeholder.com/250"
            alt="Placeholder"
            className="h-[350px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};
