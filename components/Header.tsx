import React from "react";
import HeaderLogo from "./HeaderLogo";
import Navigation from "./Navigation";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Welcome from "./Welcome";

const Header = () => {
  return (
    <header className="bg-[linear-gradient(to_bottom,#19BA92,#38A169,#68D391)] px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 text-slate-400 animate-spin" />
          </ClerkLoading>
        </div>
        <Welcome />
      </div>
    </header>
  );
};

export default Header;
