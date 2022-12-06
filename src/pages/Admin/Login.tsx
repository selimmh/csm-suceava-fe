import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import useAuth from '../../context/useAuth'

const Login = () => {
    const [user, setUser] = useState({ email: '', password: '' })
    const { login, loading } = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        if (!loading) {
            login(user.email, user.password)
            navigate('/')
        }
    }

    return (
        <div className="flex flex-col items-center mt-32 gap-4">
            <h1
                onClick={() => navigate('/')}
                className="text-4xl font-bold mb-8"
            >
                Admin page
            </h1>
            {/* email */}
            <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-1">Email</label>
                <input
                    className="px-4 py-2 text-lg border border-indigo-300 rounded-sm outline-none text-gray-500"
                    type="text"
                    id="name"
                    name="name"
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                />
            </div>
            {/* password */}
            <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-1">Password</label>
                <input
                    className="px-4 py-2 text-lg border border-indigo-300 rounded-sm outline-none text-gray-500"
                    type="text"
                    id="name"
                    name="name"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                />
            </div>

            {/* submit */}
            <button
                onClick={() => handleLogin()}
                className="px-4 py-2 bg-gray-400 text-white rounded-sm"
            >
                Login
            </button>

            {/* loading */}
            {loading && <p>Loading...</p>}
        </div>
    )
}

export default Login
