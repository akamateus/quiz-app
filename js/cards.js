// script to toggle bookmarks state

let bookmarks = document.querySelectorAll(".bookmark");

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("active-bookmark");
  });
});

// answer blocks appear on button click

function buttonListener() {
  let buttons = document.querySelectorAll(".answer-button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("active-answer");
      if (button.innerText === "Show Answer") {
        button.innerText = "Hide Answer";
      } else {
        button.innerText = "Show Answer";
      }
    });
  });
}
buttonListener();

// hidden answer for buttons

const showAnswer = document.querySelectorAll(".hidden-answer");
const navBtn = document.querySelectorAll(".answer-button");

navBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    showAnswer[index].classList.toggle("show-answer");
  });
});
