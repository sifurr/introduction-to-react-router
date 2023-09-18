import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, email} = user;
    return (
        <div>
            <h3>Details about user</h3>
            <h3>{name}</h3>
            <p>Website: {email}</p>
        </div>
    );
};

export default UserDetails;