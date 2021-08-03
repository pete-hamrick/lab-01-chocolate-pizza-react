import React, { Component } from 'react';

class IngredientItem extends Component {
    state = {  }
    render() { 
        return ( 
            <label>
                <input type='checkbox'></input> 
                {this.props.amount} {this.props.item}
            </label>
         );
    }
}
 
export default IngredientItem;