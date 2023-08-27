import { Link, NavLink } from "react-router-dom"
import "./Sidebar.css"
import { useGlobalContext } from "../Context"

const SideBar = () => {
    const { state, toggleModal } = useGlobalContext();

    const sectionDisplay = state.isModalShowing ? "flex" : "none"

    return (
        <section className="sidebar-container" style={{display: sectionDisplay}} >
            <div className="links-container">
                <NavLink to='/' onClick={toggleModal} activeClassName="active">
                    Genres
                </NavLink>
                <NavLink to='/movies' onClick={toggleModal}>
                    Movies
                </NavLink>
                <NavLink to='/series' onClick={toggleModal}>
                    Series
                </NavLink>
                <NavLink to='/favourite' onClick={toggleModal}>
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