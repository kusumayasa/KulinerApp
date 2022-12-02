import Search from '../views/pages/search';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/search/:id': Search,
  '/favorite': Favorite,
};

export default routes;
