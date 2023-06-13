import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import useClasses from "../../hooks/useClasses";
import useTitle from "../../hooks/useTitle";
import useUserInfo from "../../hooks/useUserInfo";
import { useAuth } from "../../providers/AuthProvider";

const Classes = () => {
    useTitle("Classes");
    const { currentUser } = useAuth();
    const [userData, loading] = useUserInfo();
    const [classData, classLoading] = useClasses();
    const [classes, setClasses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!classLoading) {
            setClasses(classData);
        }
    }, [classLoading, classData]);

    const handleDisable = (seats) => {
        if (currentUser && !loading) {
            const user = ["superAdmin", "admin", "instructor"];
            if (user.includes(userData.role)) {
                return true;
            }
        }
        return seats == 0;
    };

    const isSelected = (id) => {
        if (currentUser && !loading) {
            return userData?.selectedClasses?.includes(id);
        } else return false;
    };

    const handleSelect = async (id) => {
        // if does not logged in
        if (!currentUser) {
            navigate("/login");
            alert("You have to log in first to select a class.");
        } else {
            // update userData
            userData.selectedClasses.push(id);

            // update classes
            const updatedClasses = classes.map((item) => {
                if (item._id == id) {
                    item.seats = item.seats - 1;
                    return item;
                } else return item;
            });
            setClasses(updatedClasses);

            // send update request to select
            const response = await axios.put(
                `${
                    import.meta.env.VITE_RHYTHMIC_SERVER
                }/api/selected-class?id=${id}&email=${currentUser?.email}`
            );
            console.log(response.data);
        }
    };

    return (
        <div className="pt-24 pb-10">
            <Heading>All Classes</Heading>
            {classLoading && (
                <div className="h-[50vh] flex items-center justify-center">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            )}
            <div className="grid sm:grid-cols-3 gap-4 px-2 xl:px-0 pt-5">
                {!classLoading &&
                    Array.isArray(classes) &&
                    classes.map(
                        ({ _id, image, name, instructor, seats, price }) => (
                            <div
                                key={_id}
                                className={`card w-full shadow-xl ${
                                    seats == 0 ? "bg-red-700" : "bg-[#1289A7]"
                                }`}
                            >
                                <figure>
                                    <img
                                        className="w-full h-[250px]"
                                        src={image}
                                        alt=""
                                    />
                                </figure>
                                <div className="card-body text-white">
                                    <h2 className="card-title">
                                        Class Name: {name}
                                    </h2>
                                    <p>Instructor: {instructor} </p>
                                    <p>Available seats: {seats} </p>
                                    <p>Price: {price} </p>
                                    <div className="card-actions justify-end">
                                        <button
                                            onClick={() => handleSelect(_id)}
                                            className="btn bg-[#1B1464] text-[#F79F1F] hover:bg-transparent border-none"
                                            disabled={
                                                handleDisable(seats) ||
                                                isSelected(_id)
                                            }
                                        >
                                            {isSelected(_id)
                                                ? "Selected"
                                                : "Select"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
            </div>
        </div>
    );
};

export default Classes;
