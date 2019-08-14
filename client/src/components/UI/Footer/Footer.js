import React from 'react';

import classes from './Footer.css';
import Logo1a from '../Logo1a/Logo1a';



const footer = (props) => (
    <div className={classes.Outerfooter}>
        <div className={classes.FooterLeft}>
            <div className={classes.divLogo}>
                <Logo1a />
            </div>
        </div>
        <div className={classes.FooterRight}>
            Agência N1 - Todos os direitos reservados.
        </div>
    </div>
);

export default footer;