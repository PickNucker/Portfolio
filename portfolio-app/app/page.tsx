import Image from 'next/image';
import NetflixCloneApp from './netflixClone/netflixCloneApp';
import { Button } from './material-tailwind';

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className=" bg-blue-gray-700 flex gap-4 justify-center">
        <div className="">
          <span className="">
            <h1 className="text-3xl text-deep-orange-200">
              <strong>Portfolio</strong>
            </h1>
          </span>
        </div>
        <div>
          <Button size="lg" className="mt-1 mb-5">
            <a className="border-none" href="./netflixClone">
              Netflix Clone
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
