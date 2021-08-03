import React, { Component } from 'react';
import IngredientItem from './IngredientItem.js';
import ingredients from './ingredients.js';
class IngredientsList extends Component {
    state = {  }
    render() { 
        return ( 
            <section className='ingredient-panel'>
                <div className='ingredient-list'>
                    {ingredients.map(item => {
                        return <IngredientItem key={item.id} amount={item.amount} item={item.item} />
                    })}
                </div>
            </section>
         );
    }
}
 
export default IngredientsList;