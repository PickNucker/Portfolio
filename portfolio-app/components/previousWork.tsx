import React, { useEffect, useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Carousel,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card
} from '../app/material-tailwind';

import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/solid';
import { GameType } from '@/types/GameType';
import Link from 'next/link';

export function PreviousWork() {
  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [selectedGame, setSelectedGame] = useState<GameType>()

  const handleOpen = (currentGame: GameType) => {
    setOpen((cur) => !cur);
    setSelectedGame(currentGame);
  }
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  const [gamecollection, setGamecollection] = useState<GameType []>([]);
  
  
    useEffect(() => {
      fetch("/gamecollection.json")
          .then((res) => res.json())
          .then((data: GameType[]) => setGamecollection(data))
          .catch((error) => console.error("Fehler beim Laden:", error));
  }, []);

  const data = [
    {
      label: 'Game Development',
      value: 'gamedevelopment',
      icon: Square3Stack3DIcon,
      desc: (
        <Carousel
          className="rounded-xl -z-10"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill('').map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        > 
            {gamecollection.map((item) => (
            <Card

              className=" w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
              onClick={() => handleOpen(item)}
            >
              <img
                alt={item.game_title}
                className="h-[40rem] w-full object-cover"
                src={item.image}
                />
              {selectedGame && (
                <Dialog size="xl" open={open} handler={() => handleOpen}>
                  <DialogHeader className="justify-between">
                    <div className="flex items-center gap-2">
                      {selectedGame.game_title}
                    </div>
                    <div className="justify-start gap-1">
                      <span className='font-normal text-sm'>{selectedGame.description}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconButton
                        variant="text"
                        size="sm"
                        color={isFavorite ? 'red' : 'blue-gray'}
                        onClick={handleIsFavorite}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                      </IconButton>
                      <Button color="gray" size="sm">
                        <Link className='no-underline text-white hover:text-gray-300' href={selectedGame.download_link}>Download</Link>
                      </Button>
                    </div>
                  </DialogHeader>
                  <DialogBody>
                    <img
                      alt={selectedGame.game_title}
                      className="h-full w-full rounded-lg object-cover object-center"
                      src={selectedGame.image}
                      />
                  </DialogBody>
                  <DialogFooter className="justify-between">
                    <div className="flex items-center gap-16">
                      <div>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          Views
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                          0
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          Downloads
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                          0
                        </Typography>
                      </div>
                      <div className=''>
                        <Button color="red" size="sm">
                          Back
                        </Button>
                      </div>
                    </div>
                  </DialogFooter>
                </Dialog>
            )}
            </Card>
            ))}
        </Carousel>
      )
    },
    {
      label: 'Websites',
      value: 'websites',
      icon: Cog6ToothIcon,
      desc: ""
    }
  ];
  return (
    <Tabs value="gamedevelopment">
      <TabsHeader>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: 'w-5 h-5' })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
