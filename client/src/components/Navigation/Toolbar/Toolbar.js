import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import classes from '../Toolbar/Toolbar.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import SearchForm from '../../Navigation/SearchForm/SearchForm';
import { ReactComponent as ShoppingCart } from '../../../assets/Images/shopping-cart.svg';
import { withRouter } from 'react-router-dom';
import Modal from '../../UI/Modal/Modal';
class Toolbar extends Component {
    state = {
        modalCarrinho: false,
    }

    modalCarrinhoHandlerOn = () => {
        this.setState({modalCarrinho: true})
    }

    modalCarrinhoHandlerOff = () => {
        this.setState({modalCarrinho: false})
    }

    voltaAoInicio = () => { 
        this.props.history.push({
        pathname: '/',
        search: '/'
        
    });
    window.location.reload();
    }
    render() {
        const carrinhoFeatureNotReady = <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><h4>Feature não criada.</h4></div>
    return(
        <div className={classes.OuterToolbar}>
            <div className={classes.Toolbar}>
                <div className={classes.drawerToggleArea}>
                    <DrawerToggle clicked={this.props.drawerToggleClicked} />
                    <Modal show={this.state.modalCarrinho} modalClosed={this.modalCarrinhoHandlerOff}> {carrinhoFeatureNotReady} </Modal>
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


                <div className={classes.topCart} onClick={() => this.modalCarrinhoHandlerOn()}>
                    <ShoppingCart />
                </div>


            </div>
        </div>
    )
}
};

export default withRouter(Toolbar);