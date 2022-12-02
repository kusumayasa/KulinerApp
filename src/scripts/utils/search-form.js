const SearchForm = {
  init({ isian }) {
    isian?.addEventListener('submit', (e) => {
      e.preventDefault();
      window.location.href = `#/search/${e.target[0].value.toLowerCase()}`;
    });
  },
};

export default SearchForm;
