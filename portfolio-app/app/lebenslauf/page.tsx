'use client';

import React from 'react';
import { Button } from '../material-tailwind';
import { FooterStani } from '@/components/footer';

const Lebenslauf = () => {
  return (
    <>
      <object
        width="100%"
        height="400"
        data="http://www.africau.edu/images/default/sample.pdf"
        type="application/pdf"
      >
        {' '}
      </object>
      <div className="bg-profileBackground h-screen">
        <div className="flex flex-col container mx-auto items-center justify-center">
          <Button color="red">Download</Button>
        </div>
        {/* <div className="fixed-top">
          <FooterStani />
        </div> */}
      </div>
    </>
  );
};

export default Lebenslauf;
