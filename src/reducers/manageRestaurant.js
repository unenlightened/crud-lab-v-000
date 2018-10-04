import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      console.log('adding restuaurant: ', action.restaurantText)
      const restaurant = {
        id: cuid(),
        text: action.restaurantText
      }
      return { restaurants: state.restaurants.concat(restaurant) }

    default:
      return state;
  }
}
