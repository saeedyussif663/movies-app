import { Link, NavLink } from "react-router-dom";

import { useGlobalContext } from "../Context";

const SideBar = () => {

    const {state, logout} = useGlobalContext()

    return (
        <section className="sidebar-container" >
            <div className="links-container">
                <NavLink to='/'>
                    Genres
                </NavLink>
                <NavLink to='/trending'>
                    Trending
                </NavLink>
                <NavLink to='/upcoming'>
                    Upcoming
                </NavLink>
                <NavLink to='/favourite'>
                    Favourite
                </NavLink>
            </div>
            <div className="login">
                {state.user ? 
                <>
                    <div className="user"><i className="fa-solid fa-user"></i>{state.user}</div>
                    <button className="log-out" onClick={logout}>Log out</button>
                </>        :
                <Link to="login">Log in</Link>}
            </div>
        </section>
    )
}

export default SideBar