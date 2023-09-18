/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const {userId, id, title} = post;
    const navigate = useNavigate();

    const handleShowDetails = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h3>{title}</h3>
            <h5>Post by: {userId}</h5>
            <br />
            <Link to={`/post/${id}`}>Read More</Link>
            <br />
            <button onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

export default Post;