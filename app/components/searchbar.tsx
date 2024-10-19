'use client'
import React, { useState } from 'react';
interface SearchBarProps {
  onSearch: (id: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchId, setSearchId] = useState('');

  const handleSearch = () => {
    onSearch(searchId);
    setSearchId(''); // Clear the input field after search
  };

  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="Enter UserID"
        className="  border-4  border-gray-200 w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;