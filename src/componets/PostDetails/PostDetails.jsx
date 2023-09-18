import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;

    const navigate = useNavigate();

    const handleGoBack = () =>{
        // go one step backward
        navigate(-1);
    }
    return (
        <div>
            <h4>Post Details about: {id}</h4>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;