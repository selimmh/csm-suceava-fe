import React from 'react'
import PageLabel from '../../components/Labels/PageLabel'

const images = Array(20)
    .fill(null)
    .map((_, index) => ({
        id: index.toString(),
        url: `https://picsum.photos/seed/${index + Math.random()}/300/200`,
        description: 'Lorem',
    }))

const Gallery = () => {
    return (
        <>
            <PageLabel
                label="Galerie"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste."
            />
            <div className="flex flex-wrap gap-4">
                {images.map((image) => (
                    <img
                        className="rounded-md shadow-lg w-[calc(100%/2-16px)] aspect-video object-cover hover:scale-105 transition-all duration-300 cursor-pointer"
                        src={image.url}
                        id={image.id}
                        key={image.id}
                        alt={image.description}
                    />
                ))}
            </div>
        </>
    )
}

export default Gallery
