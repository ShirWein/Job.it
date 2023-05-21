import React from 'react';
import {AiFillEdit} from 'react-icons/ai';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import {FaDollarSign} from 'react-icons/fa';
import {FcCalendar} from 'react-icons/fc';
import {FcMoneyTransfer, FcBriefcase} from 'react-icons/fc';


const TopCards = () => {
  const [value, onChange] = useState(new Date())
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-3 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <div className='flex justify-between'>
                    <h4 className='font-bold text-2xl'>Career Goal</h4>
                    <AiFillEdit size={25} className='pt-2'/>
                </div>
                
                <div className='flex justify-between pt-4'>
                    <p className='text-gray-600'><FcBriefcase size={50}/>Target Title:</p>
                    <p className='text-gray-600'><FcCalendar size={50}/>Target Date:</p>
                    <p className='text-gray-600'><FcMoneyTransfer size={50}/>Target Salary Range:</p>
                </div>
                
            </div>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                
                <h4 className='font-bold text-2xl pb-4'>Dates</h4>
                
                <div>
                    <Calendar onChange={onChange} value={value} />
                </div>
                
   
         
                
                
                
            </div>
        </div>
    </div>
  )
}

export default TopCards