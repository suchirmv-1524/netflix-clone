import React from 'react'
import './Nav.css'
import netflix from './netflix.jpg'
import {useEffect, useState} from 'react'

function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img
        className='nav__logo'
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            />
        <img
        className='nav__avatar'
            src={netflix}
            alt="Netflix Logo"
            />
    </div>
  )
}

export default Nav