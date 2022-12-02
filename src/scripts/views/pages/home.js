import TheKulinerAppSource from '../../data/thekulinerapp-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="hero" role="img" aria-label="jumbotron" title="jumbotron">
        <div class="hero__inner">
          <h2 class="hero__title">KulinerApp Catalog</h2>
          <p class="hero__tagline">Come Hungry, Leave Happy</p>
        </div>
      </div>

      <section class="explore">
        <h2 class="explore__label">Explore Restaurant</h2>
        <div class="restaurants">
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        <div class="skeleton-ui"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const { message, restaurants } = await TheKulinerAppSource.restaurants();
    const restaurantsElement = document.querySelector('.restaurants');

    if (message === 'success') {
      restaurantsElement.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsElement.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantsElement.innerHTML = `<p>${message}</p>`;
    }
  },
};

export default Home;
