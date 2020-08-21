import React from 'react';
import CarItem from './CarItem';
import { GridList } from "@material-ui/core";
import CarListStyle from '../style/CarListStyle.css';


const CarList = ({ cars }) => {
    return (
        <div>
            {cars.map(car => {
                return (
                    <div className="carlistContainer">
                        <GridList cols={3}>
                            <CarItem car={car} key={car.id} />
                        </GridList>
                    </div>
                );
            })}
        </div>
    )
}

export default CarList;