import React from 'react'
import PageLabel from '../../components/Labels/PageLabel'
import MatchDetails from '../../components/MatchDetails/MatchDetails'
import { matches } from '../../db'

const Matches = () => {
    return (
        <>
            <PageLabel
                label="Calendar miecuri"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste."
            />
            <div className="flex flex-col gap-4">
                {matches.map((match) => (
                    <MatchDetails
                        ourTeam={match.ourTeam}
                        ourTeamScore={match.ourTeamScore}
                        ourTeamLogo={match.ourTeamLogo}
                        opponentTeam={match.opponentTeam}
                        opponentTeamScore={match.opponentTeamScore}
                        opponentTeamLogo={match.opponentTeamLogo}
                        date={match.date}
                        time={match.time}
                        location={match.location}
                        isInFuture={match.isInFuture}
                    />
                ))}
            </div>
        </>
    )
}

export default Matches
