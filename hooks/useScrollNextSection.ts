import { useEffect, useCallback } from "react";

const useScrollNextSection = () => {
    // ✅ Page mount hote hi top par smooth scroll
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    // ✅ Function jo hamesha 100vh next scroll kare
    const onScrollNext = useCallback(() => {
        const vh = window.innerHeight;

        window.scrollBy({
            top: vh,
            behavior: "smooth",
        });
    }, []);

    return { onScrollNext };
};

export default useScrollNextSection;
