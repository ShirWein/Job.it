import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {RxDashboard, RxPerson, RxSketchLogo} from 'react-icons/rx';
import {BsTable} from 'react-icons/bs';
import {GrTask} from 'react-icons/gr';
import JobitLogo from '../src/assets/logo_no_bg.svg';

const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
            {/* Logo Link */}
            <Link href="/">
                <div className=''>
                    <JobitLogo className="text-6xl h-7 fill-[#224957] pt-0 mt-0"/>
                </div>
                </Link>
                <span className='border-b-[1.5px] border-gray-200 w-full p-2'></span>
                {/* Home Link */}
                <Link href="/">
                <div className='bg-gray-200 hover:bg-[#224957] cursor-pointer mt-3 my-1 p-3 rounded-lg inline-block'>
                    <RxDashboard size={20} />
                </div>
                </Link>
                {/* Tracker Link */}
                <Link href="/jobs">
                <div className='bg-gray-200 hover:bg-[#224957] cursor-pointer my-1 p-3 rounded-lg inline-block'>
                    <BsTable size={20} />
                </div>
                </Link>
                {/* Tasks Link */}
                <Link href="/tasks">
                <div className='bg-gray-200 hover:bg-[#224957] cursor-pointer my-1 text-black p-3 rounded-lg inline-block'>
                    <GrTask size={20} />
                </div>
                </Link>
                {/* Network Link */}
                <Link href="/network">
                <div className='bg-gray-200 hover:bg-[#224957] cursor-pointer my-1  p-3 rounded-lg inline-block'>
                    <RxPerson size={20} />
                </div>
                </Link>
            </div>
        </div>


        <main className='ml-20 w-full'>{children}</main>


    </div>
  )
}

export default Sidebar