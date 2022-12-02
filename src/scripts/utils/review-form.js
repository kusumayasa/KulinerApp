import '../components/customer-review';
import TheKulinerAppSource from '../data/thekulinerapp-source';

const ReviewForm = {
  async init({ form }) {
    await form?.addEventListener('submit', async (event) => {
      event.preventDefault();
      let [name, review, id] = event.target;
      name = name.value;
      review = review.value;
      id = id.value;

      const { message, customerReviews } = await TheKulinerAppSource.addRestaurantReview({
        name, review, id,
      });
      if (message === 'success') {
        this._reviewrendering(customerReviews);
      }
    });
  },
  async _reviewrendering(customerReviews) {
    const customerReviewsContainer = document.querySelector('#restaurant-detail__reviews');
    customerReviewsContainer.innerHTML = '';
    customerReviews.map((ulasan) => {
      const customerReviewElement = document.createElement('customer-review');
      customerReviewElement.ulasan = ulasan;
      return customerReviewsContainer.appendChild(customerReviewElement);
    });
  },
};

export default ReviewForm;
