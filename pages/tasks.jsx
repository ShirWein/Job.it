import React from 'react';
import {data} from '../data/data.js';
import {BsListTask} from 'react-icons/bs';
import {AiFillEdit} from 'react-icons/ai';
import {IoIosAddCircle} from 'react-icons/io';

const tasks = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-4 pt-4'>
        <h2 className='font-bold'>Tasks</h2>
        <h2>Welcome Back, User</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='sm:flex hidden items-center justify-end'>
            <div className='bg-[#224957b8] p-2 rounded-lg flex justify-between items-center space-x-2.5'>
              <IoIosAddCircle />
              <p className='pr-2 font-bold'>Add a New Task</p>
            </div>
          </div>
          <ul>
            {data.map((task, id) => (
              <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
                <div className='bg-[#22495772] rounded-lg p-4'><BsListTask className='text-black font-bold'/></div>
                <div className='flex justify-between items-center'>
                  <p className='pl-4 font-bold'>{task.name}</p>
                  <p className='lg:flex sm:hidden absolute right-6 text-black text-sm pt-0 pr-4 justify-between space-x-2 items-center'>{task.date}<AiFillEdit size={25}/></p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default tasks