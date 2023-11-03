"use client";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <section className="bg-main  bg-cover	h-screen w-screen flex flex-col space-y-80 items-center mb-4 scroll-smooth  ">
        <Navbar />
        <button className="rounded-md border-2 w-36 h-12 text-gray-200 hover:shadow-slate-200 hover:shadow-[0_10px_20px]">
          <a href="#video">See the Beast</a>
        </button>
      </section>
      <section className="w-screen h-full" id="video">
        <video height={"1080px"} width={"1920px"} controls>
          <source
            src="https://dl.dropboxusercontent.com/scl/fi/wcgitjf9k2t5ll4aujlv4/m4.mp4?rlkey=6qcc43p2f8nhtutsyq1l41hwt&dl=0"
            type="video/mp4"
          />
        </video>
      </section>
    </>
  );
}
