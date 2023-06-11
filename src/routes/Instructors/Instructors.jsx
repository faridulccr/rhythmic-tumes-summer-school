import image from "../../assets/music/slide1.jpg";
import Heading from "../../components/Heading.jsx/Heading";
import useTitle from "../../hooks/useTitle";

const Instructors = () => {
    useTitle("Instructors");

    return (
        <div className="pt-24 pb-5">
            <Heading>All Instructors</Heading>
            <div className="grid sm:grid-cols-3 gap-4 px-2 xl:px-0">
                {/* {Array.isArray(sortedByStudent) &&
        sortedByStudent.map(
            ({ id, image, name, subject, students, rating }) => ( */}
                <div className="card w-full bg-[#1289A7] shadow-xl">
                    <figure>
                        <img
                            className="w-full h-[250px]"
                            src={image}
                            alt="classes"
                        />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">Name: </h2>
                        <p>Email: faridulccr@gmail.com</p>
                        <p>Class Taken: 5</p>
                        <p>
                            <b>Classes:</b>
                        </p>
                        <p className=" text-[#0f1744f5] font-bold">
                            Number of Students:
                        </p>
                        <div className="card-actions justify-end">
                            <a
                                // href="instructor-classes"
                                className="btn bg-[#1B1464] text-[#F79F1F] hover:bg-transparent border-none"
                            >
                                See Classes
                            </a>
                        </div>
                    </div>
                </div>
                {/* )
        )} */}
            </div>
        </div>
    );
};

export default Instructors;
