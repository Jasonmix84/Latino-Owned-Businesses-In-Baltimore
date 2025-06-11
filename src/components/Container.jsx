import React from 'react';
import './Container.css'
import Business from './Business';
import tacoLoco from '../img/tacoloco.png';
import cinco from '../img/cincoDeMayo.png';
import rubens from '../img/Rubens.png';
import vargas from '../img/vargas.png';
import genesis from '../img/genesis.png';
import michoacana from '../img/michoacana.png';
import savemart from '../img/savemart.png';
import charo from '../img/charo.png';
import jalapeno from '../img/jalapeno.png';
import esperanzas from '../img/esperanzas.png';

const Container = () => {
    return (
        <div className="grid-container">
            <Business name="Taco Loco" imgSrc={tacoLoco} description="A Mexican Food Spot. They have a buffet option which offers a plethora of Authentic Mexican Food at a good price. 
            Their Tacos, Burritos, and Quesadillas are also really good." address="100 Willow Spring Rd, Dundalk, MD 21222, USA" website="https://www.tacolocorestaurants.com/"/>
            <Business name="Cinco de Mayo" imgSrc={cinco} description="A Mexican Grocery Store and Food Spot. Many locals go here to find various imports from Mexico. 
            Fresh Produce you can't find just anywhere. The food is also really good. While it's small there is a lot to find." 
            address="417 S Highland Ave, Baltimore, MD 21224" website="https://www.facebook.com/profile.php?id=100039394698547"/>
            <Business name="Ruben's" imgSrc={rubens} description="Another Mexican Food Spot. Great for a late Night Bite. They have a variety of Mexican Food options, known mainly
            for their Birria Tacos and Burritos. They Open early and close late. Unfortunately, they are not open on Mondays. Check them out they have 3 locations in Baltimore. I have linked
            the Federal Hill Location address." 
            address="1043 S Charles St, Baltimore, MD 21230" website="https://rubensmexicanfood.com/"/>
            <Business name="Vargas Bakery" imgSrc={vargas} description="A small Bakery near Cinco de Mayo. They have various Mexican and Central American Pastries and 
            Breads at a good price." 
            address="274 S Highland Ave, Baltimore, MD 21224" website="https://www.facebook.com/vargasbakeryllc/"/>
            <Business name="Genesis Mercado Latino" imgSrc={genesis} description="A Latino Grocery Store. They have a variety of Latino Foods and Products. The store is small but there is
            a lot to find. It is near Taco Loco. Check it out." 
            address="32 N Dundalk Ave, Dundalk, MD 21222" website="https://www.facebook.com/GenesisMercadoLatino/"/>
            <Business name="La Michoacana Ice Cream Shop" imgSrc={michoacana} description="Latino Ice Cream Shop. They have a variety of Ice Cream Flavors and Paletas, all housemade.
            They have more than just ice cream though, they also have a bunch of different snacks like the popular Mangonada, which is a mango smoothie with chamoy and tajin." 
            address="73 Shipping Pl, Dundalk, MD 21222" website="https://www.lamichoacanabaltimore.com/"/>
            <Business name="Savemart Supermarket" imgSrc={savemart} description="Savemart is a large Latino Owned Grocery Store. They have the largest selection of Latino Foods in the area.
            They have anything you could possibly need." 
            address="6500 Eastern Ave, Baltimore, MD 21224" website="https://www.save-mart-supermarket.com/"/>
            <Business name="Charo General Merchandise" imgSrc={charo} description="Charo is a really small Latino General Merchandise Store. There are a ton of Latino proeducts at a low price." 
            address="3414 Eastern Ave, Baltimore, MD 21224" website="https://www.baltimoredirections.com/s/charo-general-merchandise--3414-eastern-ave-baltimore-md-21224"/>
            <Business name="Jalapenos Market & Bakery" imgSrc={jalapeno} description="A newer grocery store in the area. Has a good variety of Latino goods. 
            Including produce, baked goods, hot food, and more." website="https://www.facebook.com/JalapenosMarketDundalk/"/>
            <Business name="Las Esperanzas Cafe 3" imgSrc={esperanzas} description="A small food spot located inside of Savemart. They have various locations in the DMV. 
            They specialize in Central American Cusine." website="https://www.lasesperanzas.com/"/>
        </div>
    );
}
export default Container;