document.addEventListener("DOMContentLoaded", function(event) {
  var children = ['Thing1', 'Thing2'];
  var currentChild;
  var button = document.getElementById('turnsButton');
  button.addEventListener("click", function(event){
    currentChild = getNextPosition(currentChild, children);
    this.textContent = children[currentChild];
  });
  button.dispatchEvent(new Event('click'));
});

//takes a position(int) and an array, gives either the next position or 0 if the end of the array has been reached
function getNextPosition(currentPosition, array){
  currentPosition++;
  return currentPosition < array.length ? currentPosition : 0;
}
