import React from 'react';
import axios from 'axios';

export default function Rest(props: { url: string; }) {

    const url = { ...props };

    axios({
        method: "GET",
        url: url, //https://cors-anywhere.herokuapp.com/       "http://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=dc188740a6faebe07902f134609866d2",
    }).then((response: any) => {
        console.log(response);
        setWeatherData(response);
    })
        .catch((error: any) => {
            console.log(error);
        });


    return (
        <div>

        </div>
    )
}





