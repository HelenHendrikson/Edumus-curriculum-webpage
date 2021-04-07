const initialDisplayCardsCount = 3;

$(document).ready(function () {
  let cards = $(".cards .card").hide();
  let filters = $(".btn-course-filter");
  let currentCard = null;

  $(".btn-course-filter")
    .on("click", function () {
      let $this = $(this);
      $this.toggleClass("selected");
      
      // deselect all filters except the toggle one
      filters.not($this).removeClass("selected");
      
      // change toggle button state
      const isSelected = $this.hasClass('selected');
      //$this.css('background-color', isSelected ? 'red': '#fff');
      
      if(isSelected) {
        currentCard = cards.filter(`.${this.id}`).hide(); // get selected subject cards and hide it first
        currentCard.slice(0, initialDisplayCardsCount).show(); // only show the first three cards
        cards.not(currentCard).hide(); // hide all others subjects cards
      } else {
        currentCard = cards;
        currentCard.hide();
        currentCard.slice(0, initialDisplayCardsCount).show();
      }
    })
    .filter("#arts") // execute while document is ready
    .click();

  $(".load-more").click(function () {
    currentCard.filter(":hidden").slice(0, 6).slideDown();
  });
});