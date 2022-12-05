import React from 'react';
import HeaderComponent from './HeaderComponent.js';
import MainComponent from './MainComponent.js';
import FooterComponent from './FooterComponent.js';
import ModalComponent from './ModalComponent.js';

const WrapComponent = () => {
   
   const [show, setShow] = React.useState(false);

   const modalOpen=()=>{
     setShow(true);
   } 
   const modalClose=()=>{
     setShow(false);
   } 

   return (
      <div id="wrap">
      <HeaderComponent/>
      <MainComponent modalOpen={modalOpen}/>
      <FooterComponent/>
      {
      show && <ModalComponent modalClose={modalClose}/>
      }
    </div>
   );
};

export default WrapComponent;