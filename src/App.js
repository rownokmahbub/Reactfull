import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import User from "./component/User";
import Card from "./component/Card";
import Product from "./component/Products/Product";
import EventHandel from "./component/EventHandel";
import Counter from "./component/Counter/Counter";
import Form from "./component/Form";
import Ecard from "./component/Ecard";
import CatFact from "./component/CatFact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Navbar from "./component/Navbar";
import Toggle from "./component/Toggle";
import Faq from "./component/Faq";
import UseEffect from "./component/useeffect/UseEffect";
import DataFetch from "./component/DataFetch";
import Country from "./component/countryapp/Country";
import CountryFetch from "./component/countryapp/CountryFetch";
import Dynamic from "./component/Dynamic";

function App() {

  return (
    <div className="bg-gradient-to-r from-slate-50 to-red-50">
  <Dynamic/>



    {/* <Router>
   <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>


    </Router> */}

  
  
    </div>
  
  );


};

export default App;
