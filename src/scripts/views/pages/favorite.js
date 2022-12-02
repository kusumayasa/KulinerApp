import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <h2 class="favorite__label">Favorite Restaurant</h2>
      <div class="restaurants">
        <p class="loading">Loading...</p>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsElement = document.querySelector('.restaurants');
    const loading = document.querySelector('.loading');

    if (restaurants.length > 0) {
      restaurantsElement.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsElement.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      loading.innerText = 'you do not have a favorite restaurant';
    }
  },
};

export default Favorite;
