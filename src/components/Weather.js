import React, {useState} from 'react'
import DisplayWeather from './DisplayWeather';
function Weather() {


    const APIKEY = "c41fbd5cfd39aa4a516bdefffae72a03";
    
    const [form, setForm] = useState({
        city: "",
        country: ""
    });

    const [weather, setWeather] = useState([]);

    async function weatherData(e){
        e.preventDefault();
        if (form.city == "") {
            alert("Add Value!!");
        }else{
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
                )
                .then(res => res.json())
                .then((data) => data);

                setWeather(
                    {
                        data: data
                    }
                );
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name == "city"){
            setForm({...form, city:value})
        }
        if (name == "country") {
            setForm({...form, country:value})
        }
    }

    
    return (
        <div className="weather">
            <h1 className="title app-title">Weather</h1>
            
            <section className="form-section">
                <form>
                    <input
                     type="text" 
                     name="city" 
                     placeholder="city" 
                     onChange={(e) => handleChange(e)}
                         
                     />
                    <input
                     type="text" 
                     name="country" 
                     placeholder="country" 
                     onChange={(e) => handleChange(e)}
                     />
                    <button 
                        className="getweather"
                        onClick={(e) => weatherData(e)}
                    >
                        submit
                    </button>
                </form>
            </section>

            {
                weather.data !== undefined ?

                <div>
                    <DisplayWeather data={weather.data } />
                </div>

                :null
            }

        </div>


        
    );
}

export default Weather;
