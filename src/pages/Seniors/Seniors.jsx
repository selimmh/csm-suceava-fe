import React from "react";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import PageLabel from "../../components/Labels/PageLabel";

const seniors = Array(10)
  .fill(null)
  .map((_, index) => ({
    id: index,
    image: `https://picsum.photos/seed/${index + Math.random()}/200/400`,
    fullName: "Abuhaiencei Florinelicu",
    nationality: "Roman",
    position: "Atac",
    birthDate: "19",
    height: "1.80",
  }));

const Seniors = () => {
  return (
    <>
      <PageLabel
        label="Seniori"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste."
      />
      <div className="flex flex-wrap gap-4">
        {seniors.map((player) => (
          <div className="w-[calc(50%-8px)]">
            <PlayerCard
              key={player.id}
              image={player.image}
              fullName={player.fullName}
              nationality={player.nationality}
              position={player.position}
              birthDate={player.birthDate}
              height={player.height}
              description={player.description}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Seniors;
