import React from 'react';
import classes from'./productpreview.module.css';

const Productpreview = (props) => {
            
             const  logoPink_src="png/fit_band_pink.png";
            const  Heart_src    =  "png/heart.svg";  


             function time(){
          const  now      = new Date,
            hours   = now.getHours(),
            ampm    = hours<12 ? ' AM' : ' PM',
            minutes = now.getMinutes(),
            //seconds = now.getSeconds(),
            time_str   = (hours>12) ? [ (hours-12), //otherwise: what's the use of AM/PM?
                  (minutes < 10 ? "0" + minutes : minutes),
                  // (seconds < 10 ? "0" + seconds : seconds) 
                  ]
                   .join(":") + ampm
          //else part of if condition;
          : [(hours),										 //otherwise: what's the use of AM/PM?
          (minutes < 10 ? "0" + minutes : minutes),
          //(seconds < 10 ? "0" + seconds : seconds)
          ]
          .join(":") + ampm ;

          setTimeout(time,1000);
          return time_str;
          }




   
    return(
        <div className={classes.Productpreview}>
        <section className={classes.ImageSection}>
          <img src={logoPink_src}  className={classes.MainProductImage} alt='logoImage' />
            
            <div className={classes.FeaturesItem} > 
            
            <p> {` ${time()}`}</p>
            </div>

             <div className={classes.FeaturesItem2} > 
             <img src={Heart_src}  className={[classes.logo,classes.heart].join('') } alt='logoImage' />
            <p> 50</p>
            </div>
            
          <button  className={classes.buybtn2} > Buy Now        </button> 
          </section>

        </div>
    );
}
export default Productpreview;