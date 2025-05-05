import React from 'react'
import { Link } from 'react-router-dom'

interface Button {
    text: string,
    link: string,
    icon?: any,
    styles?: string
}

const PrimaryButton: React.FC<Button> = ({ icon, styles, text, link }) => {
    return (
        <Link to={link}>
            <button className={`${styles} p-2 pr-4 rounded-full text-sm font-bold flex items-center gap-1 bg-white hover:bg-white/90  text-green-600 cursor-pointer transition duration-300`}>{icon}{text}</button>
        </Link>
    )
}

export default PrimaryButton