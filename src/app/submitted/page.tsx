"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MdOutlineFileDownloadDone } from "react-icons/md";

export default function Page() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-test bg-cover bg-center">
      <h1 className=" text-2xl font-bold text-white flex items-center">
        Form Submitted Seccessfully
        <MdOutlineFileDownloadDone color="green" size={"4rem"} />
      </h1>
      <button
        className="border-2 bg-gray-700 border-current p-2 rounded-md text-white 0 hover:shadow-slate-200 hover:shadow-[0_10px_20px]"
        onClick={() => router.push("/")}>
        Back to Home
      </button>
    </div>
  );
}
