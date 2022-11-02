// return [currentElement, next||previous]
//params next , prev
//
function getElements(direction) {
  let elements = document.getElementsByClassName("element");
  let size = elements.length;
  let current = document.getElementsByClassName("element show")[0];
  let list = Array.prototype.slice.call(elements);
  let currentIndex = list.indexOf(current);
  let nextElement = null;
  if (direction === "next") {
    if (currentIndex + 1 >= size) currentIndex = -1;
    nextElement = list[currentIndex + 1];
  } else {
    if (currentIndex - 1 < 0) currentIndex = size;
    nextElement = list[currentIndex - 1];
  }
  return { current, nextElement };
}

function hide(element) {
  element.classList.add("opacity-0");
  element.classList.remove("opacity-1");
  element.classList.remove("show");
}
function show(element) {
  element.classList.add("show");
  element.classList.remove("opacity-0");
  element.classList.add("opacity-1");
}

function next() {
  let { current, nextElement } = getElements("next");
  hide(current);
  show(nextElement);
}
function prev() {
  let { current, nextElement } = getElements("prev");
  hide(current);
  show(nextElement);
}
