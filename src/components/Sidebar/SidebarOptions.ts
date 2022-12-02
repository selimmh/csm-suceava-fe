import ROUTES from '../../routes/ROUTES'

const SidebarOptions = [
    {
        name: 'ACASA',
        path: ROUTES.home.path,
    },
    {
        name: 'DETALII CLUB',
        path: ROUTES.details.path,
        subroutes: [
            {
                name: 'VIZIUNE',
                path: ROUTES.vision.path,
            },
            {
                name: 'ISTORIE',
                path: ROUTES.history.path,
            },
            {
                name: 'TROFEE',
                path: ROUTES.trophies.path,
            },
        ],
    },

    {
        name: 'PERSONAL',
        path: ROUTES.personnel.path,
        subroutes: [
            {
                name: 'ANTRENORI',
                path: ROUTES.coaches.path,
            },
            {
                name: 'JUCATORI',
                path: ROUTES.players.path,
            },
        ],
    },

    // {
    //     name: 'SENIORI',
    //     path: ROUTES.seniors.path,
    // },

    {
        name: 'JUVENILI',
        path: ROUTES.juvenile.path,
        subroutes: [
            {
                name: 'JUNIORI',
                path: ROUTES.juniors.path,
            },
            {
                name: 'MINI VOLLEY',
                path: ROUTES.minivolley.path,
            },
            {
                name: 'CADETI',
                path: ROUTES.cadets.path,
            },
            {
                name: 'SPERANTE',
                path: ROUTES.youth.path,
            },
        ],
    },
    {
        name: 'CALENDAR MECIURI',
        path: ROUTES.matches.path,
    },
    {
        name: 'NOUTĂȚI',
        path: ROUTES.news.path,
    },
    {
        name: 'PARTENERI',
        path: ROUTES.partners.path,
    },
    {
        name: 'GALERIE',
        path: ROUTES.gallery.path,
    },
    {
        name: 'ADMINISTRARE',
        path: ROUTES.admin.path,
        subroutes: [
            {
                name: 'LOGIN',
                path: ROUTES.login.path,
            },
        ],
    },
]

export default SidebarOptions
