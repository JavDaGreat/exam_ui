import React from "react";
import { IoCarSportOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="flex flex-wrap justify-around items-center h-16 w-screen p-4">
      <a href="/" className="flex items-center gap-4 hover:cursor-pointer">
        <IoCarSportOutline size={"2rem"} /> Fast Cars
      </a>

      <ul className="flex gap-16 ">
        <li>
          <a
            href="/about"
            className="border-2 border-current p-2 rounded-md text-slate-200 hover:shadow-slate-200 hover:shadow-[0_10px_20px]">
            About
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="border-2 border-current p-2 rounded-md text-slate-200 hover:shadow-slate-200 hover:shadow-[0_10px_20px]">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
