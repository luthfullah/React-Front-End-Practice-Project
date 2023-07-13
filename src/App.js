import './App.css';
import { Route, Routes } from "react-router-dom"
import Contact from './Pages/Contact';
import Form from './Pages/Form';
import Layout from './Pages/Layout';
import Navbar from './Navbar';
import Documentation from './Pages/Documentations';
import DessertList from './Pages/DessertList'
import 'tachyons'
import RestaurantApp from './Pages/RestaurantApp';
import Footer from './Pages/Footer'
import UseEffectHook from './Pages/UseEffectHook';

function App() {
  const dessert=[
    {
      name: "chicken",
      calories: 499,
      createdAt: '2019-08-03'
    },
    {
      name: "burger",
      calories: 400,
      createdAt: '2018-07-06'
    },
    {
      name: "fish",
      calories: 500,
      createdAt: '2020-08-03'
    },
  ]
  return (
    <>
    <Navbar />
    
    
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      
    </div>
    <DessertList data={dessert}/>
   <RestaurantApp/>
   <UseEffectHook/>


   <Footer/>
   
  </>
  );
}

export default App;