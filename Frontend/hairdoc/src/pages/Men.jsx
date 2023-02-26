
// import './App.css';
import { useState } from 'react';
import Haircut from '../Components/men/Haircut';
import Beard from '../Components/men/Beard';
import Haircolor from '../Components/men/Haircolor';
import SpaandTreatment from '../Components/men/SpaandTreatment';
import Cart from '../Components/men/Cart';
import {ShoppingCartOutlined} from '@ant-design/icons'

import { IdProvider } from '../Components/men/Contexts/Id_context';
import Navbar from '../Components/Navbar';



function Men() {
 
  return (
    <>
    <Navbar/>
    <IdProvider>
    <h1>
      Hair Cut
    </h1>
<Haircut/>

<h1>Beard Cut</h1>
<Beard/>

<h1>Hair Color</h1>
<Haircolor/>

<h1>Spa and Treatment</h1>

<SpaandTreatment/>

<Cart/>




      
      
    </IdProvider>
    
    
    </>
  );
}

export default Men;
