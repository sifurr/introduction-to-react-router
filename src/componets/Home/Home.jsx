import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>Home, sweet home!</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;