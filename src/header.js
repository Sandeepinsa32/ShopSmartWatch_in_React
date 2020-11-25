import React from 'react';
import classes from './Css/header.module.css';

const Header = (props) => {
    const  logoPink_src="../fitbit_React/png/fit_band_pink.png";
    // /fitbit_React/png/fit_band_pink.png
    return(
        <div className={classes.header}>

        <header className={classes.mainHeader}>
          <nav className={classes.Topbar}>

                <img src={logoPink_src}  className={classes.logo } alt='logoImage' />
                <span className={classes.logo_text}>GearOS</span>
                <button type="button" className={classes.loginBtn}>Login</button>
                
          </nav>
      </header>
        </div>


    );
}
        export default Header;