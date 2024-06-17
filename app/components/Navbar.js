import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-baseline py-4">
      <h1 className="text-4xl font-bold">
        Football<span className="text-primary">Scores</span>
      </h1>
      <ul className="flex gap-6">
        <Button variant="ghost">
          <Link className="text-xl font-semibold" href="/">
            Home
          </Link>
        </Button>
        <Button variant="ghost">
          <Link className="text-xl font-semibold" href="/about">
            About
          </Link>
        </Button>
        <Button variant="ghost">
          <Link className="text-xl font-semibold" href="/testpage">
            Testing
          </Link>
        </Button>
      </ul>
    </div>
  );
};

export default Navbar;
