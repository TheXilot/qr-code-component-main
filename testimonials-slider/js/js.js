import mydata from "./data.js";

let data = await mydata;
$(".loading").fadeOut();
let i = 0;

$(document).ready(() => {
  $(".images").addClass(`bg-[url('${data[0][0]}')]`);
  $(".slider-text").first().attr("id", 0);
  //load element
  data.forEach((el, index) => {
    if (index > 0) {
      let $copy = $(".slider-text").first().clone();
      $copy.find(".text-p").text(el[1]);
      $copy.find(".text-author").text(el[2]);
      $copy.find(".text-job").text(el[3]);
      $copy.attr("id", index);
      $copy.toggleClass("opacity-0");
      $copy.appendTo("main");
    } else {
      $(".slider-text").first().find(".text-p").text(el[1]);
      $(".slider-text").first().find(".text-author").text(el[2]);
      $(".slider-text").first().find(".text-job").text(el[3]);
    }
  });
});

function next() {
  $(".images").removeClass(`bg-[url('${data[i][0]}')]`);
  i = i + 1;
  if (i >= data.length) i = 0;
  $(".images").addClass(`bg-[url('${data[i][0]}')]`);
  $(`.slider-text`).not(`#${i}`).toggleClass("opacity-0");
  $(`#${i}`).toggleClass("opacity-0");
}
function prev() {
  $(".images").removeClass(`bg-[url('${data[i][0]}')]`);
  i = i - 1;
  if (i < 0) i = data.length - 1;
  $(".images").addClass(`bg-[url('${data[i][0]}')]`);
  $(`.slider-text`).not(`#${i}`).toggleClass("opacity-0");
  $(`#${i}`).toggleClass("opacity-0");
}
document.querySelector(".next").addEventListener("click", next);
document.querySelector(".prev").addEventListener("click", prev);
