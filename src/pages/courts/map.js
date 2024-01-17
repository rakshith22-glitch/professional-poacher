import React, { useState, useEffect } from 'react';
import CourtMap from './courtsaround';
const CourtMapComponent = () => {
    const [courts, setCourts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = "https://www.pickleheads.com/api/trpc/misc.search";
        const params = {
            batch: "1",
            input: "{\"0\":{\"north\":65.57969612040478,\"south\":-42.56468578921253,\"west\":-120.51441241351108,\"east\":-57.499930208948015,\"filters\":{\"access\":[],\"amenities\":[],\"features\":[],\"surface\":[]}}}"
        };

        fetch(url + "?batch=" + params.batch + "&input=" + encodeURIComponent(params.input))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCourts(data[0].result?.data?.courts); // Assuming 'data' is the array of courts
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
                setIsLoading(false);
            });
    }, []); // Empty dependency array means this effect runs once on mount
    console.log(courts)

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
        <CourtMap courts={courts} />
    </div>
    );
};

export default CourtMapComponent;