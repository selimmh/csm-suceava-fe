import React from 'react'
import PlayerCard from '../../components/PlayerCard/PlayerCard'
import PageLabel from '../../components/Labels/PageLabel'

const miniVolley = Array(10)
    .fill(null)
    .map((_, index) => ({
        id: index,
        image: `https://picsum.photos/seed/${index + Math.random()}/200/300`,
        fullName: 'Abuhaiencei Florinelicu',
        nationality: 'Roman',
        position: 'Atac',
        birthDate: '19',
        height: '1.80',
    }))

const MiniVolley = () => {
    return (
        <>
            <PageLabel
                label="Mini volley"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste."
            />
            <div className="flex flex-wrap gap-4">
                {miniVolley.map((player) => (
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

export default MiniVolley
