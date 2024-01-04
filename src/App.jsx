import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react'

import Header from './components/Header/Header';
import Home from './routes/Home';
import PropertyDetails from './routes/PropertyDetails';
import Footer from './components/Footer'
import HouseProvider from './context/HouseContext';
import HouseDetails from './components/PropertyDetails/HouseDetails';
import Contact from './components/Contact/Contact';
import About from './components/About';
import Signin from './components/Signin';
import Signup from './components/Signup';
import UploadProperty from './components/UploadProperty';

const App = () => {
  return (
    <HouseProvider >
    
      <Container maxW='container.lg' px='6' >
        <Header  />
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/uploadproperty' element={<UploadProperty />} />
          <Route path='property-details' element={ <PropertyDetails /> } >
            <Route path=":propertyId" element={<HouseDetails />} />
          </Route>
          <Route path="*"
                element={ <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                          </main>
                        }
          />
        </Routes>
      </Container>
      <Footer />
    </HouseProvider>
  )
}

export default App