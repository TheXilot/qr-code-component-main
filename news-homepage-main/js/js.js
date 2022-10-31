function hide() {
  let a = document.getElementById("menu");
  a.classList.add("hidden");
}
function show() {
  let a = document.getElementById("menu");
  a.classList.remove("hidden");
  a.classList.add("flex");
}
function toggle(e) {
  let last = document.getElementsByClassName("expand");
  if (last.length) {
    if (last[0] !== e) last[0].classList.remove("expand");
  }
  let a = e.classList.contains("expand");
  if (!a) {
    e.classList.add("expand");
  } else {
    e.classList.remove("expand");
  }
}
