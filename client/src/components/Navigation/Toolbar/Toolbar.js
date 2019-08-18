import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import classes from '../Toolbar/Toolbar.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import SearchForm from '../../Navigation/SearchForm/SearchForm';
import { ReactComponent as ShoppingCart } from '../../../assets/Images/shopping-cart.svg';
import { withRouter } from 'react-router-dom';

class Toolbar extends Component {

    voltaAoInicio = () => { 
        this.props.history.push({
        pathname: '/',
        search: '/'
        
    });
    window.location.reload();
    }
    render() {
    return(
        <div className={classes.OuterToolbar}>
            <div className={classes.Toolbar}>
                <div className={classes.drawerToggleArea}>
                    <DrawerToggle clicked={this.props.drawerToggleClicked} />
                </div>
                                                <div className={classes.switchableContent}> 
                                                    <div className={classes.MobileOnly} onClick={()=> this.voltaAoInicio}>
                                                        <Logo />
                                                    </div>
                                                    <div className={classes.DesktopOnly}>
                                                        <NavigationItems />
                                                    </div>
                                                </div>

                                                                            <div className={classes.searchFormArea}>
                                                                                <Route
                                                                                    render={() => (<SearchForm recebido={this.props.recebido} {...this.props} />)}
                                                                                />
                                                                            </div>


                <div className={classes.topCart}>
                    <ShoppingCart />
                </div>


            </div>
        </div>
    )
}
};

export default withRouter(Toolbar);