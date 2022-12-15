import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './country.scss';
import Countries from './Countries';
import Topic from './Topic';


const Country = () => {
    const [Country, setCountries] = useState([]);
    const [world, setworld] = useState([]);
    async function Hamrofunction() {
        const Data = await axios.get('https://api.covid19api.com/summary');
        // console.log(Data);
        // console.log(Data.data.Countries[0])
        setCountries(Data.data.Countries);
        setworld(Data.data.Global);
        // const { Global } = Data.data;
        // console.log(Object.keys(Countries).length);
        // console.log(Countries[0].Country);
        /*
        NewConfirmed
        NewDeaths
NewRecovered
TotalConfirmed
TotalDeaths
TotalRecovered
        */
    }
    useEffect(() => {
        Hamrofunction();
    }, []);
    function ncards(val) {
        return (
            <Countries
                Country={val.Country}
                NewConfirmed={val.NewConfirmed}
                TotalConfirmed={val.TotalConfirmed}
                NewDeaths={val.NewDeaths}
                TotalDeaths={val.TotalDeaths}
                NewRecovered={val.NewRecovered}
                TotalRecovered={val.TotalRecovered}
            />
        )
    }
    return (
        <div className="container">
            <div className="left">
                <div className="globalData">
                    <h1>Global</h1>
                    <h3>NewConfirmed: {world.NewConfirmed}</h3>
                    <h3>TotalConfirmed: {world.TotalConfirmed}</h3>
                    <h3>NewDeaths: {world.NewDeaths}</h3>
                    <h3>TotalDeaths: {world.TotalDeaths}</h3>
                    <h3>NewRecovered: {world.NewRecovered}</h3>
                    <h3>TotalRecovered: {world.TotalRecovered}</h3>
                </div>
            </div>
            <div className="right">
                <Topic />
                {Country.map(ncards)}
            </div>
        </div>
    )
}
export default Country;