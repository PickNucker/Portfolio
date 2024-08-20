'use client';
import { useCallback, useState } from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography
} from '../../material-tailwind';
import { TermsOfService } from './TermsOfService';

export function SignUp() {
  const [renderLogin, setRenderLogin] = useState('login');

  const toggleRender = useCallback(() => {
    setRenderLogin((currentRender) =>
      currentRender === 'login' ? 'register' : 'login'
    );
  }, []);

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h2" color="blue-gray" className="text-gray-300">
        {renderLogin === 'login' ? 'Login' : 'Register'}
      </Typography>
      <Typography
        color="gray"
        className="mt-1 font-normal text-gray-600 text-xl w-96"
      >
        {renderLogin === 'login'
          ? 'Welcome back'
          : 'Nice to meet you! Enter your details to register.'}
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          {renderLogin === 'register' && (
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-3 text-gray-400"
              >
                First Name
              </Typography>
              <Input
                size="lg"
                placeholder="John"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-gray-300"
                labelProps={{
                  className: 'before:content-none after:content-none'
                }}
              />

              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-3 mt-3 text-gray-400"
              >
                Last Name
              </Typography>
              <Input
                size="lg"
                placeholder="Doe"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-gray-300"
                labelProps={{
                  className: 'before:content-none after:content-none'
                }}
              />
            </div>
          )}
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 text-gray-400"
          >
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="john-doe@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-gray-300"
            labelProps={{
              className: 'before:content-none after:content-none'
            }}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 text-gray-400"
          >
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-gray-300"
            labelProps={{
              className: 'before:content-none after:content-none'
            }}
          />
        </div>
        {renderLogin === 'register' && (
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <div>
                  <TermsOfService />
                </div>
              </Typography>
            }
            containerProps={{ className: '-ml-2.5' }}
          />
        )}
        <Button className="mt-6 shadow-none" fullWidth color="red">
          {renderLogin === 'login' ? 'Login' : 'Register'}
        </Button>
        <Typography
          color="gray"
          className="mt-4 text-center font-normal text-gray-600"
        >
          {renderLogin === 'login'
            ? ' New on Netflix?  '
            : ' You already have an Account?  '}
          <a
            href="#"
            className="font-medium hover:text-red-500 text-gray-200"
            onClick={toggleRender}
          >
            {renderLogin === 'login' ? 'SignIn' : 'SignUp'}
          </a>
        </Typography>
      </form>
    </Card>
  );
}
