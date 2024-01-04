import { createContext, useState, useEffect } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext('');

const HouseProvider = ({children}) =>{

    const [houses, setHouses] = useState(housesData);
    const [city, setCity] = useState('Select City');
    const [cities, setCities] = useState([]);
    const [price, setPrice] = useState('Select Price');
    const [property, setProperty] = useState('Select type');
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const allCities = houses.map(house=>{
            return house.city;
        })
        const uniqueCities = [...new Set(allCities)];
        setCities(uniqueCities);
    }, []);

    useEffect(() => {
        const allPropertyTypes = houses.map(house=>{
            return house.type;
        })
        const uniquePropertyTypes = [...new Set(allPropertyTypes)];
        setProperties(uniquePropertyTypes);
    }, []);

    const searchHandler=()=>{
        setIsLoading(true);
       
        // checking selection 
        const isDefault = (str)=> {
            return str.split(' ').includes('Select');
        }
        const minPrice = parseInt(price.split(' ')[0]);
        const maxPrice = parseInt(price.split('- ')[1]);

        const filteredHouses = housesData.filter(house=> {
            const housePrice = parseInt(house.price);
            // no selection 
            if(isDefault(city) && isDefault(price) && isDefault(property) ){
                return house;
            }

            // country is selected
            if(!isDefault(city) && isDefault(price) && isDefault(property)){
                return house.city === city;
            }
            
            // price is selected
            if(isDefault(city) && !isDefault(price) && isDefault(property)){
                return (housePrice >= minPrice) && (housePrice <= maxPrice);
            }
            
            // property is selected
            if(isDefault(city) && isDefault(price) && !isDefault(property)){
                return house.type === property;
            }
            
            // country & price is selected
            if(!isDefault(city) && !isDefault(price) && isDefault(property)){
                return house.city === city && (housePrice >= minPrice) && (housePrice <= maxPrice);
            }
            
            // country & property is selected
            if(!isDefault(city) && isDefault(price) && !isDefault(property)){
                return house.city === city && house.type === property;
            }
            
            // price & property is selected
            if(isDefault(city) && !isDefault(price) && !isDefault(property)){
                return (housePrice >= minPrice) && (housePrice <= maxPrice) && house.type === property;
            }

            // all are selected 
            if(house.city === city && housePrice >= minPrice && housePrice <= maxPrice && house.type === property){
                return house;
            }
        })

        // setHouses(filteredHouses)
        setTimeout(() => {
            filteredHouses.length>0 ? setHouses(filteredHouses) : setHouses([]);
            setIsLoading(false);
        }, 1000);
    }
    
    return(
        <HouseContext.Provider value={{
            houses,
            city,
            setCity,
            cities,
            price,
            setPrice,
            property,
            setProperty,
            properties,
            searchHandler,
            isLoading
        }}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseProvider;