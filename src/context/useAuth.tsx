import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'

import { useNavigate, useLocation } from 'react-router-dom'

interface User {
    id: string
    name: string
    email: string
}

interface AuthContextType {
    user?: User
    loading: boolean
    error?: any
    login: (email: string, password: string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({
    children,
}: {
    children: ReactNode
}): JSX.Element => {
    const [user, setUser] = useState<User>()
    const [error, setError] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const [loadingInitial, setLoadingInitial] = useState<boolean>(true)

    const navigate = useNavigate()
    const location = useLocation()

    // If we change page, reset the error state.
    useEffect(() => {
        if (error) setError(null)
    }, [location.pathname])

    useEffect(() => {
        // get user ********************************
        // usersApi
        //     .getCurrentUser()
        //     .then((user) => setUser(user))
        //     .catch((_error) => {})
        //     .finally(() => setLoadingInitial(false))
    }, [])

    const login = (email: string, password: string) => {
        // login ********************************
        // setLoading(true)
        // sessionsApi
        //     .login({ email, password })
        //     .then((user) => {
        //         setUser(user)
        //         history.push('/')
        //     })
        //     .catch((error) => setError(error))
        //     .finally(() => setLoading(false))
    }

    const logout = () => {
        // logout ********************************
        // sessionsApi.logout().then(() => setUser(undefined))
    }

    const memoedValue = useMemo(
        () => ({
            user,
            loading,
            error,
            login,
            logout,
        }),
        [user, loading, error]
    )

    return (
        <AuthContext.Provider value={memoedValue}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}
