import React, { useState } from 'react';
import CarSearchStyle from '../style/CarSearchStyle.css';

const CarSearch = ({ models, filterByModel, filterByYear, years, filterByColor, colors }) => {

    return (
        <div className="searchBar">
            <span>Model :</span><select onChange={filterByModel}>
                <option id="model" value="All Cars">{"Clear Search"}</option>
                {models.map(model => {
                    return <option value={model} key={model}>{model}</option>
                })}
            </select>
            <span>Year :</span><select onChange={filterByYear} >
                <option value="">{"Select year"}</option>
                {years.map(year => {
                    console.log(<option value={year} key={year}>{year}</option>)
                    return <option value={year} key={year}>{year}</option>
                })}
            </select>
            <span>Color :</span><select onChange={filterByColor} >
                <option value="">{"Select color"}</option>
                {colors.map(color => {
                    return <option value={color} key={color}>{color}</option>
                })}
            </select>
        </div>
    )
}

export default CarSearch;
















