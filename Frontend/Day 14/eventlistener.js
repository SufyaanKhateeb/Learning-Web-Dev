function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

const background = document.querySelector(".container");

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  background.style.backgroundImage = "url('https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif')";
}

function dropclear(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  background.style.backgroundImage = "none";
}
