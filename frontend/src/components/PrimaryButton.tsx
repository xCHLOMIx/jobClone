import React from 'react'
import { Link } from 'react-router-dom'

interface Button {
    text: string,
    link: string,
    icon?: any
}

const PrimaryButton: React.FC<Button> = ({ icon, text, link }) => {
    return (
        <Link to={link}>
            <button className='btn flex items-center gap-2 bg-white hover:bg-white/90 cursor-pointer transition duration-300 text-green-600'>{icon}{text}</button>
        </Link>
    )
}

export default PrimaryButton