import React , { useState, useEffect } from 'react';
import CarSearch from './CarSearch';
import CarList from './CarList';
import Header from './Header';
// import { GridList } from "@material-ui/core";


function CarCatalog (){
    const [cars, setCars] = useState([]);
  const [filterdCars, setFilterdCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/cars')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCars(data.cars);
      })
      .catch(err => console.log(err));
  }, []);

  const filterByModel = (model) => {
    if (model === "All Cars") {
      setFilterdCars(cars);
    } else {
      console.log(model);
      console.log(cars);
      const filterd = cars.filter((car) => {
        return (car.type === model);
      });
      setFilterdCars(filterd);
    }
  }

  const filterByYear = (year) => {
    const filtedYear = cars.filter((car) => {
      return (car.year === year);
    });
    setFilterdCars(filtedYear);

  }

  const filterByColor = (color) => {
    const filterdColor = cars.filter((car) => {
      return (car.color === color)
    });
    setFilterdCars(filterdColor);
  }

  const totalModels = cars.map(car => {
    return car.type;
  });

  const allYears = filterdCars.map(filterdCar => {
    return filterdCar.year;
  });

  let models = [...new Set(totalModels)];

  let years = [... new Set(allYears)];

  const allColors = filterdCars.map(filterdCar => {
    return filterdCar.color;
  });

  let colors = [... new Set(allColors)];

  return (
    <div >
      <Header />
      <CarSearch models={models} filterByModel={(e) => filterByModel(e.target.value)} years={years} filterByYear={(e) => filterByYear(e.target.value)} colors={colors} filterByColor={(e) => filterByColor(e.target.value)} />
      <CarList cars={filterdCars || cars} />
    </div>
  );
}

export default CarCatalog;
