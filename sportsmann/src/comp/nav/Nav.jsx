import React from 'react';
//import navbar from 'react-bootstrap/Navbar';
import './nav.css';

function Nav(){
    return(
        <div className='navb'>
            <navbar className="p-30 navbar navbar-expand-lg bg-warning">
                <ol >
                <li><a href='/'>Home Page</a></li>
                <li><a href='/news'>News</a></li>
                <li><a href='/events'>Events</a></li>   
                <li><a href='/teams'>Teams</a></li>
                <li><a href='/gallery'>Gallery</a></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/about'>About</a></li>

            </ol> 
            </navbar>
        </div>
    );
}
export default Nav;