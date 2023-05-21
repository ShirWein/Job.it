import React from 'react';
import {jobsData} from '../data/jobsData.js';
import {AiFillEdit} from 'react-icons/ai';
import {IoIosAddCircle} from 'react-icons/io';

const jobs = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-4 pt-4'>
        <h2 className='font-bold'>Jobs</h2>
        <h2>Welcome Back, User</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='sm:flex hidden items-center justify-end'>
            <div className='bg-[#224957b8] p-2 rounded-lg flex justify-between items-center space-x-2.5'>
              <IoIosAddCircle />
              <p className='pr-2 font-bold'>Add a New Job</p>
            </div>
          </div>
          <div className='my-3 p-2 grid md:grid-cols-10 sm:grid-cols-4 grid-cols-4 items-center justify-between cursor-pointer'>
            <span className='sm:text-left text-center lg:text-center font-bold'>Company</span>
            <span className='sm:text-left text-center lg:text-center font-bold'>Role</span>
            <span className='sm:text-left text-center lg:text-center font-bold'>Location</span>
            <span className='sm:text-left text-center lg:text-center font-bold'>Stage</span>
            <span className='hidden md:grid text-center lg:text-center font-bold'>Date<br/>saved</span>
            <span className='hidden md:grid text-center lg:text-center font-bold'>Date<br/>applied</span>
            <span className='hidden md:grid text-center lg:text-center font-bold'>Date<br/>test</span>
            <span className='hidden md:grid text-center lg:text-center font-bold'>Date<br/>interview</span>
            <span className='hidden md:grid text-center lg:text-center font-bold'>Date<br/>offer</span>
            <span className='hidden md:grid text-center lg:text-center font-bold'>Applying through</span>
          </div>
          <hr className='bg-black'></hr>
          <ul>
            {jobsData.map((job, id) => (
              <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 md:grid-cols-10 sm:grid-cols-4 grid-cols-4 items-center justify cursor-pointer'>
                <div className='flex'>
                  <div className='pl-2 my-3 p-2 grid md:grid-cols-10 sm:grid-cols-4 grid-cols-4 items-center justify-between cursor-pointer'>
                    <p className='sm:text-left text-center lg:text-center text-black'>{job.Company}</p>
                    <p className='sm:text-left text-center lg:text-center text-black'>{job.Role}</p>
                    <p className='sm:text-left text-center lg:text-center text-black'>{job.Location}</p>
                    <p className='sm:text-left text-center lg:text-center text-black'>
                      <span className={job.Stage == "Saved" ? 
                      'bg-gray-200 p-2 rounded-lg' : job.Stage == "Applied" 
                      ? 'bg-gray-500 p-2 rounded-lg' : job.Stage == "Test" 
                      ? 'bg-blue-300 p-2 rounded-lg' : job.Stage == "Interview" 
                      ? 'bg-blue-200 p-2 rounded-lg' : 'bg-green-300 p-2 rounded-lg'}>
                        {job.Stage}
                      </span>
                    </p>
                    <p className='hidden md:grid text-center lg:text-center text-black'>{job.Date_saved}</p>
                    <p className='hidden md:grid text-center lg:text-center text-black'>{job.Date_applied}</p>
                    <p className='hidden md:grid text-center lg:text-center text-black'>{job.Date_test}</p>
                    <p className='hidden md:grid text-center lg:text-center text-black'>{job.Date_interview}</p>
                    <p className='hidden md:grid text-center lg:text-center text-black'>{job.Date_offer}</p>
                    <div className='sm:flex hidden justify-between items-center'>
                      <p className='hidden md:grid text-center lg:text-center text-black'>{job.Applying_through}</p>
                      <AiFillEdit size={25}/>
                    </div>
                    
                  </div>

                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default jobs