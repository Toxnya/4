import React, {useState, useEffect, useRef} from "react";

const CountdownTimer = () => {
    const [count, setCount] = useState(10);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000)

        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        if (count === 0) {
            clearInterval(intervalRef.current);
        }
    }, [count]);

    return <div>{count}</div>;
};

export default CountdownTimer;