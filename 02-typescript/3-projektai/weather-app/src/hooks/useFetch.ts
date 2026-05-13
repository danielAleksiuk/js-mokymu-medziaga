import { useState } from "react";

const useFetch = (timeout: number = 2000) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>();

    const makeApiCall = async (url: string) => {
        setLoading(true);
        setErrorMessage(undefined);

        setTimeout( async () => {
            await fetch(url)
                .then(res => res.json())
                .then(data => {
                    if (data.cod && data.cod === "404") {
                        setErrorMessage(data.message)
                        return;
                    }
                    console.log('data then')
                    setData(data);
                })
                .catch(() => setErrorMessage( 'Sorry, something went worng. Please try again.'))
                .finally(() => setLoading(false));
        }, timeout);
    }

    return {data, loading, makeApiCall, errorMessage}
}

export default useFetch;
