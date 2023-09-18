import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();

    const usersContainer = {
        display: 'grid',
        'grid-template-columns': 'repeat(3, 1fr)',
        gap: '10px'
    }
    return (
        <div>
            <h3>Our Users: {users.length} </h3>
            <div style={usersContainer}>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;