import React from 'react'
import JobListing from '../components/JobListing';
import { jobs } from '../../data/fake'

// interface Job {
//     title: string,
//     location: string,
//     company: string,
//     description: string
// }

const JobsPage: React.FC = () => {
    return (
        <div>
            <h1 className='font-bold text-2xl text-green-600'>All Jobs</h1>
            <div className='mt-5 grid grid-cols-2 gap-4'>
                {jobs.map((job) => (
                    <JobListing job={job} />
                ))}
            </div><br />
        </div>
    )
}

export default JobsPage