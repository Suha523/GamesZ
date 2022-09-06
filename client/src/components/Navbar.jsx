import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css'

export default function Navbar() {
    return <div className='navbar'>
        <div className='logo'>ASAZ Games</div>
        <div className='nav-links'>
            <Link to='/games'><div className='nav-link'>games</div></Link>
            <Link to='/login'><div className='nav-link'>login</div></Link>
        </div>
    </div>;
}
