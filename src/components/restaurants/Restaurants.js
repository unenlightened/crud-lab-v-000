import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  const restaurants = this.props.restaurants.map()

  render() {
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
