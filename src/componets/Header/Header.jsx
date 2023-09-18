import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <h1>My Website</h1>
            <Link to='/'>Home</Link>
            <Link to="/users">Users</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    );
};

export default Header;