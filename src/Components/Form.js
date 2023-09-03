import { useNavigate } from "react-router-dom";

import { useRef } from "react";
import { useGlobalContext } from "../Context";


const Form = () => {
    const { searchHandler } = useGlobalContext();

    const navigate = useNavigate()

  const inputRef = useRef()

 const handleChange = e => {
        inputRef.current.value = e.target.value;
    }

  const SearchMovie = () => {
     if (inputRef.current.value.trim() === "") return 
     searchHandler(inputRef.current.value);
     navigate(`/search/${inputRef.current.value}`)
     inputRef.current.value = ''
    }

    return (
        <section className="search-container">
                <form>
                    <input type="text" placeholder="Search for Movies"
                        ref={inputRef} onChange={handleChange}
                />
                <i className="fa-solid fa-magnifying-glass"
                    onClick={SearchMovie}
                ></i>
                </form>
        </section>
    )
}

export default Form