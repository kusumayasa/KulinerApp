import UrlParser from '../../routes/url-parser';
import TheKulinerAppSource from '../../data/thekulinerapp-source';
import ReviewForm from '../../utils/review-form';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import '../../components/customer-review';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="detail__container" class="detail__container">
        <p class="loading">loading...</p>
      </div>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#detail__container');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await TheKulinerAppSource.detailRestaurant(url.id);
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const customerReviewsContainer = document.querySelector('#restaurant-detail__reviews');
    restaurant.customerReviews.map((ulasan) => {
      const customerReview = document.createElement('customer-review');
      customerReview.ulasan = ulasan;
      return customerReviewsContainer.appendChild(customerReview);
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#like-button__container'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });

    await ReviewForm.init({
      form: document.getElementById('review-form'),
    });
  },
};

export default Detail;
