import { useState } from "react";

const useFetch = (timeout = 2000) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const makeApiCall = async (url) => {
        setLoading(true);

        setTimeout( async () => {
            await fetch(url)
                .then(res => res.json())
                .then(data => setData(data))
                .catch((e) => setData(e))
                .finally(() => setLoading(false));
        }, timeout);
    }

    return {data, loading, makeApiCall}
}

export default useFetch;
