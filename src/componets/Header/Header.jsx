import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <nav>
            <h1>My Website</h1>

            <NavLink to='/'>Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
        </nav>
    );
};

export default Header;