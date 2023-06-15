import axios from "axios";
import { useEffect, useState } from "react";
import useUserInfo from "../../../hooks/useUserInfo";

const ManageUsers = ({ adminEmail }) => {
    const [userData, loading] = useUserInfo("all");
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        !loading &&
            setAllUsers(
                userData.filter(
                    (user) =>
                        user.email !== adminEmail && user.role !== "superAdmin"
                )
            );
    }, [adminEmail, loading, userData]);

    // handle role update
    const handleRole = async (role, email) => {
        const updatedUsers = allUsers.map((user) => {
            if (user.email === email) {
                user.role = role;
            }
            return user;
        });
        setAllUsers(updatedUsers);

        try {
            // sent role change request
            const response = await axios.put(
                `${
                    import.meta.env.VITE_RHYTHMIC_SERVER
                }/api/update-role?role=${role}&email=${email}`
            );
            response.data.message && alert(response.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="overflow-auto">
            <table className="table table-xs min-w-[650px] text-white">
                <thead>
                    <tr className="text-white">
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!loading &&
                        Array.isArray(allUsers) &&
                        allUsers.map(({ _id, name, image, email, role }, i) => (
                            <tr key={_id}>
                                <th>{i + 1}</th>
                                <td>
                                    <img
                                        className=" rounded-[50%] w-8 h-8"
                                        src={image}
                                        alt=""
                                    />
                                </td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{role}</td>
                                {role !== "instructor" && (
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleRole("instructor", email)
                                            }
                                            className="btn btn-outline btn-info"
                                        >
                                            Make Instructor
                                        </button>
                                    </td>
                                )}
                                {role !== "admin" && (
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleRole("admin", email)
                                            }
                                            className="btn btn-outline btn-success"
                                        >
                                            Make Admin
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;
