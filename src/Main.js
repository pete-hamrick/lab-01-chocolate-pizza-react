import React, { Component } from 'react';

import printIcon from './assets/print-icon.png'
import chocoPizza from './assets/choco-pizza.png'
import ingredients from './ingredients.js';
import IngredientsList from './IngredientsList.js';

class Main extends Component {
    render() { 
        return ( 
            <div className='container'>
                <h1>
                    Chocolate Pizza
                </h1>
                <h3>
                    Posted on 15 DEC 2013 / Desserts
                </h3>
                <img src={printIcon} alt='print-icon'></img>
                <img src={chocoPizza} alt='choco-pizza'></img>
                <p>
                    For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.
                </p>
                <p>
                    Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.
                </p>
                <p>
                    Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue the process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.
                </p>
                <div className='ingredient-panel'>
                    {ingredients.map(item => {
                        return <IngredientsList key={item.id} amount={item.amount} item={item.item} />
                    })}
                </div>
            </div>
        );
    }
}

 
export default Main;