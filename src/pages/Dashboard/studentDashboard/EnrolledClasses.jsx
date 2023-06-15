const EnrolledClasses = () => {
    return (
        <div className="overflow-auto">
            <table className="table table-xs min-w-[650px] text-white">
                <thead>
                    <tr className="text-white">
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
                    {/* {!loading &&
                        Array.isArray(selectedClasses) &&
                        selectedClasses.map(
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
                            ) => ( */}
                    <tr>
                        <th>1</th>
                        <td>name</td>
                        <td>instructor</td>
                        <td>email</td>
                        <td>seats</td>
                        <td>enrolledStudents</td>
                        <td>$price</td>
                    </tr>
                    {/* )
                        )} */}
                </tbody>
            </table>
        </div>
    );
};

export default EnrolledClasses;
