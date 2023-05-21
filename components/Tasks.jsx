import React from 'react';
import {BsListTask} from 'react-icons/bs';
import {data} from '../data/data.js';

const Tasks = () => {
  return (
    <div className='w-full lg:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
        <h4 className='font-bold text-2xl'>Tasks</h4>
        <ul>
          {data.map((task, id) => (
            <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
              <div className='bg-[#22495772] rounded-lg p-4'><BsListTask className='text-black font-bold'/></div>
              <div className=''>
                <p className='pl-4 font-bold'>{task.name}</p>
                <p className='lg:flex md:hidden absolute right-6 text-gray-400 text-sm pt-0'>{task.date}</p>
              </div>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Tasks