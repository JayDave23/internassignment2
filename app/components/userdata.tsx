'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SearchBar from './searchbar';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UserData: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: User[] = await response.json(); // Specify the type of data
        setUsers(data); // Update the state with the fetched user data
        setFilteredUsers(data); // Initialize filtered users with all users
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures this runs only once

  // Function to handle search by ID
  const handleSearch = (id: string) => {
    const filtered = users.filter(user => user.id.toString() === id);
    setFilteredUsers(filtered);
  };

  // Function to handle user deletion
  const handleDelete = (id: number) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  return (
    <div className="h-screen flex flex-col  align-middle items-center">
      <div className="w-[80%] mb-4 p-4">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="w-[80%] mx-auto bg-red-50 rounded-lg shadow-md p-4">
        <h1 className=" text-black text-5xl  font-bold p-4">User Data</h1>
        <div className="grid grid-cols-1 gap-4">
          {filteredUsers.map(user => (
            <div key={user.id} className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:bg-gray-100">
              <Link href={`/users/${user.id}`}>
                <p className="text-black">id:- {user.id}</p>
                <h2 className="text-black text-lg font-bold">Name:- {user.name}</h2>
                <p className="text-black">Username:- {user.username}</p>
                <p className="text-black">Email:- {user.email}</p>
                
              </Link>
              <div className="flex justify-between mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserData;