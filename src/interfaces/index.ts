export interface MatchInterface {
    id: string
    ourTeam: string
    ourTeamScore: number
    ourTeamLogo: string
    opponentTeam: string
    opponentTeamScore: number
    opponentTeamLogo: string
    date: string
    time: string
    location: string
    isInFuture: boolean
}
export interface NewsInterface {
    id: string
    long_title: string
    content: string
    image_url: string
    created_at: string
    created_by: string
}
export interface PlayerInterface {
    id: string
    image: string
    fullName: string
    nationality: string
    position: string
    birthDate: string
    height: string
}
export interface PartnerInterface {
    id: string
    name: string
    logo: string
    website: string
}
