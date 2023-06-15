import Heading from "../../components/Heading/Heading";
import useClasses from "../../hooks/useClasses";

const TopClasses = () => {
    const [classesData, loading] = useClasses();
    const sortedByStudents = classesData
        .sort((a, b) => {
            return b.enrolledStudents - a.enrolledStudents;
        })
        .slice(0, 6);

    return (
        <div className="my-20">
            <Heading>Popular Classes</Heading>
            <div className="class-sec grid sm:grid-cols-3 gap-4 px-2 xl:px-0">
                {!loading &&
                    Array.isArray(sortedByStudents) &&
                    sortedByStudents.map(
                        ({
                            _id,
                            image,
                            name,
                            instructor,
                            email,
                            price,
                            description,
                            enrolledStudents,
                        }) => (
                            <div
                                key={_id}
                                className="card w-full shadow-xl image-full"
                            >
                                <figure>
                                    <img src={image} alt={name} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Class Name: {name}
                                    </h2>
                                    <p className="block text-xl">
                                        {description}
                                    </p>
                                    <p className="block text-xl">
                                        Enrolled Students: {enrolledStudents}
                                    </p>
                                    <p className="block text-xl">
                                        <b>Instructor:</b> {instructor}
                                    </p>
                                    <p className="block text-xl">
                                        <b>Email:</b> {email}
                                    </p>
                                    <p className="block text-xl">
                                        <b>Price:</b> ${price}
                                    </p>
                                </div>
                            </div>
                        )
                    )}
            </div>
        </div>
    );
};

export default TopClasses;
