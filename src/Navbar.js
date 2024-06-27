import React from "react";
import { Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar ">
            <h1><Link to = "/" style={{padding: '0%', color: '#37b6c7'}}>KinogoMD</Link></h1>
            <div className="links ">
                <a href="/">All</a>
                <a href="/trending">Trending</a>
                <a href="/favourites">Favourites</a>
            </div>
        </nav>
     );
}
 
export default Navbar;