import React from 'react'
import PageLabel from '../../components/Labels/PageLabel'
import PartnerDetails from '../../components/PartnerDetails/PartnerDetails'
import { partners } from '../../db'

const Partners = () => {
    return (
        <>
            <PageLabel
                label="Parteneri"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste."
            />
            <div className="flex flex-wrap gap-4">
                {partners.map((partner) => (
                    <PartnerDetails
                        name={partner.name}
                        logo={partner.logo}
                        website={partner.website}
                    />
                ))}
            </div>
        </>
    )
}

export default Partners
