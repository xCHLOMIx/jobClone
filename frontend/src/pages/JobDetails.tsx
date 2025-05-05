import React from 'react'
import BackButton from '../components/BackButton'
import { TiLocation } from 'react-icons/ti'
import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

interface Job {
  id: number,
  title: string,
  location: string,
  company: string,
  description: string
  application_method: string
}

const JobDetails: React.FC = () => {
  const { id } = useParams()

  const { data: job }: { data: any } = useFetch(`http://localhost:5000/api/jobs/${id}`)

  return (
    <>
      <div>
        <div className='flex gap-4 items-center'>
          <BackButton link='/' />
          <h1 className='font-bold text-2xl text-green-600'>Job Details</h1>
        </div>
        {job &&
          <div className='mt-6 bg-white p-4 flex flex-col gap-4 border border-black/20'>
            <div className='flex justify-between'>
              <div>
                <h1 className='font-bold text-xl text-green-800'>{job.title}</h1>
                <span className='text-black/30'>{job.company}</span>
              </div>
              <div className='flex items-center gap-1 bg-green-200 h-max w-max p-2'>
                <TiLocation />
                <span className='text-xs'>{job.location}</span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-lg text-green-600'>Job Description</h2>
              <p className='max-w-[800px]'>{job.description}</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-lg text-green-600'>Application method</h2>
              <p>{job.application_method}</p>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default JobDetails