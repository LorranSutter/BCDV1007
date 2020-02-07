// This is exercise #3 from
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events

  let buttonBar = document.querySelector('.button-bar');
  let section = document.querySelector('section');

  // Add your code here

  function changeColor(e) {
    color = e.target.dataset.color;
    section.style.backgroundColor = color;
  }

  buttonBar.addEventListener("click", changeColor);

  // Hint: you need to use the data-color attribute on the buttons to get the
  // color. You can access the data attribute of an element using
  // element.dataset.color, if the data attribute is named "color".
  // Take a look at https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
  // for more info about data attributes.

