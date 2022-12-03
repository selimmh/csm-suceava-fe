import React from 'react'
import Footer from '../components/Footer/Footer'

type Props = {
    children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
    return (
        <div className="ml-72 p-8 pb-48 box-border relative min-h-screen">
            <div>{children}</div>
            <div className="absolute left-0 right-0 bottom-0 w-full">
                <Footer />
            </div>
        </div>
    )
}

export default AppLayout
