import { Link, NavLink } from "react-router-dom"

const SideBar = () => {

    return (
        <section className="sidebar-container" >
            <div className="links-container">
                <NavLink to='/'activeClassName="active">
                    Genres
                </NavLink>
                <NavLink to='/movies'>
                    Movies
                </NavLink>
                <NavLink to='/series'>
                    Series
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