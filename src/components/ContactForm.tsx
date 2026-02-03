import React from "react";
import { useState } from "react";
function ContactForm() {
  const [count, setCount] = useState(0);
  return (
    <div className="pt-10 flex flex-col items-center gap-2 ">
      <h2 className="text-xl font-bold text-gray-800">
        Do you have questions?
      </h2>
      <div className="w-72 flex justify-center items-center flex-col gap-3 bg-white shadow-lg rounded-lg p-6">
        <input
          type="text"
          placeholder=" Your name"
          className=" rounded-l border border-gray-300 placeholder-gray-400 p-2 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500 hover:bg-gray-50"
        />
        <input
          type="text"
          placeholder=" Email"
          className=" rounded-l border border-gray-300 placeholder-gray-400 p-2 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
        />
        <textarea
          placeholder=" Add your message"
          className="h-20 rounded-l border align-text-top border-gray-300 placeholder-gray-400 p-2 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
        />

        <button
          className="w-32  text-amber-50"
          onClick={() => setCount((count) => count + 1)}
        >
          Contact me
        </button>
      </div>
    </div>
  );
}
export default ContactForm;
