const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty liked restaurant', ({ I }) => {
  I.seeElement('.favorite__label');
  I.see('you do not have a favorite restaurant', '.loading');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('you do not have a favorite restaurant', '.loading');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item__name a', 10);
  I.seeElement('.restaurant-item__name a');

  const firstRestaurant = locate('.restaurant-item__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__name a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('Unliking restaurant', ({ I }) => {
  I.see('you do not have a favorite restaurant', '.loading');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item__name a', 10);
  I.seeElement('.restaurant-item__name a');

  I.click(locate('.restaurant-item__name a').first());
  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.restaurant-item a');
  I.click('.restaurant-item__name a');

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.favorite__label');
  I.see('you do not have a favorite restaurant', '.loading');
});
