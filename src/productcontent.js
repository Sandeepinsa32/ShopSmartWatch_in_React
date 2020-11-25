import React from 'react';
import classes from './Css/productcontent.module.css';

const Productcontent = (props) => {
    const  logoPink_src="../fitbit_React/png/fit_band_pink.png";
    const  logoBlack_src="../fitbit_React/png/fit_band_black.png";
    const  logoBrown_src="../fitbit_React/png/fit_band_brown.png";
    const  logoOrange_src="../fitbit_React/png/fit_band_orange.png";
    //const  Heart_src    =  "../fitbit_React/png/heart.svg"; 


return(
        <div className={classes.Productcontent}>

     <section className={classes.contentSection}>
          <h3 className={classes.headerText} >Gear OS 2-Works on Android and iPhone</h3>
          <p className={classes.ContentText} >Wear OS by Gogle works with phones running Android 6.0+ (excluding Go edition) or iOS 10.0+</p>
           <p className={classes.Text} >Select color</p>
       
       
       
       
          <div className={classes.c}>
        	 
                <img src={logoPink_src}  className={[classes.productImg,classes.SelectedProductImg].join(' ')} alt='logoImage' />
                <img src={logoBlack_src}  className={classes.productImg} alt='logoImage' />
                <img src={logoBrown_src}  className={classes.productImg} alt='logoImage' />
                <img src={logoOrange_src}  className={classes.productImg} alt='logoImage' />
           
     
              </div>
               <div>
          <p className={classes.Text} >Features</p>

          <button className={[classes.btn,classes.timebtn].join('')}  > Time          </button>
          <button className={[classes.btn,classes.heartbtn].join('')}  > Heart rate    </button>
          {/* <button className={classes.btn}  > Android       </button>
					<button className={classes.btn}  > Geolaction    </button> */}
         
					
				            	
					
          </div>
          {/* <button  className={classes.buybtn} > Buy Now        </button> */}
          </section>
    
        </div>
    );
}
export default Productcontent;