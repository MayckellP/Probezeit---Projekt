var emoji = document.getElementById("emoji"); //?       -- <icon (Bootstrap)>
var text = document.getElementById("text-answer"); //?  -- <p (Text)>

//! ---------------------- GOOD ANSWER
feedbackGood = () => {
  //* ----------------------EMOJI-ATRIBUTES (COLOR / CLASSNAME)
  emoji.style.color = "green";
  emoji.className = "bi bi-emoji-heart-eyes";

  //* ----------------------TEXT-ATRIBUTES (COLOR / CONTENT)
  text.textContent = "Thank you very much, that makes me happy!";
  text.style.color = "green";
};

//! ---------------------- BAD ANSWER
feedbackBad = () => {
  //* ----------------------EMOJI-ATRIBUTES (COLOR / CLASSNAME)
  emoji.style.color = "red";
  emoji.className = "bi bi-emoji-dizzy";

  //* ----------------------TEXT-ATRIBUTES (COLOR / CONTENT)
  text.textContent = "Oh no, I'm sorry to hear taht!";
  text.style.color = "red";
};
