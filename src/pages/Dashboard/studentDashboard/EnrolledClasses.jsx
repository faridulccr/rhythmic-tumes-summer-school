import useClasses from "../../../hooks/useClasses";

const EnrolledClasses = ({ classesID }) => {
    const [classes, loading] = useClasses();
    const enrolledClasses = classes.filter((c) => classesID.includes(c._id));

    return (
        <div className="overflow-auto">
            <table className="table table-xs min-w-[650px] text-white">
                <thead>
                    <tr className="text-white text-center">
                        <th></th>
                        <th>Class Name</th>
                        <th>Instructor</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Total Students</th>
                        <th>Paid</th>
                    </tr>
                </thead>
                <tbody>
                    {!loading &&
                        Array.isArray(enrolledClasses) &&
                        enrolledClasses.map(
                            (
                                {
                                    _id,
                                    name,
                                    instructor,
                                    email,
                                    seats,
                                    price,
                                    enrolledStudents,
                                },
                                i
                            ) => (
                                <tr key={_id} className=" text-center">
                                    <th>{i + 1}</th>
                                    <td>{name}</td>
                                    <td>{instructor}</td>
                                    <td>{email}</td>
                                    <td>{seats}</td>
                                    <td>{enrolledStudents}</td>
                                    <td>${price}</td>
                                </tr>
                            )
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default EnrolledClasses;
