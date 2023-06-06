import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        // for dynamic page title
        document.title = `${title} - Rhythmic Tunes`;
    }, [title]);
};

export default useTitle;
