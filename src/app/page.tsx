"use client";
import { BsArrowUpRight } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <section className="bg-main  bg-cover bg-center	h-screen w-screen flex flex-col space-y-80 items-center mb-4 scroll-smooth  justify-center ">
        <button className="rounded-md border-2 w-36 h-12 text-gray-200 hover:shadow-slate-200 hover:shadow-[0_10px_20px]">
          <a href="#video">See the Beast</a>
        </button>
      </section>
      <section
        className="w-screen h-full flex flex-col p-2 gap-2   overflow-hidden lg:flex-row  "
        id="video">
        <div className=" bg-slate-50 opacity-90 rounded-lg w-full h-auto p-2">
          <video
            height={"100%"}
            width={"100%"}
            controls
            className="rounded-lg ">
            <source
              src="https://dl.dropboxusercontent.com/scl/fi/wcgitjf9k2t5ll4aujlv4/m4.mp4?rlkey=6qcc43p2f8nhtutsyq1l41hwt&dl=0"
              type="video/mp4"
            />
          </video>
          <p className="text-black mt-4">
            Under the starry night sky, the BMW M4's engine roars to life,
            propelling you through the darkness with raw power and precision, as
            the adaptive headlights carve a thrilling path ahead. It's a
            nocturnal symphony of speed and elegance that leaves a lasting
            impression.
          </p>

          <a
            className="flex underline underline-offset-4 text-blue-600"
            href="https://www.bmw.se/sv/alla-modeller/m-serie/m4-coupe/2022/overblick.html?&tl=sea-gl-SE_BMW_NC_M4%20COUPE_SWE_BND_ALO_NONE_PERF_NONE_SEAADW-mix-miy-.-sech-G82_BND_M4%20COUPE_MULTI_NONE-.-p-bmw%20m4%20coupe-.-.&gad=1&gclid=Cj0KCQjwtJKqBhCaARIsAN_yS_lvlvp2V8Id_WdkDpwsx_YymBaStbBSTwRjBQXrnq-A2XTO97OXgW0aAgiHEALw_wcB&gclsrc=aw.ds">
            <BsArrowUpRight />
            Link to new M4{" "}
          </a>
        </div>

        <div className="bg-slate-50 opacity-90 rounded-lg w-full h-auto p-6 ">
          <h1 className=" text-center font-bold text-lg text-black">
            BMW M4 F82 Compition
          </h1>
          <img
            className=" rounded-md h-96 mx-auto mt-2"
            src="https://dl.dropboxusercontent.com/scl/fi/8adnrsn6wcc54ptfxykas/luca-david-bQNlTbMcj64-unsplash.jpg?rlkey=wirxmidule2tw6r3joz1oz8m6&dl=0"
            alt="A picture of bmw m4"
          />
          <ul className=" list-disc text-black font-mono p-2">
            <li> 3.0 l6 450Hp</li>
            <li>Rear wheel drive</li>
            <li> 550 Nm Torque</li>
            <li>Acceleration 0-100km/h : 4s</li>
            <li>Top speed : 250km/h</li>
            <li>
              Listen to Exhust Sound of M4
              <audio
                className=" m-2"
                src="https://dl.dropboxusercontent.com/scl/fi/rcavofkyv816yeqp1vr2z/m4Sound.mp3?rlkey=1ts7jp9s418dj4eeqpcsw8lrr&dl=0"
                controls></audio>{" "}
            </li>
          </ul>
          <p className="text-black mt-4">
            The F82 M4 Competition is a high-performance variant of BMW's M4,
            known for its potent 3.0-liter inline-six engine producing 450
            horsepower. It boasts sportier design elements, enhanced handling,
            and quicker acceleration, making it a thrilling sports coupe in the
            M lineup. With a focus on precision and speed, the M4 Competition is
            a track-ready machine that delivers an exhilarating driving
            experience.
          </p>
        </div>
      </section>
    </>
  );
}
