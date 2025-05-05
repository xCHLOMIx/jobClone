import React from 'react'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { Link } from 'react-router-dom'
import { IoIosAdd } from "react-icons/io";

const Navbar: React.FC = () => {
    return (
        <div className='bg-green-600 flex justify-between p-3 items-center'>
            <Link to='/'>
                <h1 className='font-bold text-white text-2xl'>Job Clone</h1>
            </Link>
            <div className='flex gap-2 items-center'>
                <SecondaryButton text='All Jobs' link='/job-form' />
                <PrimaryButton text='New Job' link='/job-form' icon={<IoIosAdd size={20}  />} />
            </div>
        </div>
    )
}

export default Navbar