import AppRoutes from './AppRoutes'
import { AuthProvider } from '../context/useAuth'

function AppCore() {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    )
}

export default AppCore
