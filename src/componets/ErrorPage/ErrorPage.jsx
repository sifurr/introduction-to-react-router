import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Oops!</h2>
            {
                <i>{error.statusText || error.message}</i>                
            }
            {
                error.status === 404 && <div>
                    <h2>Page not found because the status is {error.status}</h2>
                    <Link to={'/'}><button>Go Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;