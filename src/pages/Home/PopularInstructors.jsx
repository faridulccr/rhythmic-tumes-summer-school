import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Heading from "../../components/Heading/Heading";
import useUserInfo from "../../hooks/useUserInfo";

const PopularInstructors = () => {
    const [userData, loading] = useUserInfo("all");
    const instructors = userData.filter((data) => data.role == "instructor");
    const sortedByStudent = instructors
        .sort((a, b) => b.students - a.students)
        .slice(0, 6);

    return (
        <div className="my-20">
            <Heading>Popular Instructors</Heading>
            <div className="grid sm:grid-cols-3 gap-4 px-2 xl:px-0">
                {!loading &&
                    Array.isArray(sortedByStudent) &&
                    sortedByStudent.map(
                        ({
                            _id,
                            image,
                            name,
                            email,
                            classesTaken,
                            classes,
                            students,
                            rating,
                        }) => (
                            <div
                                key={_id}
                                className="card w-full bg-[#1289A7] shadow-xl"
                            >
                                <figure>
                                    <img
                                        className="w-full h-[250px]"
                                        src={image}
                                        alt="classes"
                                    />
                                </figure>
                                <div className="card-body text-white">
                                    <h2 className="card-title">Name: {name}</h2>
                                    <p>Email: {email}</p>
                                    <p>Class Taken: {classesTaken}</p>
                                    <p>
                                        <b>Classes: </b>
                                        {classes.length > 0
                                            ? classes.join(", ")
                                            : 0}
                                    </p>
                                    <p className=" text-[#0f1744f5] font-bold">
                                        Number of Students: {students}
                                    </p>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={rating}
                                        readOnly
                                    />
                                </div>
                            </div>
                        )
                    )}
            </div>
        </div>
    );
};

export default PopularInstructors;
