import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  // const restaurants = this.props.restaurants.map(restaurant => (<Restaurant restaurant={restaurant} />))

  debugger
  console.log('restaurants: ', this.props.restaurants)
  // const restaurants = this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} {...restaurant}/>)

  render() {
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
