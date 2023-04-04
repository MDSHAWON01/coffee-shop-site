import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { links } from '../../Data';
import { FaStream } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';



const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const scrollTop = () => {
        animateScroll.scrollToTop();
    }

    const changeHeader = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeHeader)
    }, [])


    return (
        <header className={`${scroll ? 'scroll-header' : ''} header `}>
            <nav className='nav container'>

                <Link to="/" onClick={scrollTop} className='nav-logo'>
                    <img src={logo} alt="" className='nav-logo-img' />
                </Link>

                <div className={`${showMenu ? 'show-menu' : ''} nav-menu `}>
                    <ul className="nav-list">
                        {links.map(({ name, path }, index) => {
                            return (
                                <li className="nav-item" key={index}>
                                    <Link className='nav-link' spy={true} hashSpy={true} smooth={true} offset={-60} duration={500} onClick={() => setShowMenu(!showMenu)} to={path}>{name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="nav-toggle" onClick={() => setShowMenu(!showMenu)} > <FaStream /> </div>

            </nav>
        </header>
    );
};

export default Header;