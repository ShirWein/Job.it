import React from 'react';
import {BsFillPersonVcardFill, BsThreeDotsVertical} from 'react-icons/bs';
import {networkData} from '../data/network.js';

const network = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-4 pt-4'>
        <h2>Network</h2>
        <h2>Welcome Back, User</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-5 sm:grid-cols-2 grid-cols-2 items-center justify-between'>
            <span className='sm:text-left text-center lg:text-center font-bold'>Name</span>
            <span className='sm:text-left text-center lg:text-center font-bold'>Email</span>
            <span className='hidden md:grid text-center lg:text-center font-bold'>Phone</span>
            <span className='hidden md:grid text-center lg:text-center font-bold'>Company</span>
            <span className='hidden md:grid text-center lg:text-center font-bold'>Role</span>
          </div>

          <hr className='bg-black'></hr>

          <ul>
            {networkData.map((person, id) => (
              <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 md:grid-cols-5 sm:grid-cols-2 grid-cols-2 items-center justify cursor-pointer'>
               
                <div>
                  <div className='pl-2 my-3 p-2 grid md:grid-cols-5 sm:grid-cols-2 grid-cols-2 items-center justify-between cursor-pointer'>
                    <div className='flex items-center'>
                      <div className='bg-[#22495772] rounded-lg p-4'>
                        <BsFillPersonVcardFill className='text-black'/>
                      </div>
                      <p className='pl-6 sm:text-left text-center lg:text-center text-black'>{person.name.first + " " + person.name.last}</p>

                    </div>
                    <p className='pl-2 sm:text-left text-center lg:text-center text-black'>{person.email}</p>
                    <p className='hidden md:grid text-center lg:text-center text-black'>{person.phone}</p>
                    <p className='hidden md:grid text-center lg:text-center text-black'>{person.company}</p>
                    <p className='hidden md:grid text-center lg:text-center text-black'>{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default network