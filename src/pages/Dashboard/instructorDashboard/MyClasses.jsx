import useClasses from "../../../hooks/useClasses";

const MyClasses = ({ email }) => {
    const [classes, loading] = useClasses();
    const myClasses = classes.filter((c) => c.email == email);

    return (
        <div className="overflow-auto">
            <table className="table table-xs min-w-[650px] text-white">
                <thead>
                    <tr className="text-white">
                        <th></th>
                        <th>Status</th>
                        <th>Class Name</th>
                        <th>Enrolled Students</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!loading &&
                        Array.isArray(myClasses) &&
                        myClasses.map(
                            (
                                { _id, status, name, price, enrolledStudents },
                                i
                            ) => (
                                <tr key={_id}>
                                    <th>{i + 1}</th>
                                    <td>{status}</td>
                                    <td>{name}</td>
                                    <td>{price}</td>
                                    <td>{enrolledStudents}</td>
                                    <td>
                                        <a
                                            // href={`/class-update/${_id}`}
                                            className="btn btn-outline btn-success"
                                        >
                                            Feedback
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            // href={`/class-update/${_id}`}
                                            className="btn btn-outline btn-secondary"
                                        >
                                            Update
                                        </a>
                                    </td>
                                </tr>
                            )
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default MyClasses;
