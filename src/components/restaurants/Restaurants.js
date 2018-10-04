import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  const restaurants = this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} />)

  render() {
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
