import React from 'react';
import './Styles/Header.scss';
import { Close, MenuBookOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
    const [active, setActive] = React.useState(false);

    const showMenu = () => {
        setActive(!active);
    }
    return (
        <div className='header'>
            <div className='header__logo'>
                <h1>CHELLRACH</h1>
            </div>
           <nav className='navbar'>
            <ul>
                <div className='closed'>
                    <Close className='close' onClick={showMenu}/>

                </div>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/">About</Link>
                </li>
                <li>
                    <Link to ="/">Section</Link>
                </li>
                <li>
                    <Link to ="/">Blogs</Link>
                </li>
                <li>
                    <Link to ="/contact" className="nav-contact">Contact</Link>
                </li>
             
            </ul>
           </nav>
        <div className='changer'>
            <MenuBookOutlined className='menu' onClick={showMenu}/>

        </div>
            
            
        </div>
    )
}

export default Header