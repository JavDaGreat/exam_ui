"use client";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <section className="bg-main  bg-cover	h-screen w-screen flex flex-col space-y-80 items-center scroll-smooth  ">
        <Navbar />
        <button className="rounded-md border-2 w-36 h-12 text-gray-200 hover:shadow-slate-200 hover:shadow-[0_10px_20px]">
          <a href="#video">See the Beast</a>
        </button>
      </section>
      <section className="w-screen h-full" id="video">
        <video height={"1080px"} width={"1920px"} controls>
          <source src="../app/m4.mp4" />
        </video>
      </section>
    </>
  );
}
