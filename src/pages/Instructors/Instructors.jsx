import Heading from "../../components/Heading/Heading";
import useTitle from "../../hooks/useTitle";
import useUserInfo from "../../hooks/useUserInfo";

const Instructors = () => {
    useTitle("Instructors");
    const [userData, loading] = useUserInfo("all");
    const instructor = userData.filter((data) => data.role == "instructor");

    return (
        <div className="pt-24 pb-5">
            <Heading>All Instructors</Heading>
            {loading && (
                <div className="h-[50vh] flex items-center justify-center">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            )}
            <div className="grid sm:grid-cols-3 gap-4 px-2 xl:px-0 pt-5">
                {!loading &&
                    Array.isArray(instructor) &&
                    instructor.map(
                        ({
                            _id,
                            image,
                            name,
                            email,
                            classesTaken,
                            classes,
                            students,
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
                                    <p>Class Taken: {classesTaken || " 0"}</p>
                                    <p>
                                        <b>
                                            Classes:
                                            {classes?.length > 0
                                                ? classes.join(", ")
                                                : " No Class"}
                                        </b>
                                    </p>
                                    <p className=" text-[#0f1744f5] font-bold">
                                        Number of Students: {students || " 0"}
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
                        )
                    )}
            </div>
        </div>
    );
};

export default Instructors;
