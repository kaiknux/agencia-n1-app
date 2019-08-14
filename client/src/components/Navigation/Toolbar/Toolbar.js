import React from 'react';

import classes from '../Toolbar/Toolbar.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import SearchForm from '../../Navigation/SearchForm/SearchForm';


const toolbar = (props) => (
    <div className={classes.OuterToolbar}>
    <div className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div>
        <div className={classes.MobileOnly}>
            <Logo />
        </div>
        <div className={classes.DesktopOnly}>
            <NavigationItems />
        </div>
        </div>
           <SearchForm />
    </div>
    </div>
);

export default toolbar;