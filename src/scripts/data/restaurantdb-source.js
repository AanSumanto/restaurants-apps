/* eslint-disable no-else-return */
import API_ENDPOINT from '../global/api-endpoint';

class RestaurantDbSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJSON = await response.json();
    return responseJSON.result;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }

  static async searchRestaurant(keyword) {
    const response = await fetch(API_ENDPOINT.SEARCH_RESTAURANT(keyword));
    const responseJSON = await response.json();
    if (responseJSON.restaurants) {
      return Promise.resolve(responseJSON.restaurants);
    } else {
      return Promise.reject(new Error(`${keyword} Tidak Ketemu`));
    }
  }
}

export default RestaurantDbSource;