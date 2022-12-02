import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <article class="restaurant-detail">
    <div class="restaurant-detail__thumbnail">
      <img class="lazyload restaurant-detail__thumbnail" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Poster Restoran ${restaurant.name}">
    </div>
    <div class="restaurant-detail__content">
      <div id="like-button__container" class="like-button__container"></div>
      <h4 class="restaurant-detail__rating">⭐ ${restaurant.rating}</h4>
      <h3 class="restaurant-detail__name">${restaurant.name}</h3>
      <ul class="restaurant-detail__categories">${restaurant.categories.map((category) => `<li>${category.name}</li>`).join(' ')}</ul>
      <h4 class="restaurant-detail__address">${restaurant.address}, ${restaurant.city}</h4>
      <p class="restaurant-detail__description">${restaurant.description}</p>
      <div class="restaurant-detail__container-food-drink">
        <div class="restaurant-detail__foods">
          <p class="label__foods-drinks">Foods</p>
          <ul>${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join(' ')}</ul>
        </div>
        <div class="restaurant-detail__drinks">
          <p class="label__foods-drinks">Drinks</p>
          <ul>${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join(' ')}</ul>
        </div>  
      </div>
      <div class="restaurant-detail__container-customer-reviews" id="restaurant-detail__container-customer-reviews">
        <h4 class="restaurant-detail__label-customer-reviews">Customer Reviews</h4>
        <div class="restaurant-detail__reviews" id="restaurant-detail__reviews"></div>

        <div class="restaurant-detail__form">
          <form id="review-form" class="review-form">
            <input required type="text" name="name" placeholder="Name...">
            <textarea required placeholder="Honest review..." name="review" rows="4"></textarea>
            <input required type="hidden" name="id" value="${restaurant.id}">
            <button>Save Review</button>
          </form>
        </div>

      </div>
    </div>
  </article>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item">
    <div class="restaurant-item__tumbnail">
      <p class="restaurant-item__city">${restaurant.city}</p>
      <img class="lazyload restaurant-item__thumbnail" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Poster Restoran ${restaurant.name}">
    </div>
    <div class="restaurant-item__content">
      <p class="restaurant-item__rating">⭐ ${restaurant.rating}</p>
      <h3 class="restaurant-item__name"><a href="#/detail/${restaurant.id}" aria-label="Detail dari ${restaurant.name}">${restaurant.name}</a></h3>
      <p class="restaurant-item__description">${restaurant.description}</p>
    </div>
  </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    🤍
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    💗
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
