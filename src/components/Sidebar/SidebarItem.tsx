import { useNavigate } from 'react-router'

type SidebarSubItemProps = {
    path: string
    name: string
}
type SidebarItemProps = {
    path: string
    name: string
    isActive: boolean
    subroutes?: SidebarSubItemProps[]
}

const SidebarSubItem = ({ path, name }: SidebarSubItemProps) => {
    const navigate = useNavigate()
    return (
        <div className="relative">
            <button
                onClick={() => navigate(path)}
                className="text-gray-600 hover:text-red-600 text-sm font-bold transition-all tracking-tight"
            >
                {name}
            </button>
        </div>
    )
}

const SidebarItem = ({ path, isActive, subroutes, name }: SidebarItemProps) => {
    const navigate = useNavigate()
    return (
        <div className="relative group">
            <button
                onClick={() => !subroutes && navigate(path)}
                className={` text-white hover:text-red-600 text-md font-bold transition-all duration-300 tracking-tight  ${
                    isActive ? 'text-red-600' : ''
                }`}
            >
                {name}
            </button>

            {subroutes && (
                <div className="hidden group-hover:block absolute left-0 z-10 w-32 bg-gray-100 text-gray-600 transition-all duration-300 shadow-xl py-2 px-4 animate-fade-in">
                    {subroutes.map((subroute: any) => (
                        <SidebarSubItem
                            key={subroute.name}
                            path={subroute.path}
                            name={subroute.name}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default SidebarItem
