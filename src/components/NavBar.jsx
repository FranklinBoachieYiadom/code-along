import React from 'react';
import NavItem from "./NavItem";

function NavBar(){
    return(
        <nav>
        <nav className= "flex justify-between py-5 px-20 shadow-md">
            <h3 className="font-bold"> GobeJoint</h3>
            <ul className="flex gap-5">
                <NavItem menu="Home"/>
                <NavItem menu="Products"/>
                <NavItem menu="Services"/>
                <NavItem menu="About"/>
                <NavItem menu="Contact"/>
            </ul>
        </nav>
        </nav>
    );
}
export default NavBar;