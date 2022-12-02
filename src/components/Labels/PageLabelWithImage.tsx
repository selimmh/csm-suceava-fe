import React from 'react'

type Props = {
    label: string
    description: string
    image: string
}

const PageLabelWithImage = ({ label, description, image }: Props) => {
    return (
        <div className="relative shadow-lg rounded-md overflow-hidden group">
            {/* image */}
            <img
                className="w-full h-96 object-cover group-hover:scale-105 transition-all duration-500"
                src={image}
                alt="Header"
            />
            {/* overlay */}
            <div className="absolute inset-0 bg-gray-600 opacity-70" />
            {/* content */}
            <div className="absolute top-1/2 -translate-y-1/2 ml-8">
                <div className="text-white text-4xl font-bold">{label}</div>
                <div className="text-white mt-4">{description}</div>
            </div>
        </div>
    )
}

export default PageLabelWithImage
