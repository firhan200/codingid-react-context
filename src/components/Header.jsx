import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function Header() {
    const { isAuth, logout } = useContext(AuthContext)

    const UnauthenticatedHeader = () => {
        return (
            <ul style={{display:"flex", listStyleType:"none", gap:20}}>
                <li>Login</li>
                <li>Register</li>
            </ul>
        )
    }

    const AuthenticatedHeader = () => {
        return (
            <ul style={{display:"flex", listStyleType:"none", gap:20}}>
                <li>Welcome, <b>John Doe</b></li>
                <li><a>Profile</a></li>
                <li><a href="#!" onClick={() => logout()}>Logout</a></li>
            </ul>
        )
    }

    return (
        <header style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <a>Judul Web</a>
            {
                isAuth ? <AuthenticatedHeader /> : <UnauthenticatedHeader />
            }
        </header>
    )
}