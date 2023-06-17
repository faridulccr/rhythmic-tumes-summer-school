import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import useClasses from "../../../hooks/useClasses";

const SelectedClasses = ({ classesID, userEmail }) => {
    const [classes, loading] = useClasses();
    const [selectedClasses, setSelectedClasses] = useState([]);

    useEffect(() => {
        !loading &&
            setSelectedClasses(
                classes.filter((c) => classesID.includes(c._id))
            );
    }, [loading, classes, classesID]);

    const handleDelete = async (id) => {
        classesID.splice(classesID.indexOf(id), 1);
        setSelectedClasses((prev) => prev.filter((c) => c._id != id));

        try {
            // sent unselect request
            const response = await axios.put(
                `${
                    import.meta.env.VITE_RHYTHMIC_SERVER
                }/api/user/unselected-class?id=${id}&email=${userEmail}`
            );
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const calculateTotalPrice = (selectedClass) => {
        const totalPrice = selectedClass.reduce(
            (total, { price }) => total + parseFloat(price),
            0
        );
        return totalPrice;
    };

    return (
        <div className="overflow-auto">
            <div className="text-white font-semibold xs:font-bold flex flex-col xs:flex-row gap-3 xs:justify-between mb-5">
                <h3 className="text-2xl">
                    Total Classes: {selectedClasses.length}
                </h3>
                <h3 className="text-2xl">
                    Total Price: ${calculateTotalPrice(selectedClasses)}
                </h3>
                <a
                    href={`/payment/${calculateTotalPrice(selectedClasses)}`}
                    className="btn btn-outline btn-secondary w-12"
                >
                    Pay
                </a>
            </div>
            <table className="table table-xs min-w-[850px] text-white">
                <thead>
                    <tr className="text-white text-center">
                        <th></th>
                        <th>Class Name</th>
                        <th>Instructor</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Enrolled Students</th>
                        <th>Remove</th>
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
                                <tr key={_id} className="text-center">
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
                                </tr>
                            )
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default SelectedClasses;
