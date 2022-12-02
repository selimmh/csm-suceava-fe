import React from 'react'

type Props = {
    image: string
    fullName: string
    nationality: string
    position: string
    birthDate: string
    height: string
    onClick?: () => void
}

const PlayerDetails = ({
    image,
    fullName,
    nationality,
    position,
    birthDate,
    height,
    onClick,
}: Props) => {
    return (
        <div
            onClick={onClick}
            className="flex border p-4 shadow-lg rounded-md w-full h-60 hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
            <img
                className="w-32 h-48 object-cover mr-8 border"
                src={image}
                alt={fullName}
            />
            <div className="flex flex-col text-lg gap-1">
                <div className="text-2xl">{fullName}</div>
                <div>
                    <span className="font-bold text-sm">Nationalitate: </span>
                    {nationality}
                </div>
                <div>
                    <span className="font-bold text-sm">Post: </span>
                    {position}
                </div>
                <div>
                    <span className="font-bold text-sm">Varsta: </span>
                    {birthDate}
                </div>
                <div>
                    <span className="font-bold text-sm">Inaltime: </span>
                    {height}
                </div>
            </div>
        </div>
    )
}

export default PlayerDetails
