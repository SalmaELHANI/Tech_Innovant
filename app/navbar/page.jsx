import Link from "next/link";
import React from 'react';

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "home",
      label: "Home",
      target: "/#",
    },
    {
      id: 2,
      link: "service",
      label: "Service",
      target: "/#service",
    },
    {
      id: 3,
      link: "portfolio",
      label: "Portfolio",
      target: "/#portfolio",
    },
    {
      id: 4,
      link: "footer",
      label: "Contact",
      target: "/#footer",
    },
  ];

  return (
    <nav className='container flex items-center border-b-2 px-6 py-2 h-20 bg-white shadow-xl '>
      <div className='text-xl'>
        <Link href="/#" className="font-bold capitalize ">
          Tech <span className="text-blue-700"> Innovate</span>
        </Link>
      </div>
      <div className="grow">
        <div className="flex ml-4 items-center justify-self-end  gap-2 md:gap-8 ">
          {links.map(({ id, label, target }) => (
            <Link key={id} href={target} className="flexCenter text-black font-[500] text-[15px] hover:bg-blue-700 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
