const data = [
  [
    "./images/image-tanya.jpg",
    `“I’ve been interested in coding for a while but never taken the jump, until now. 
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
export default new Promise((resolve) => {
  setTimeout(() => resolve(data));
});
