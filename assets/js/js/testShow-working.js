var hideItem, oldElement, toggleItem;

oldElement = null;

toggleItem = function(currID) {
  var currElement;
  currElement = document.getElementById(currID);
  if (currElement.style.display === 'block') {
    currElement.style.display = 'none';
  } else {


  if (oldElement) {
    oldElement.style.display = 'none';
  }
  currElement.style.display = 'block';
  oldElement = currElement;
  }
    return false;
};

hideItem = function(currEle) {
  var elements, i, _i, _len;
  elements = document.getElementsByTagName(currEle);
  for (_i = 0, _len = elements.length; _i < _len; _i++) {
    i = elements[_i];
    if (i.className === 'hidden') {
      i.style.display = 'none';
    }
  }
  return false;
};
