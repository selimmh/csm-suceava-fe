import { useState } from 'react'
import { useNavigate } from 'react-router'
import headerImg from '../../assets/team.jpg'
import BlogDetails from '../../components/BlogDetails/BlogDetails'
import PageLabelWithImage from '../../components/Labels/PageLabelWithImage'
import MatchDetails from '../../components/MatchDetails/MatchDetails'
import PartnerDetails from '../../components/PartnerDetails/PartnerDetails'
import PlayerDetails from '../../components/PlayerDetails/PlayerDetails'
import { matches, news, partners, players } from '../../db'
import {
    MatchInterface,
    NewsInterface,
    PartnerInterface,
    PlayerInterface,
} from '../../interfaces'
import ROUTES from '../../constants/ROUTES'

const Home = () => {
    const [recentMatches, setRecentMatches] = useState<MatchInterface[]>(
        matches.slice(0, 2)
    )

    const [recentNews, setRecentNews] = useState<NewsInterface[]>(
        news.slice(0, 2)
    )

    const [seniorPlayers, setSeniorPlayers] = useState<PlayerInterface[]>(
        players.slice(0, 6)
    )

    const [mainPartners, setMainPartners] = useState<PartnerInterface[]>(
        partners.slice(0, 8)
    )

    const navigate = useNavigate()

    return (
        <div>
            <div className="text-5xl font-bold uppercase text-gray-600 text-center px-16 mb-16">
                CSM. Denumirea oficială a performanței
            </div>
            <PageLabelWithImage
                image={headerImg}
                label="Vezi clasamentul"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste."
            />
            {/* recent matches */}
            <div className="text-xl text-gray-600 font-bold mt-12">
                Miecurile recente
            </div>
            <div
                onClick={() => navigate(ROUTES.matches.path)}
                className="text-sm text-blue-500 mb-4 cursor-pointer"
            >
                Vezi toate
            </div>

            <div className="flex flex-col gap-4">
                {recentMatches.map((match) => (
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
            {/* recent news */}
            <div className="text-xl text-gray-600 font-bold mt-12">
                Ultimele noutatii
            </div>
            <div
                onClick={() => navigate(ROUTES.news.path)}
                className="text-sm text-blue-500 mb-4 cursor-pointer"
            >
                Vezi toate
            </div>
            <div className="flex flex-col gap-4">
                {recentNews.map((blog) => (
                    <div key={blog.id}>
                        <BlogDetails
                            onClick={() => navigate(`/news/${blog.id}`)}
                            image_url={blog.image_url}
                            long_title={blog.long_title}
                            content={blog.content}
                            created_by={blog.created_by}
                            created_at={blog.created_at}
                        />
                    </div>
                ))}
            </div>
            {/* echipa seniori */}
            <div className="text-xl text-gray-600 font-bold mt-12">
                Intalneste echipa
            </div>
            <div
                onClick={() => navigate(ROUTES.players.path)}
                className="text-sm text-blue-500 mb-4 cursor-pointer"
            >
                Vezi toate
            </div>
            <div className="flex flex-wrap gap-4">
                {seniorPlayers.map((player) => (
                    <div className="w-[calc(50%-8px)]">
                        <PlayerDetails
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

            <div className="text-xl text-gray-600 font-bold mt-12">
                Parteneri principali
            </div>
            <div
                onClick={() => navigate(ROUTES.partners.path)}
                className="text-sm text-blue-500 mb-4 cursor-pointer"
            >
                Vezi toate
            </div>
            <div className="flex flex-wrap gap-4">
                {mainPartners.map((partner) => (
                    <PartnerDetails
                        name={partner.name}
                        logo={partner.logo}
                        website={partner.website}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
