import React from 'react';
import classes from './NavigationItems.css';
import Logo from '../../UI/Logo/Logo';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
    <NavigationItem link='/' exact><Logo/></NavigationItem>
    <NavigationItem link='/games'>Games</NavigationItem>
    <NavigationItem link='/presentes'>Presentes</NavigationItem>
    <NavigationItem link='/sale'>Sale</NavigationItem>

    </ul>

);

export default navigationItems;