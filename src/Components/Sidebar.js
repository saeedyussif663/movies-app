import { Link, NavLink } from "react-router-dom"

const SideBar = () => {

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
                <Link to="login">Log in</Link>
            </div>
        </section>
    )
}

export default SideBar