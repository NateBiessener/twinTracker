document.addEventListener("DOMContentLoaded", function(event) {
  //takes a position(int) and an array, gives either the next position or 0 if the end of the array has been reached
  let getNextPosition = (currentPosition, array) => {
    currentPosition++;
    return currentPosition < array.length ? currentPosition : 0;
  };

  let addClassToElement = (element, className) => {
    if (element.classList)
      element.classList.add(className);
    else
      element.className += ' ' + className;
  };

  //params are the element object that content will be added before, and an HTML string of content
  let addElementBefore = (targetElement, newElement) => {
    // add the newly created element and its content into the DOM
    targetElement.parentNode.insertBefore(newElement, targetElement);
  };

  let createLog = (timeStamp) => {
    let newLog = document.createElement("div");
    newLog.appendChild(document.createTextNode(timeStamp));

    //!!!!!!May leave this out in favor of deleting and creating new logs
    // let editButton = document.createElement("button");
    // addClassToElement(editButton, 'editButton');
    // editButton.addEventListener("click", editButtonHandler);
    // editButton.innerHTML = "&#x270E;";
    // newLog.appendChild(editButton);

    let deleteButton = document.createElement("button");
    addClassToElement(deleteButton, 'deleteButton');
    deleteButton.addEventListener("click", deleteButtonHandler);
    deleteButton.innerHTML = "&#x2613;";
    newLog.appendChild(deleteButton);

    return newLog;
  };

  let editButtonHandler = (event) => {
    console.log('clicked edit');
  };

  let deleteButtonHandler = (event) => {
    let parent = event.srcElement.parentNode;
    parent.parentNode.removeChild(parent);
  };

  //!!!!!!!TODO - pull children from server (likely stored per user)
  let children = ['Thing1', 'Thing2'];
  let currentChild;
  let turnsButton = document.getElementById('turnsButton');
  turnsButton.addEventListener("click", function(event){
    currentChild = getNextPosition(currentChild, children);
    this.textContent = children[currentChild];
  });
  turnsButton.dispatchEvent(new Event('click'));

  let pooButton = document.getElementById('pooButton');
  pooButton.addEventListener("click", function(event){
    let currentTime = document.getElementById('pooLogIn').value;
    //add a new div above the form
    addElementBefore(document.getElementById('pooLogIn'), createLog(currentTime));
  });

  let foodButton = document.getElementById('foodButton');
  foodButton.addEventListener("click", function(event){
    let currentTime = document.getElementById('foodLogIn').value;
    //add a new div above the form
    addElementBefore(document.getElementById('foodLogIn'), createLog(currentTime));
  });

});
