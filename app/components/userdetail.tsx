// 'use client'
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation'
// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
// }

// const UserDetails: React.FC = () => {
//   // const params = useParams<{ id:string }>()
//   const  {id}  = useParams();
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         const data: User = await response.json(); // Specify the type of data
//         setUser(data); // Update the state with the fetched user data
//       } catch (error) {
//         console.error('Error fetching user:', error);
//       }
//     };

//     fetchUser();
//   }, [id]); // Re-fetch user data when the ID changes

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
//       <h1 className="text-black text-lg font-bold mb-4">{user.name}</h1>
//       <p className="text-black">{user.username}</p>
//       <p className="text-black">{user.email}</p>
//       <h2 className="text-black text-lg font-bold mt-4">Address</h2>
//       <p className="text-black">{user.address.street}</p>
//       <p className="text-black">{user.address.suite}</p>
//       <p className="text-black">{user.address.city}</p>
//       <p className="text-black">{user.address.zipcode}</p>
//       <h2 className="text-black text-lg font-bold mt-4">Phone and Website</h2>
//       <p className="text-black">{user.phone}</p>
//       <p className="text-black">{user.website}</p>
//       <h2 className="text-black text-lg font-bold mt-4">Company</h2>
//       <p className="text-black">{user.company.name}</p>
//       <p className="text-black">{user.company.catchPhrase}</p>
//       <p className="text-black">{user.company.bs}</p>
//     </div>
//   );
// };
// export default UserDetails;