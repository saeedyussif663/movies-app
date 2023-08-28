import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context";


const MobileNav = () => {

    const { state, toggleModal } = useGlobalContext()
    
    const mobileNavPosition = state.isModalShowing ? "0px" : "-1000px"
    return (
            <section className="mobile-nav"  style={{left: mobileNavPosition}}>
            <div className="mobile-links-container">
                <NavLink to='/' activeClassName="active" onClick={toggleModal}>
                    Genres
                </NavLink>
                <NavLink to='/movies'  onClick={toggleModal}>
                    Movies
                </NavLink>
                <NavLink to='/series'  onClick={toggleModal}>
                    Series
                </NavLink>
                <NavLink to='/favourite'  onClick={toggleModal} >
                    Favourite
                </NavLink>
            </div>
            <div className="mobile-login">
                <NavLink to="login"  onClick={toggleModal}>Log in</NavLink > 
            </div>
        </section>
        )

};

export default MobileNav;