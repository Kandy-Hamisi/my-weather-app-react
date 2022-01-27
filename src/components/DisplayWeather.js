import React from 'react'
import '../App.css';


function DisplayWeather(props) {

    const {data} = props;
    console.log(data);
    const iconUrl = "http://openweathermap.org/img/wn/"
     + `${data.cod !== 404 ? data.weather[0].icon : null}.png`;

    return (
        <div className="displayWeather">
            { data.cod !== 404 ? (
                <React.Fragment>
                    <div className="myCard">
                        <span className="card-title">
                            {data.name}, {data.sys.country}. Weather {" "}
                        </span>
                        <span className="cardsubtitle">
                            As of {new Date().toLocaleTimeString()}
                        </span>
                        <h1>
                            {Math.floor(data.main.temp - 273.15)}
                            <sup>o</sup>C
                        </h1>
                        <span className="weather-main">
                            {data.weather[0].main}
                            <img src={iconUrl} alt="" />
                            <span className="weather-description">
                                {data.weather[0].description}
                            </span>
                        </span>
                    </div>
                    <div className="weather-details">
                        <div className="section1">
                            <table border="1">
                                <tbody>
                                    <tr>
                                        <td>
                                            <h4>High/Low</h4>
                                        </td>
                                        <td>
                                            <span>
                                                {Math.floor(data.main.temp_max - 273.15)}
                                                /{" "}
                                                {Math.floor(data.main.temp_min - 273.15)} <sup>o</sup> C;
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Humidity</h4>
                                        </td>
                                        <td>
                                            <span>
                                                {data.main.humidity} %
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Pressure</h4>
                                        </td>
                                        <td>
                                            <span>
                                            {data.main.humidity} hPa
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Visibility</h4>
                                        </td>
                                        <td>
                                            <span>
                                            {data.visibility / 1000} Km
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="section2">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h4>Wind</h4>
                                        </td>
                                        <td>
                                            <span>
                                                {Math.floor(data.wind.speed * 18) / 5} Km/hr;
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Wiind Direction</h4>
                                        </td>
                                        <td>
                                            <span>
                                                {data.wind.deg}
                                                <sup>o</sup>deg
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Sunrise</h4>
                                        </td>
                                        <td>
                                            <span>
                                            {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Sunset</h4>
                                        </td>
                                        <td>
                                            <span>
                                            {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </React.Fragment>
            ) : (
                <div className="myCard">
                    <h2>{ data.message }</h2>
                </div>
            )}
        </div>
    )
}

export default DisplayWeather;
