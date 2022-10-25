function hide() {
  let a = document.getElementById("wrapper");
  let b = a.classList.contains("hidden");
  if (!b) {
    a.classList.add("hidden");
  } else {
    a.classList.remove("hidden");
  }
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
