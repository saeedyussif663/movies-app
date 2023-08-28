
import { useGlobalContext } from "../Context"

const Menu = () => {
    const { toggleModal, state } = useGlobalContext();

    return (
        <div
            className={state.isModalShowing ? "menu-container change" : "menu-container"}
            onClick={toggleModal}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
        </div>
    )
}

export default Menu 