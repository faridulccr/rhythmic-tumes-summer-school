import useTitle from "../../hooks/useTitle";
import Carousel from "./Carousel";
import PopularInstructors from "./PopularInstructors";
import Testimonial from "./Testimonial";
import TopClasses from "./TopClasses";

const Home = () => {
    useTitle("Home");
    return (
        <>
            <Carousel />
            <TopClasses />
            <PopularInstructors />
            <Testimonial />
        </>
    );
};

export default Home;
