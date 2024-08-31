import { NavbarProfile } from '@/components/navbar'
import React from 'react'
import { Button } from './material-tailwind'

const Home = () => {
  return (
    <div>
      <div className=''>
        <NavbarProfile/>
      </div>
      <section className="flex items-center justify-center h-screen bg-[#221e29] text-white">
        <div className="flex text-center items-center justify-center gap-10">
          <div className='flex-col'>
            <h1 className='text-6xl'>Hi, I'M MUHAMMED</h1>
            <p className='mt-10 mb-10'>I'm a junior <span className='text-red-400'>fullstack developer</span></p>
            <div className='flex items-center justify-center mx-auto'>

            <Button>About me</Button>
            </div>
          </div>
          <img src='backgroundPic.webp' className='size-6/12 bg-opacity-50'></img>
        </div>
    </section>

    <section className="h-screen py-20 px-6 bg-gradient-radial text-gray-900">
        <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-6">About me</h2>
            <p className="text-lg">Hier kannst du etwas über dein Unternehmen oder deine Webseite erzählen.</p>
        </div>
        <div className='flex'>

        </div>
    </section>

    <section className="py-20 px-6 bg-gray-200">
        <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Unsere Dienstleistungen</h2>
            <p className="text-lg">Hier kannst du deine Dienstleistungen oder Angebote beschreiben.</p>
        </div>
    </section>

    <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Kontakt</h2>
            <p className="text-lg">Hier kannst du Kontaktinformationen oder ein Kontaktformular bereitstellen.</p>
        </div>
    </section>
    </div>
  )
}

export default Home