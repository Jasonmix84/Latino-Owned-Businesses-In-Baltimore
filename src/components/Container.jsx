import React from 'react';
import './Container.css'
import Business from './Business';

const Container = () => {
    return (
        <div className="grid-container">
            <Business name="Taco Loco"/>
            <Business name="Cinco de Mayo"/>
            <Business name="Ruben's"/>
            <Business name="Vargas Bakery"/>
            <Business name="Genesis Mercado Latino"/>
            <Business name="La Michoacana"/>
            <Business name="Savemart Supermarket"/>
            <Business name="Charo General Merchandise"/>
            <Business name="Jalapenos Market & Bakery"/>
            <Business name="Las Esperanzas Cafe 3"/>
        </div>
    );
}
export default Container;