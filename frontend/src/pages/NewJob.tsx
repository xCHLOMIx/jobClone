import React, { useState } from 'react'
import BackButton from '../components/BackButton';
import { useNavigate } from 'react-router-dom';

const NewJob: React.FC = () => {
    const [title, setTitle] = useState<string>('')
    const [company, setCompany] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [application_method, setApplication_method] = useState<string>('')
    const [error, setError] = useState<string>('')
    const navigator = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const fetchData = async () => {
            const response = await fetch("http://localhost:5000/api/jobs", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, company, description, location, application_method })
            })

            const json = await response.json()

            if (!response.ok) {
                setError(json.error)
            } else {
                navigator('/')
            }
        }

        fetchData()
    }
    return (
        <div>
            <div className='flex gap-4 items-center'>
                <BackButton link='/' />
                <h1 className='font-bold text-2xl text-green-600'>Create new job listing</h1>
            </div>
            <div className='mt-6'>
                {error && <div className='bg-red-100 text-red-500 text-sm border border-red-500 p-3'>{error}</div>}
                <form action="" onSubmit={handleSubmit} className='flex flex-col text-sm gap-3 mt-3'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Job title:</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} className="bg-white border border-black/20 outline-0 focus:border-black/50 p-3" placeholder="UI / UX Designer" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Company:</label>
                        <input type="text" onChange={(e) => setCompany(e.target.value)} className="bg-white border border-black/20 outline-0 focus:border-black/50 p-3" placeholder="XYZ Company" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Job description:</label>
                        <textarea rows={4} onChange={(e) => setDescription(e.target.value)} className="bg-white border border-black/20 outline-0 focus:border-black/50 p-3" placeholder="This JOB is..."></textarea>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Location:</label>
                        <input type="text" onChange={(e) => setLocation(e.target.value)} className="bg-white border border-black/20 outline-0 focus:border-black/50 p-3" placeholder="eg: Kigali, Rwanda" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Application method:</label>
                        <input type="text" onChange={(e) => setApplication_method(e.target.value)} className="bg-white border border-black/20 outline-0 focus:border-black/50 p-3" placeholder="Send email to example@email.com" />
                    </div>
                    <button className='p-2 font-bold bg-green-600 px-4 hover:bg-green700 transition duration-300 cursor-pointer flex items-center gap-2.5 w-max text-white'>
                        <span>Submit</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewJob