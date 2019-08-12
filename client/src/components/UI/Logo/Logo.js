import React from 'react';

import nOneLogo from '../../../assets/Images/logo-n1.png';
import classes from '../Logo/Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={nOneLogo} alt='nOne' />
    </div>
);

export default logo;