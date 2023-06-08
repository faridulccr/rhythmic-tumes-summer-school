import useTitle from "../../hooks/useTitle";
import Carosel from "./Carosel";

const Home = () => {
    useTitle("Home");
    return (
        <>
            <Carosel />
        </>
    );
};

export default Home;
