import React from 'react'
import SidebarOptions from './SidebarOptions'
import SidebarItem from './SidebarItem'
import { useLocation } from 'react-router'

const Sidebar = () => {
    const location = useLocation()
    const isCurrentRouteActive = (path: string) => {
        return location.pathname.includes(path) && path !== '/'
    }

    return (
        <nav className="bg-gray-600 flex flex-col items-center h-screen p-16 overflow-auto fixed left-0 top-0 bottom-0 w-72">
            <div className="w-32 h-32 rounded-full bg-white mb-16 flex items-center justify-center text-3xl font-bold text-gray-500">
                CSM
            </div>

            <ul className="flex flex-col items-start gap-4">
                {SidebarOptions.map((sidebarOption, index) => (
                    <SidebarItem
                        key={index}
                        path={sidebarOption.path}
                        name={sidebarOption.name}
                        isActive={isCurrentRouteActive(sidebarOption.path)}
                        subroutes={sidebarOption?.subroutes}
                    />
                ))}
            </ul>
        </nav>
    )
}

export default Sidebar
