import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../providers/AuthProvider";

const useUserInfo = (isAll) => {
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(isAll == "all" ? [] : {});

    useEffect(() => {
        const getData = async () => {
            if (currentUser) {
                const path = isAll == "all" ? "users" : "single-user";
                try {
                    const response = await axios.get(
                        `${
                            import.meta.env.VITE_RHYTHMIC_SERVER
                        }/api/${path}?email=${currentUser?.email}`
                    );
                    // console.log(response.data);
                    setData(response.data);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            }

            if (!currentUser && isAll == "all") {
                try {
                    const response = await axios.get(
                        `${import.meta.env.VITE_RHYTHMIC_SERVER}/api/users`
                    );
                    // console.log(response.data);
                    setData(response.data);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            }
        };
        getData();
    }, [isAll, currentUser]);

    return [data, loading];
};

export default useUserInfo;
