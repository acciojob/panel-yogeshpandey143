//your JS code here. If required.
//your JS code here. If required.
// get all panel elements
const panels = document.querySelectorAll('.panel');

// add click event listener to each panel
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

// remove active class from all panels
function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}

// set the first panel as active by default
panels[0].classList.add('active');