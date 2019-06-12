import React from 'react';      
import Blog from "./Blog";

function Nav(){
    return ( // obligatoire pour retourner l'information
        <nav class="navbar navbar-light bg-light">        
            <a class="navbar-brand" href="#">
                <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" /> Navbar
            </a>
            <Blog />
        </nav>
    );


}

export default Nav;