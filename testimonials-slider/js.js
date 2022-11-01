function next() {
  let elements = document.getElementsByClassName("element");
  let size = elements.length;
  let current = document.getElementsByClassName("element show")[0];
  let list = Array.prototype.slice.call(elements);
  let currentIndex = list.indexOf(current);
  if (currentIndex + 1 >= size) currentIndex = -1;
  let nextElement = list[currentIndex + 1];
  //cacher current
  current.classList.add("opacity-0");
  current.classList.remove("opacity-1");
  current.classList.remove("show");

  nextElement.classList.add("show");
  nextElement.classList.remove("opacity-0");
  nextElement.classList.add("opacity-1");
}
function prev() {
  let elements = document.getElementsByClassName("element");
  let size = elements.length;
  let current = document.getElementsByClassName("element show")[0];
  let list = Array.prototype.slice.call(elements);
  let currentIndex = list.indexOf(current);
  console.log(currentIndex);
  if (currentIndex - 1 < 0) currentIndex = size;
  let nextElement = list[currentIndex - 1];
  //cacher current
  current.classList.add("opacity-0");
  current.classList.remove("opacity-1");
  current.classList.remove("show");

  nextElement.classList.add("show");
  nextElement.classList.remove("opacity-0");
  nextElement.classList.add("opacity-1");
}
