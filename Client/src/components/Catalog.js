import React , { useState, useEffect } from 'react';
import CarSearch from './CarSearch';
import CarList from './CarList';
import Header from './Header';

function Catalog (){
    const [cars, setCars] = useState([]);
  const [filterdCars, setFilterdCars] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const getCurrentCarsBySelectedFilters = () =>{
    if(!selectedModel || selectedModel === "All Cars"){
        return cars;
    } else{
        let filtered =  cars.filter(car => car.type === selectedModel);    
        if(selectedYear){
            filtered = filtered.filter (car => car.year === selectedYear);
        } 
        if(selectedColor){
            filtered = filtered.filter (car => car.color === selectedColor);
        }       
        return filtered;
    }
}

  useEffect(() => {
    fetch('http://localhost:4000/cars')
      .then(res => res.json())
      .then(data => {
        setCars(data.cars);
      })
      .catch(err => console.log(err));
  }, []);

  const filterByModel = (model) => {
    setSelectedModel(model);
    if (model === "All Cars") {
      setFilterdCars(cars);
    } else {
      const filterd = cars.filter((car) => {
        return (car.type === model);
      });
      setFilterdCars(filterd);
    }
  }
  const filterByYear = (year) => {
    setSelectedYear(year);
    const filtedYear = cars.filter((car) => {
      return (car.year === year);
    });
    setFilterdCars(filtedYear);
  }

  const filterByColor = (color) => {
    setSelectedColor(color);
    const filterdColor = cars.filter((car) => {
      return (car.color === color)
    });
    setFilterdCars(filterdColor);
  }

  const totalModels = cars.map(car => {
    return car.type;
  });

  const totalYears = cars.map(car =>{
    return car.year;
  } );

  const totalColors = cars.map(car =>{
    return car.color;
  } );

  let years = [... new Set(totalYears)];
  let colors = [... new Set(totalColors)];
  let models = [...new Set(totalModels)];

  return (
    <div >
      <Header/>
      <CarSearch models={models} filterByModel={(e) => filterByModel(e.target.value)} years={years} filterByYear={(e) => filterByYear(e.target.value)} colors={colors} filterByColor={(e) => filterByColor(e.target.value)} />
      <CarList cars={ getCurrentCarsBySelectedFilters()} />
    </div>
  );
}

export default Catalog;
