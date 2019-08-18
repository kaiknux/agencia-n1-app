import React from 'react';
import { Route } from 'react-router-dom';
import classes from '../Toolbar/Toolbar.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import SearchForm from '../../Navigation/SearchForm/SearchForm';
import { ReactComponent as ShoppingCart } from '../../../assets/Images/shopping-cart.svg';


const toolbar = (props) => {
    console.log(props)
    return(
        <div className={classes.OuterToolbar}>
            <div className={classes.Toolbar}>
                <div className={classes.drawerToggleArea}>
                    <DrawerToggle clicked={props.drawerToggleClicked} />
                </div>
                                                <div className={classes.switchableContent}> 
                                                    <div className={classes.MobileOnly}>
                                                        <Logo />
                                                    </div>
                                                    <div className={classes.DesktopOnly}>
                                                        <NavigationItems />
                                                    </div>
                                                </div>

                                                                            <div className={classes.searchFormArea}>
                                                                                <Route
                                                                                    render={(props) => (<SearchForm recebido={props.recebido} {...props} />)}
                                                                                />
                                                                            </div>


                <div className={classes.topCart}>
                    <ShoppingCart />
                </div>


            </div>
        </div>
    )

};

export default toolbar;