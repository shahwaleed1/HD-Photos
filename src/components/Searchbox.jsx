import React, { useState } from "react";
import { Search } from "lucide-react";

function Searchbox() {
  

  return (
    <div className="flex items-center ms-8">
      <div className="">
        <form className="relative group">
          <input
            type="text"
            placeholder="Search photos..."
            className="min-w-[20rem] h-12 px-6 pr-12 text-lg rounded-full border-2 border-gray-200 
                     focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 
                     transition-all duration-300 ease-in-out bg-white shadow-sm
                     placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full
                     text-gray-400 hover:text-blue-500 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <Search size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Searchbox;
