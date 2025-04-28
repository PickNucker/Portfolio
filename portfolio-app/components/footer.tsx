import { Typography } from '../app/material-tailwind';

export function FooterStani() {
  return (
    <footer className="w-full bg-white p-8 ">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img
          src="https://scontent.fayt2-1.fna.fbcdn.net/v/t39.30808-6/251485472_272695604866500_894186765311652589_n.png?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=r0gfWKQ3WtIQ7kNvwGgTFff&_nc_oc=AdnGMU68ae7W5aq1hMTpwnT9hlZw_IwBTEpun8aQLeY3WR1KKVLxPvXeAonQhhVNCA4&_nc_zt=23&_nc_ht=scontent.fayt2-1.fna&_nc_gid=k8fAo32_-19C4kvMTFQdFA&oh=00_AfFPWo_uK8b7aZwwIOZo4vcrPumOz_CFTNGgvjHhtXfd7w&oe=67FDC9D6"
          alt="logo-ct"
          className="w-20"
        />
        <div></div>
        <ul className="flex items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#home"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Home
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#aboutMe"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Me
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#work"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Portfolio
            </Typography>
          </li>
        </ul>

      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2025 Muhammed Aydoğdu
      </Typography>
    </footer>
  );
}
