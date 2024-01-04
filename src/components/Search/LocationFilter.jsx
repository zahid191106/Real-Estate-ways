import { Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

const LocationFilter = () => {

  const {setCity, cities} = useContext(HouseContext);

  const locationHandler = (event)=> {
    setCity(event.target.value);
  }

  return (
    <Select id='selectcity'  placeholder='select City' onChange={locationHandler}>
      {
        cities.map((city, index)=> 
          <option key={index}>{city}</option>
        )
      }
    </Select>
  );
};

export default LocationFilter;