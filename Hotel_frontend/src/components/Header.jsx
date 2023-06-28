import React  from "react";
import { Outlet,Link } from "react-router-dom";
function Header(){
    return (
        <div>
            <nav>
            <ul>
                <li>
                    <Link to="/">Casa</Link>

                </li>
                <li>
                    <Link to="comida">comida</Link>

                </li>
                <li>
                   <Link to="about"> Sobre nosostros</Link> 

                </li>
                <li>
                   <Link to="desastre"> Desastre</Link> 
                   
                </li>
            </ul>
            </nav>
        </div>
    )
}
export default Header;