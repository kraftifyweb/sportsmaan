import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Nav(){
    return(
        <div>
            <Navbar expand="lg" className="bg-dark text-white"> 
                <ol>
                <li>Home</li>
                <li>News</li>
                <li>Events</li>
                <li>Contact</li>
            </ol>
            </Navbar>
        </div>
    );
}
export default Nav;