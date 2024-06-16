import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="logo1.svg" alt="Logo" width={30} height={30} />
        <p className="font-semibold  text-white text-2xl ml-2.5">
          Fin<span className="text-green-400">Track</span>
        </p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
