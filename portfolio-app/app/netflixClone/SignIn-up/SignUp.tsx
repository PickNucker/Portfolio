'use client';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography
} from '../../material-tailwind';
import { TermsOfService } from './TermsOfService';

export function SignUp() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h2" color="blue-gray" className="text-gray-300">
        Sign Up
      </Typography>
      <Typography
        color="gray"
        className="mt-1 font-normal text-gray-600 text-xl"
      >
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-auto">
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 text-gray-400"
          >
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="JohnDoe"
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
        <Button className="mt-6 shadow-none" fullWidth color="red">
          sign up
        </Button>
        <Typography
          color="gray"
          className="mt-4 text-center font-normal text-gray-600"
        >
          Already have an account?{' '}
          <a href="#" className="font-medium hover:text-red-500 text-gray-200">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
