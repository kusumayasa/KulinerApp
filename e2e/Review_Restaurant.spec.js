Feature('Reviewing Restaurant');

Scenario('Reviewing one restaurant', async ({ I }) => {
  const name = 'Alex';
  const review = 'I highly recommend this place';

  I.amOnPage('/');

  I.waitForElement('.restaurant-item__name a', 10);
  I.seeElement('.restaurant-item__name a');

  const firstRestaurant = locate('.restaurant-item__name a').first();
  I.click(firstRestaurant);

  I.waitForElement('.restaurant-detail__form', 10);
  I.fillField('[name="name"]', name);
  I.fillField('[name="review"]', review);
  I.click(locate('.restaurant-detail__form button'));

  I.waitForElement('.ulasan__name', 10);
  I.see(name, '.ulasan__name');
  I.see(review, '.ulasan__review');
});
