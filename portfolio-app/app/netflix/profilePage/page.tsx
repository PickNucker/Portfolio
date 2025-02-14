'use client';

import React from 'react';
import { Button } from '../../material-tailwind';

const profilePage = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="relative min-h-screen w-full bg-black bg-opacity-40 flex items-center justify-center">
        <div className="">
          <div className="text-8xl text-white w-max mx-auto">
            Who is watching?
          </div>
          <div className="flex-col items-center justify-center w-max mx-auto">
            <div
              onClick={() => {
                console.log('Profile wurde angeklickt');
              }}
              className="flex w-10 mx-auto gap-20 justify-center items-center"
            >
              <div className="group flex flex-col gap-4 mx-auto w-44 justify-center items-center">
                <div className="flex-col border-4 border-transparent rounded-xl bg-center w-52 h-52 justify-center items-center group-hover: cursor-pointer group-hover:border-white mt-10">
                  <img
                    src="/default-blue.png"
                    alt="Profile"
                    className="rounded-lg"
                  ></img>
                </div>
                <span className="text-2xl text-gray-500 group-hover:text-white group-hover: cursor-pointer">
                  Name
                </span>
              </div>
              <div className="group flex flex-col gap-4 mx-auto w-44 justify-center items-center">
                <div className="flex-col border-4 border-transparent rounded-xl bg-center w-52 h-52 justify-center items-center group-hover: cursor-pointer mt-10">
                  <img
                    src="/image_transparent_background_plus-removebg-preview.png"
                    alt="Profile"
                    className="rounded-lg hover:bg-gray-300 pb-1 pt-1"
                  ></img>
                </div>
                <span className="text-2xl text-gray-500 group-hover:text-white group-hover: cursor-pointer ">
                  Add profile
                </span>
              </div>
            </div>
            <Button
              variant="outlined"
              className="text-xl text-gray-700 border-2 rounded-none border-gray-800 hover:cursor-pointer hover:border-white hover:text-white my-20"
            >
              Manage profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profilePage;
