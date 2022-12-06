import React, { useState } from 'react'
import PageLabelWithImage from '../../components/Labels/PageLabelWithImage'
import headerImg from '../../assets/team.jpg'
import PageLabel from '../../components/Labels/PageLabel'
import MatchDetails from '../../components/MatchDetails/MatchDetails'

const Home = () => {
    return (
        <div>
            <div className="text-5xl font-bold uppercase text-gray-600 text-center px-16 mb-16">
                CSM. Denumirea oficială a performanței
            </div>
            <div className="flex flex-col gap-16">
                <PageLabelWithImage
                    image={headerImg}
                    label="Vezi clasamentul"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste."
                />
                <div className="text-xl text-gray-600 font-bold">
                    Miecurile recente
                </div>
            </div>
        </div>
    )
}

export default Home
