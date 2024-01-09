
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom"
import Booked from './components/Booked/Booked';
import Login from './components/Login/Login';
import HotelDetails from './components/Hotel/HotelDetails';
import Footer from './components/Footer/Footer';
import PaymentPage from './components/Payment/PaymentPage';
import RoomInfo from './components/Hotel/RoomInfo';
import { mainData } from './data/data';
import { createContext, useState } from 'react';
import Home from './components/Home/Home';

export const SearchContext = createContext()
function App() {
  // search functionality
  const [searchQuery, setSearchQuery] = useState('');
  const [checkInDate, setCheckInDate] = useState([]);
  const [checkOutDate, setCheckOutDate] = useState([]);
  const [nuOfGuest, setNumOfGuest] = useState([])
  const [numRooms, setNumRooms] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [storeData, setStoreData] = useState([])




  const handleSearch = () => {
    setSearchQuery("");
    setCheckInDate("");
    setCheckOutDate("");
    setNumRooms("");
    setNumOfGuest("")
    setStoreData({ searchQuery: searchQuery }, { checkInDate: checkInDate }, { checkOutDate: checkOutDate }, { numRooms: numRooms });

    const result = mainData.filter((val) => {
      if (searchQuery == "") {
        return val;
      } else if (val.location.toLowerCase().includes(searchQuery.toLowerCase())) {
        return val;
      }
    })
    setSearchResult(result)

  };


  return (
    <>
      <SearchContext.Provider value={{ searchQuery, setSearchQuery, checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, numRooms, setNumRooms, handleSearch, nuOfGuest, setNumOfGuest, searchResult, setSearchResult, storeData }}>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home searchResult={searchResult} />} />


          <Route path='/hotel_details/:id' element={<HotelDetails />} />



          <Route path='/paymentPage/:name/:id' element={<RoomInfo />} />

          <Route path='booked' element={<Booked />} />
          <Route path='/price/:name' element={<PaymentPage />} />
          <Route path='/login' element={<Login />} />

        </Routes>


        <Footer />
      </SearchContext.Provider >

    </>
  );
}

export default App;
