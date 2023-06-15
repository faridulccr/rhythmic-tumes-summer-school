import axios from "axios";
import { useEffect, useState } from "react";
import useClasses from "../../../hooks/useClasses";

const ManageClasses = () => {
    const [classes, loading] = useClasses();
    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        !loading && setAllClasses(classes);
    }, [loading, classes]);

    const handleStatus = async (status, id) => {
        const updatedClasses = allClasses.map((c) => {
            if (c._id == id) {
                c.status = status;
            }
            return c;
        });
        setAllClasses(updatedClasses);

        try {
            // sent unselect request
            const response = await axios.put(
                `${
                    import.meta.env.VITE_RHYTHMIC_SERVER
                }/api/update-status?id=${id}&status=${status}`
            );
            response.data.message && alert(response.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    // const handleFeedback = (instructorEmail) => {};

    return (
        <div>
            {!loading &&
                Array.isArray(allClasses) &&
                allClasses.map(
                    ({
                        _id,
                        name,
                        image,
                        instructor,
                        email,
                        seats,
                        price,
                        status,
                    }) => (
                        <div
                            key={_id}
                            className="grid md:grid-cols-2 border border-slate-600 mb-5 rounded"
                        >
                            <figure>
                                <img
                                    className="h-52 xs:h-60 md:h-full w-full"
                                    src={image}
                                    alt="Movie"
                                />
                            </figure>
                            <div className="card-body text-white">
                                <h2 className="card-title">
                                    Class Name: {name}
                                </h2>
                                <p>
                                    <b>Instructor: {instructor}</b>
                                </p>
                                <p>
                                    <b>Email: {email}</b>
                                </p>
                                <p>
                                    <b>Available seats: {seats}</b>
                                </p>
                                <p>
                                    <b>Price: {price}</b>
                                </p>
                                <p>
                                    <b>Status: {status}</b>
                                </p>
                                <div className="card-actions justify-end">
                                    <button
                                        onClick={() =>
                                            handleStatus("approved", _id)
                                        }
                                        className="btn btn-outline btn-success"
                                        disabled={
                                            status == "approved" ||
                                            status == "denied"
                                        }
                                    >
                                        Approve
                                    </button>
                                    <button
                                        // onClick={() => handleFeedback(email)}
                                        className="btn btn-outline btn-warning"
                                    >
                                        Feedback
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleStatus("denied", _id)
                                        }
                                        className="btn btn-outline btn-error"
                                        disabled={
                                            status == "approved" ||
                                            status == "denied"
                                        }
                                    >
                                        Deny
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                )}
        </div>
    );
};

export default ManageClasses;
