import React from 'react'

type Props = {
    ourTeam: string
    ourTeamScore?: number
    ourTeamLogo: string
    opponentTeam: string
    opponentTeamScore?: number
    opponentTeamLogo: string
    date: string
    time: string
    location: string
    isInFuture?: boolean
}

const MatchDetails = ({
    ourTeam,
    ourTeamScore,
    ourTeamLogo,
    opponentTeam,
    opponentTeamScore,
    opponentTeamLogo,
    date,
    time,
    location,
    isInFuture,
}: Props) => {
    return (
        <div className="rounded-md shadow-lg flex w-full border overflow-hidden h-64 hover:shadow-xl transition-all duration-300 justify-between items-center p-8 max-w-7xl">
            {/* team */}
            <div className="flex flex-col items-center">
                <div className="mb-4 text-gray-600">{ourTeam}</div>
                <img
                    className="w-32 h-32 object-cover rounded-full"
                    src={ourTeamLogo}
                    alt=""
                />
            </div>

            {/* details */}
            <div className="flex flex-col items-center">
                {!isInFuture && (
                    <span className="text-6xl font-bold mb-4">
                        {ourTeamScore} - {opponentTeamScore}
                    </span>
                )}

                <span
                    className={`flex flex-col items-center text-gray-600 gap-2 ${
                        isInFuture && 'text-xl'
                    }`}
                >
                    <div>{date}</div>
                    <div>{time}</div>
                    <div>{location}</div>
                </span>
            </div>
            {/* team */}
            <div className="flex flex-col items-center">
                <div className="mb-4 text-gray-600">{opponentTeam}</div>
                <img
                    className="w-32 h-32 object-cover rounded-full"
                    src={opponentTeamLogo}
                    alt=""
                />
            </div>
        </div>
    )
}

export default MatchDetails
