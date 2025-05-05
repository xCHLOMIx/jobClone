import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { TiLocation } from 'react-icons/ti'
import { Link } from 'react-router-dom'

interface Job {
    id: number,
    title: string,
    location: string,
    company: string,
    description: string
}

interface Prop {
    job: Job
}

const JobListing: React.FC<Prop> = ({ job }) => {
    return (
        <div className='listing'>
            <div className='flex justify-between'>
                <div className=''>
                    <h2 className='font-bold text-green-900'>{job.title}</h2>
                    <h3 className='text-gray-400 text-sm'>{job.company}</h3>
                </div>
                <div>
                    <div className='flex items-center gap-1 bg-green-200 w-max p-2'>
                        <TiLocation />
                        <span className='text-xs'>{job.location}</span>
                    </div>
                </div>
            </div>
            <Link to={`/job/${job.id}`}>
                <button className='p-2 font-bold bg-orange-300 hover:bg-orange-400 transition duration-300 cursor-pointer flex items-center gap-2.5 text-xs w-max text-black'>
                    <IoEyeOutline size={18} />
                    <span>View details</span>
                </button>
            </Link>
        </div>
    )
}

export default JobListing