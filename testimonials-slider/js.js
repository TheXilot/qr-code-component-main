// return [currentElement, next||previous]
//params next , prev
//
$(document).ready(() => {
  $(".images").addClass(`bg-[url('${data[0][0]}')]`);
});

let data = [
  [
    "./images/image-tanya.jpg",
    `“ I’ve been interested in coding for a while but never taken the jump, until now. 
  I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
  excited about the future. ”`,
    "Tanya Sinclair",
    "UX Engineer",
  ],
  [
    "./images/image-john.jpg",
    `“ If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer. ”`,
    "John Tarkpor",
    "Junior Front-end Developer",
  ],
];
let i = 0;
function next() {
  $(".images").removeClass(`bg-[url('${data[i][0]}')]`);
  i = i + 1;
  if (i >= data.length) i = 0;
  $(".images").addClass(`bg-[url('${data[i][0]}')]`);
  $(".text-p").text(data[i][1]);
  $(".text-author").text(data[i][2]);
  $(".text-job").text(data[i][3]);
}
function prev() {
  $(".images").removeClass(`bg-[url('${data[i][0]}')]`);
  i = i - 1;
  if (i < 0) i = data.length - 1;
  $(".images").addClass(`bg-[url('${data[i][0]}')]`);
  $(".text-p").text(data[i][1]);
  $(".text-author").text(data[i][2]);
  $(".text-job").text(data[i][3]);
}
