import React from 'react';
import { Button } from '../material-tailwind';
import { SignUp } from './SignIn-up/SignUp';

const NetflixCloneApp = () => {
  return (
    <div className="relative  min-h-screen w-full bg-[url('/hero.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">
      <div className="bg-black min-h-screen w-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img
            src="/logo.png"
            alt="netflix-logo"
            className="h-20 mt-12 mb-20"
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-75 py-7 px-12 border-4 rounded-lg border-black">
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetflixCloneApp;
