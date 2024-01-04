import Banner1 from '../components/Banner1'
import Search from '../components/Search/Search'
import HouseList from '../components/Houses/HouseList';
import HouseProvider from '../context/HouseContext';
import { Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <HouseProvider>
      <Banner1 />
      <Search />
      <HouseList />

    </HouseProvider>
    </>
  )
}

export default Home;