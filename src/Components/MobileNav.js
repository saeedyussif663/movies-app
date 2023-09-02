import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context";


const MobileNav = () => {

    const { state, toggleModal, logout } = useGlobalContext()
    
    const mobileNavPosition = state.isModalShowing ? "0px" : "-1000px"
    return (
            <section className="mobile-nav"  style={{left: mobileNavPosition}}>
            <div className="mobile-links-container">
                <NavLink to='/' activeClassName="active" onClick={toggleModal}>
                    Genres
                </NavLink>
                <NavLink to='/trending'  onClick={toggleModal}>
                    Trending
                </NavLink>
                <NavLink to='/upcoming'  onClick={toggleModal}>
                    Upcoming
                </NavLink>
                <NavLink to='/favourite'  onClick={toggleModal} >
                    Favourite
                </NavLink>
            </div>
            <div className="mobile-login">
                {state.user ? 
                <>
                    <div className="user"><i className="fa-solid fa-user"></i>{state.user}</div>
                    <button className="log-out" onClick={logout}>Log out</button>
                </>        :
                <NavLink to="login">Log in</NavLink>}
            </div>
        </section>
        )

};

export default MobileNav;