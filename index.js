/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // debugger
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

document.addEventListener("click", function(event){
  toggleColor(document.querySelector("h1#header"))
})


/***** Deliverable 2 *****/
document.addEventListener("submit", function(event){
  event.preventDefault();

  let playerNumber = document.getElementsByName("number")[0];
  let playerName = document.getElementsByName("name")[0];
  let playerNickName = document.getElementsByName("nickname")[0];
  let playerPhoto = document.getElementsByName("photo")[0];

  let newPlayer = {}

  newPlayer["number"] = playerNumber.value;
  newPlayer["name"] = playerName.value;
  newPlayer["nickname"] = playerNickName.value;
  newPlayer["photo"] = playerPhoto.value;
  newPlayer["likes"] = 1000;
  debugger;
  renderPlayer(newPlayer);
});

/***** Deliverable 3 *****/

playerContainer.addEventListener("click", function(event){
  // if(event.target.children)
  // debugger;
  let likes = event.target.parentNode.querySelector(".likes");
  likes.innerText = parseInt(likes.innerText) + 1 + " likes"
})