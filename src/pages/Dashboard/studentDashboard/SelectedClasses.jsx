import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import useClasses from "../../../hooks/useClasses";

const SelectedClasses = ({ classesID, email }) => {
    const [classes, loading] = useClasses();
    const [selectedClasses, setSelectedClasses] = useState([]);

    useEffect(() => {
        !loading &&
            setSelectedClasses(
                classes.filter((c) => classesID.includes(c._id))
            );
    }, [loading, classes, classesID]);

    const handleDelete = async (id) => {
        setSelectedClasses((prev) => prev.filter((c) => c._id != id));

        try {
            // sent unselect request
            const response = await axios.put(
                `${
                    import.meta.env.VITE_RHYTHMIC_SERVER
                }/api/user/unselected-class?id=${id}&email=${email}`
            );
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="overflow-auto">
            <table className="table table-xs min-w-[850px] text-white">
                <thead>
                    <tr className="text-white">
                        <th></th>
                        <th>Class Name</th>
                        <th>Instructor</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Enrolled Students</th>
                        <th>Remove</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {!loading &&
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
                            ) => (
                                <tr key={_id}>
                                    <th>{i + 1}</th>
                                    <td>{name}</td>
                                    <td>{instructor}</td>
                                    <td>{email}</td>
                                    <td>{seats}</td>
                                    <td>${price}</td>
                                    <td>{enrolledStudents}</td>
                                    <td className="flex justify-center">
                                        <AiOutlineDelete
                                            className="cursor-pointer"
                                            onClick={() => handleDelete(_id)}
                                            size={24}
                                        />
                                    </td>
                                    <td>
                                        <a
                                            href={`/payment/${_id}`}
                                            className="btn btn-outline btn-secondary"
                                        >
                                            Pay
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

export default SelectedClasses;
