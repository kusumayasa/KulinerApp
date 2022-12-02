import UrlParser from '../../routes/url-parser';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import TheKulinerAppSource from '../../data/thekulinerapp-source';

const Search = {
  async render() {
    return `
      <h2 class="favorite__label">Search Restaurant</h2>
      <div class="restaurants">
        <p class="loading">Loading...</p>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loading = document.querySelector('.loading');
    const restaurantContainer = document.querySelector('.restaurants');

    const { restaurants } = await TheKulinerAppSource.searchRestaurant(url.id);
    if (restaurants.length !== 0) {
      restaurantContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      loading.innerText = 'Restaurant not found';
    }
  },
};

export default Search;
