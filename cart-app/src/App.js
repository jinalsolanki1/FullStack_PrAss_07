import React from 'react';
import './App.css';
import Cart from './component/cart';
import Welcome from './component/welcome';
import {BrowserRouter,Route,Routes} from 'react-router-dom';


const App = () =>{
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
     </div>
    </BrowserRouter>
  )
};
export default App;


