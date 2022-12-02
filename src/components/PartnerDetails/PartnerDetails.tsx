import React from 'react'

type Props = {
    name: string
    logo: string
    website: string
}

const PartnerDetails = ({ name, logo, website }: Props) => {
    return (
        <a href={website} target="_blank" rel="noreferrer" className="group">
            <img
                className="w-60 h-60 object-cover group-hover:scale-105 transition-all duration-500"
                src={logo}
                alt={name}
            />
        </a>
    )
}

export default PartnerDetails
