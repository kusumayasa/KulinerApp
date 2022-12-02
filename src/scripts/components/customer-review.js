class CustomerReview extends HTMLElement {
  set ulasan(ulasan) {
    this.render(ulasan);
  }

  render(ulasan) {
    this.innerHTML = `
      <div class="ulasan__container" id="ulasan__container" >
          <p class="ulasan__name">${ulasan.name}</p>
          <p class="ulasan__date">${ulasan.date}</p>
          <p class="ulasan__review">${ulasan.review}</p>
      </div>
    `;
  }
}

customElements.define('customer-review', CustomerReview);
