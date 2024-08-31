'use client';

import { NavbarProfile } from '@/components/navbar';
import React, { useRef } from 'react';
import { Button } from './material-tailwind';
import { FooterStani } from '@/components/footer';
import { PreviousWork } from '@/components/previousWork';

const Home = () => {
  return (
    <div>
      <div className="">
        <NavbarProfile />
      </div>

      <section className="flex items-center justify-center h-screen bg-[#221e29] text-white">
        <div className="flex text-center items-center justify-center gap-10">
          <div className="flex-col">
            <h1 className="text-6xl">Hi, I'M MUHAMMED</h1>
            <p className="mt-10 mb-10">
              I'm a junior{' '}
              <span className="text-red-400">fullstack developer</span>
            </p>
            <div className="flex items-center justify-center mx-auto">
              <Button
                color="red"
                onClick={() => {
                  const element = document.getElementById('aboutMe');
                  element?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                About me
              </Button>
            </div>
          </div>
          <img
            src="backgroundPic.webp"
            className="size-6/12 bg-opacity-50"
          ></img>
        </div>
      </section>

      {/* About Me */}
      <section
        id="aboutMe"
        className="flex h-screen py-20 px-6 bg-gradient-radial bg-gray-400 items-center justify-center"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">About me</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            ipsa nobis eius dolores, rerum, nesciunt error totam enim alias quam
            pariatur nam, culpa delectus facilis reprehenderit facere et ullam
            ducimus..
          </p>
        </div>
        <div className="flex"></div>
      </section>

      {/* Previous Work */}
      <section className="flex bg-profileBackground text-white h-screen py-20 px-6 bg-gradient-radial text-gray-900 items-center justify-center mb-20">
        <div className="container mx-auto">
          <h2 className="flex text-3xl font-semibold mb-20 items-center justify-center">
            Portfolio
          </h2>
          <PreviousWork />
        </div>
        <div className="flex"></div>
      </section>

      {/* Gettin in Contact with me */}
      <section className="bg-white dark:bg-gray-900 mb-40">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact me
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Falls Sie Interesse an einer Zusammenarbeit haben oder ein Angebot
            unterbreiten möchten, lassen Sie es mich gerne wissen.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Deine Email Adresse
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@something.com"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Anliegen
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Lass mich dein Anliegen wissen"
                required
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor={'message'}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Deine Nachricht
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Lass eine Nachricht da"
              ></textarea>
            </div>
            <Button color="red" className="py-3 px-5  text-center text-white">
              Senden
            </Button>
          </form>
        </div>
      </section>

      {/* Gettin in Contact with me */}
      <section className="flex justify-center">
        <FooterStani />
      </section>
    </div>
  );
};

export default Home;
