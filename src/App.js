import React from 'react';
import Header from './header';
import Productpreview from './productpreview';
import Productcontent from './productcontent';
import classes from'./App.module.css';

function App() {

  // const  logoPink_src="png/fit_band_pink.png";
  // const  logoBlack_src="png/fit_band_black.png";
  // const  logoBrown_src="png/fit_band_brown.png";
  // const  logoOrange_src="png/fit_band_orange.png";
  // const  Heart_src    =  "png/heart.svg";  

       
  return (  
     
    <div className={classes.AppHeader} >
      <Header/>
      <div className={classes.mainDiv}>
          <Productpreview/>
          <Productcontent/>
      </div>
    </div> 

  );
}

export default App;