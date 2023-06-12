import { useEffect, useState } from "react";
import { useAuth } from "../providers/AuthProvider";

const useUserInfo = () => {
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = async () => {
            if (currentUser) {
                try {
                    const res = await fetch();
                    // `${import.meta.env.VITE_SAVORY_SERVER}/api/menu`
                    const data = await res.json();
                    // console.log(data);
                    setData(data);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            } else {
                setData(false);
                setLoading(false);
            }
        };
        getData();
    }, [currentUser]);

    return [data, loading];
};

export default useUserInfo;
