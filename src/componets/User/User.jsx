import { Link } from 'react-router-dom';
import './User.css'
const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
        <div className="user">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <br />
            <Link to={`/user/${id}`}>Click Me</Link>

        </div>
    );
};

export default User;