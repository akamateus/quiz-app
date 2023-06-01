console.clear();

const cardContainer = document.querySelector('[data-js="card-container"]');

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const questionInput = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const tagInput = document.getElementById("tag");

  const question = questionInput.value;
  const answer = answerInput.value;
  const tag = tagInput.value;
  createNewCard(question, answer, tag);
});

// generate all DOM for the form question

function createNewCard(question, answer, tag) {
  const card = document.createElement("section");
  card.classList.add("card");

  const questionElement = document.createElement("h3");
  questionElement.textContent = question;

  const answerElement = document.createElement("p");
  answerElement.textContent = answer;

  const tagElement = document.createElement("span");
  tagElement.textContent = tag;

  //insert the forms data as a text into the DOM elements;

  card.append(questionElement, answerElement, tagElement);
  cardContainer.append(card);
}

//  Help me, I`m getting crazy af

// counting the characters

const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");

questionInput.addEventListener("input", updateCount);
answerInput.addEventListener("input", updateCount);

function updateCount() {
  const questionCaracters = document.getElementById("question-count");
  const answerCaracters = document.getElementById("answer-count");

  questionCaracters.textContent = `${questionInput.value.length} /150`;
  answerCaracters.textContent = `${answerInput.value.length} /150`;
}
