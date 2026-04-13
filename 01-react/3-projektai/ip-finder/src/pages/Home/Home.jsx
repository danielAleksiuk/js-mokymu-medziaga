import './Home.css';
import { useState, useEffect } from 'react';
import { API_URL } from '../../utils/constants';
import useFetch from '../../hooks/useFetch';
import LabelWithTitle from '../../components/LabelWithTitle';

const Home = () => {
    const [ipDetails, setIpDetails] = useState(null);
    const {data, makeApiCall, loading} = useFetch(API_URL);

    
    useEffect(() => {
       makeApiCall();
    }, []);

    useEffect(() => {
        if (data) {
            const {ip, city, org, country_name} = data;
            setIpDetails({ip, city, org, country_name});
        }
        console.log('data value is changed')
        console.log(data);
    }, [data])


    // l - laikas
    // k - kartu
    // + - done
    return (
        <div className='page-container'>
            <h1>ip address finder</h1>

            {loading && (
                <div className='loader'></div>
            )}


            {!loading && data && (
                <div className='page-data'>
                    <div className='ip-data'>
                        <LabelWithTitle
                            title='What is my ip adress?'
                            body= {ipDetails?.ip}
                            bodyCSS='ip-number'
                        />
                        <LabelWithTitle
                            title='Approximate location:'
                            body= {`${ipDetails?.city}, ${ipDetails?.country_name}`}
                            bodyCSS='details-s'
                        />
                        <LabelWithTitle
                            title='Service provider:'
                            body= {ipDetails?.org}
                            bodyCSS='details-s'
                        />
                        {/* <strong>What is my ip adress?</strong>
                        <p className="ip-number">{ipDetails?.ip}</p>
                        <strong>Approximate location: </strong>
                        <p className="details-s">{ipDetails?.city}, {ipDetails?.country_name}</p>
                        <strong>Service provider: </strong>
                        <p className="details-s">{ipDetails?.org}</p> */}
                    </div>
                    <div className='ip-map'>mapas</div> 
                </div>
            )}
           
        </div>
    )
};

export default Home;

// + , l , k 
//   5 min  iki 10 min
// 1. uzsikrovus Home komponentui, iskviesti API - https://ipapi.co/
// 2. duomenis atvaizduoti console.log

