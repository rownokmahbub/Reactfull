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

function App() {

  return (
    <Router>
   <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>


    </Router>
  );


};

export default App;
