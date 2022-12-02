import DrawerInitiator from '../utils/drawer-initiator';
import SearchForm from '../utils/search-form';
import ReviewForm from '../utils/review-form';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, formSearch, drawer, content, formReview,
  }) {
    this._button = button;
    this._formSearch = formSearch;
    this._formReview = formReview;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
    ReviewForm.init({ form: this._formReview });
    SearchForm.init({ isian: this._formSearch });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  }
}

export default App;
