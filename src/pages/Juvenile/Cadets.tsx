import React from 'react'
import PlayerCard from '../../components/PlayerDetails/PlayerDetails'
import PageLabel from '../../components/Labels/PageLabel'
import { players } from '../../db'

const Cadets = () => {
    return (
        <>
            <PageLabel
                label="Cadeti"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste."
            />
            <div className="flex flex-wrap gap-4">
                {players.map((player) => (
                    <div className="w-[calc(50%-8px)]">
                        <PlayerCard
                            key={player.id}
                            image={player.image}
                            fullName={player.fullName}
                            nationality={player.nationality}
                            position={player.position}
                            birthDate={player.birthDate}
                            height={player.height}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cadets
