import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './search.css';

export const Search = () => {
  const [search, setSearch] = useState('');
  return (
    <div className="flex flex-col justify-center">
      <div className="relative p-10 w-full sm:max-w-2xl sm:mx-auto">
        <div className="overflow-hidden z-0 rounded-full relative p-1">
          <form className="relative flex z-50 bg-white rounded-full">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="   Search for products"
              className="rounded-full flex-1 px-4 sm:px-1 md:px-4 lg:px-6 py-4 text-gray-700 focus:outline-none"
            />
            <Link to="/search" state={search}>
              <button className="backdrop-blur-xl text-black rounded-full font-semibold px-2 lg:px-8 py-4 bg-opacity-10 focus:outline-none">
                Search
              </button>
            </Link>
          </form>
          <div className="glow glow-1 z-10 bg-lightgreen absolute"></div>
          <div className="glow glow-2 z-20 bg-yellow absolute"></div>
          <div className="glow glow-3 z-30 bg-green absolute"></div>
          <div className="glow glow-4 z-40 bg-blue absolute"></div>
        </div>
      </div>
    </div>
  );
}
