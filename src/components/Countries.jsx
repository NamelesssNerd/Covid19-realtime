import React from 'react';
import './countries.scss';

const Countries = (props) => {
    return (
        <>
            <div className="globalData1">
                <h1>{props.Country}</h1>
                <h3>NewConfirmed: {props.NewConfirmed}</h3>
                <h3>TotalConfirmed: {props.TotalConfirmed}</h3>
                <h3>NewDeaths: {props.NewDeaths}</h3>
                <h3>TotalDeaths: {props.TotalDeaths}</h3>
                <h3>NewRecovered: {props.NewRecovered}</h3>
                <h3>TotalRecovered: {props.TotalRecovered}</h3>
            </div>
        </>

    )
}

export default Countries;