import React from 'react'
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'

type Props = {
    children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
    const { pathname } = useLocation()
    return (
        <>
            {pathname === '/login' ? (
                <div>{children}</div>
            ) : (
                <div className="ml-72 p-8 pb-48 box-border relative min-h-screen">
                    <Sidebar />

                    <div>{children}</div>
                    <Footer />
                </div>
            )}
        </>
    )
}

export default AppLayout
