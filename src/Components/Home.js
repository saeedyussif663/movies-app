
import { useGlobalContext } from "../Context"
import Menu from "./Menu"

const Home = () => {
    const { state } = useGlobalContext();

    return (
        <main>
            <h1 style={{display: "block", color: "white"}} hidden>movies here</h1>
            <Menu/>
         </main>
    )
}

export default Home