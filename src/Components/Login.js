import { useState } from "react"
import { useGlobalContext } from "../Context";

import {useNavigate} from "react-router-dom"


const Login = () => {
    const { setDetails } = useGlobalContext();

    const navigate = useNavigate()

    const [ userName, setUserName ] = useState("");
    const [ userPassword, setUserPassword ] = useState("");

    const hadleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

     const hadleUserPasswordChange = (e) => {
        setUserPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userName.trim() === "" && userPassword.trim() === "") {
            return
        }
        setDetails(userName);
        setUserName("");
        setUserPassword("");
        navigate("/")
    }

    return (
        <section className="login-section">
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text" placeholder="Enter a Dummy Username"
                    value={userName}
                    onChange={hadleUserNameChange}
                />
                <label>Password</label>
                <input
                    type="password" placeholder="Enter a Dummy Password"
                    value={userPassword}
                    onChange={hadleUserPasswordChange}
                />
                <button>Login</button>
            </form>
        </section>
    )
}

export default Login