import React, { useState,useEffect } from 'react';

const useFetchUserData = () => {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                setUserData(data);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
                setIsLoading(false);
            });
    }, []); // Empty dependency array means this effect runs once on mount

    return { userData, isLoading, error };
};

export default useFetchUserData