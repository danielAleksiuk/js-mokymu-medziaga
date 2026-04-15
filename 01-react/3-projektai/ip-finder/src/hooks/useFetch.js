import { useState } from "react";


const useFetch = (url, timeout = 2000) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const makeApiCall = async () => {
        setLoading(true);

        setTimeout( async () => {
            await fetch(url)
                .then(res => res.json())
                .then(data => setData(data))
                .catch(() => setData({
                    ip: '70.60.50.40',
                    city: 'random city',
                    org: 'Telia',
                    country_name: 'random county',
                    latitude: 54.686569, 
                    longitude: 25.298406,
                }))
                .finally(() => setLoading(false));
        }, timeout);
    }

    return {data, loading, makeApiCall}
}

export default useFetch;

// 1. kol laukiam response rodom loading langa
// 2. ir idedam loading busenos pasikeitima i timeout - 2 sek
// 3. paslepti page-data div jei loading yra true
// 4. parodyti loadinng spineri jei loading yre true 
// 5. animacij su loading langu