'use client';

import React from 'react';
import { Homepage } from './Homepage';
import { SessionProvider } from 'next-auth/react';

const Page = () => {
  return <Homepage />;
};

export default Page;
