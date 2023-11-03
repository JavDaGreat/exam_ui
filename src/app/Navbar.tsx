import React from "react";
import { IoCarSportOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="flex flex-wrap justify-around items-center h-16 w-screen p-4 bg-black">
      <a
        href="/"
        className="flex items-center gap-4 hover:cursor-pointer text-white">
        <IoCarSportOutline size={"2rem"} /> Fast Cars
      </a>

      <ul className="flex gap-16 m-2 ">
        <li>
          <a
            href="/test_drive"
            className="border-2 border-current p-2 rounded-md text-slate-200 hover:shadow-slate-200 hover:shadow-[0_10px_20px]">
            Test Drive
          </a>
        </li>
        <li>
          <a
            href="/"
            className="border-2 border-current p-2 rounded-md text-slate-200 hover:shadow-slate-200 hover:shadow-[0_10px_20px]">
            Home{" "}
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="border-2 border-current p-2 rounded-md text-slate-200 hover:shadow-slate-200 hover:shadow-[0_10px_20px]">
            Delears
          </a>
        </li>
      </ul>
    </div>
  );
}
