
import './navBar.css'; 

import { Link } from 'react-router-dom';

function NavBar () {

    return <nav className='navBar'>

        <Link to='/'>HOME</Link><br /><br />
        <Link to='/about'>ABOUT</Link><br /><br />
        <Link to='/products'>PRODUCTS</Link>

    </nav>

}

export default NavBar; 