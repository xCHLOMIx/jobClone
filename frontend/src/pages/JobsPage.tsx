import React from 'react'
import JobListing from '../components/JobListing';
import { useFetch } from '../hooks/useFetch';

const JobsPage: React.FC = () => {
    const { data: jobs } = useFetch("http://localhost:5000/api/jobs")

    return (
        <div>
            <h1 className='font-bold text-2xl text-green-600'>All Jobs</h1>
            <div className='mt-5 grid grid-cols-2 gap-4'>
                {jobs && jobs.map((job) => (
                    <JobListing job={job} />
                ))}
            </div><br />
        </div>
    )
}

export default JobsPage