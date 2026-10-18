import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import '../style.css'


const Srchbar = () => {
    const [showinput, setshowinput] = useState(false)
    const [bgcolor, setbgcolor] = useState("white")
    const handleClick = (e) => {
        setbgcolor("#1a1a1a");
        if (e.target.className === "container") {
            setshowinput(false);
            setbgcolor("#fff");
        }
    };

    return (
        <section
            className="container"
            style={{ backgroundColor: bgcolor }}
            onClick={handleClick}>
            {showinput ? (
                <input type="text" placeholder="Search..." />
            ) : (
                <FaSearch onClick={() => setshowinput(true)} />
            )}

        </section>
    )
}

export default Srchbar