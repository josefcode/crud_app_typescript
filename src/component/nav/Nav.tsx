import { Link } from 'react-router-dom';
import './styleNav.css'

const Nav = () => {
    return(
        <nav className='nav'>
            <p className='nav-logo'>DHProducts</p>
            <ul className='nav-list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/about">Quem somos</Link></li>
                <li><Link to="/logout">Sair</Link></li>
            </ul>
        </nav>
    )    
}

export default Nav;