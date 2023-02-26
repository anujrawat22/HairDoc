
// import './App.css';
import { useState } from 'react';
import Haircut from './components/Haircut';
import Beard from './components/Beard';
import Haircolor from './components/Haircolor';
import SpaandTreatment from './components/SpaandTreatment';
import Cart from './components/Cart';
import {ShoppingCartOutlined} from '@ant-design/icons'
import { Button, Drawer } from 'antd';



function Men() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
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

<ShoppingCartOutlined onClick={showDrawer} style={{fontSize : '3rem',position : 'fixed',top : '90vh',left : '92vw',cursor : 'pointer'}}/>


      
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    
    </>
  );
}

export default Men;
