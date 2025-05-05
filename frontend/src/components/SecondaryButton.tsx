import React from 'react'
import { Link } from 'react-router-dom'

interface Button {
    text: string,
    link: string,
    icon?: any
}

const SecondaryButton: React.FC<Button> = ({ icon, text, link }) => {
    return (
        <Link to={link}>
            <button className='btn flex items-center gap-2 hover:bg-white/15 cursor-pointer transition duration-300 text-white'>{icon}{text}</button>
        </Link>
    )
}

export default SecondaryButton