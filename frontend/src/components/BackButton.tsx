import React from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const BackButton: React.FC<{ link: string }> = ({ link }) => {
    return (
        <Link to={link}>
            <div className='bg-green-600 p-3 cursor-pointer hover:bg-green-700 transition duration-300 rounded-xl'>
                <IoChevronBackOutline color='white' />
            </div>
        </Link>
    )
}

export default BackButton