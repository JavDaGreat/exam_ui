"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { SiBmw } from "react-icons/si";
import Navbar from "../Navbar";

export default function TestDrivePage() {
  const router = useRouter();
  return (
    <div className="min-h-screen p-6 bg-white flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-black flex  items-center gap-2">
            Test Drive Bmw <SiBmw size={"2rem"} />
          </h2>
          <p className="text-black mb-6"> Give it a try.</p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-black">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5 text-black">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      alt="Name input"
                    />
                  </div>

                  <div className="md:col-span-5 text-black">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="email@domain.com"
                      alt="Email input"
                    />
                  </div>

                  <div className="md:col-span-3 text-black">
                    <label htmlFor="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                      alt="Adress input"
                    />
                  </div>

                  <div className="md:col-span-2 text-black">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                      alt="City input"
                    />
                  </div>

                  <div className="md:col-span-2 text-black">
                    <label htmlFor="country">Country / region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="country"
                        id="country"
                        placeholder="Country"
                        className="px-4 appearance-none outline-none text-black w-full bg-transparent"
                        value=""
                        alt="Country input"
                      />
                      <button className="cursor-pointer outline-none focus:outline-none transition-all text-black hover:text-red-600"></button>
                      <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-black hover:text-blue-600"></button>
                    </div>
                  </div>

                  <div className="md:col-span-2 text-black">
                    <label htmlFor="state">State / province</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="state"
                        id="state"
                        placeholder="State"
                        className="px-4 appearance-none outline-none text-black w-full bg-transparent"
                        value=""
                        alt="State input"
                      />
                      <button className="cursor-pointer outline-none focus:outline-none transition-all text-black hover:text-red-600"></button>
                      <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-black hover:text-blue-600"></button>
                    </div>
                  </div>

                  <div className="md:col-span-1 text-black">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                      value=""
                      alt="zip code input"
                    />
                  </div>
                  <select className=" bg-inherit mt-2 border-2 border-inherit  w-full max-w-md text-black">
                    <option disabled selected>
                      Select car
                    </option>
                    <option>M4 compition</option>
                    <option>M4</option>
                  </select>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button
                        onClick={() => router.push("/submitted")}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
