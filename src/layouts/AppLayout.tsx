import React from 'react'

type Props = {
    children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
    return <div className="ml-72 p-8 box-border">{children}</div>
}

export default AppLayout
