




var wholeWheatBun = 10;


var ingredients = {
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20,
  Lettuce: 20,
};


 var state = {
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true,
  Lettuce: true,
};



function renderCheese() {

  let cheese = document.querySelector("#cheese");
  
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
 
  let tomatoes = document.querySelector("#tomato");
  
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }
}

function renderOnions() {
  
  let onion = document.querySelector("#onion");
  
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  
  let lettuce = document.querySelector("#lettuce");
  
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {



};



document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};



document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};



document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};



document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

function renderButtons() {
  if (state.Patty) document.querySelector(".btn-patty").classList.add("active");
  else document.querySelector(".btn-patty").classList.remove("active");
  if (state.Tomatoes)
    document.querySelector(".btn-tomatoes").classList.add("active");
  else document.querySelector(".btn-tomatoes").classList.remove("active");
  if (state.Cheese)
    document.querySelector(".btn-cheese").classList.add("active");
  else document.querySelector(".btn-cheese").classList.remove("active");
  if (state.Onions)
    document.querySelector(".btn-onions").classList.add("active");
  else document.querySelector(".btn-onions").classList.remove("active");
  if (state.Lettuce)
    document.querySelector(".btn-lettuce").classList.add("active");
  else document.querySelector(".btn-lettuce").classList.remove("active");
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state

function renderIngredientsBoard() {
  if (!state.Patty) document.getElementsByClassName("items")[0].innerHTML = " ";
  else document.getElementsByClassName("items")[0].innerHTML = "Patty";
  if (!state.Cheese)
    document.getElementsByClassName("items")[1].innerHTML = " ";
  else document.getElementsByClassName("items")[1].innerHTML = "Cheese";
  if (!state.Tomatoes)
    document.getElementsByClassName("items")[2].innerHTML = " ";
  else document.getElementsByClassName("items")[2].innerHTML = "Tomatoes";
  if (!state.Onions)
    document.getElementsByClassName("items")[3].innerHTML = " ";
  else document.getElementsByClassName("items")[3].innerHTML = "Onions";
  if (!state.Lettuce)
    document.getElementsByClassName("items")[4].innerHTML = " ";
  else document.getElementsByClassName("items")[4].innerHTML = "Lettuce";
}


function renderPrice() {
  var price = 20;
  if (state.Patty) price = ingredients.Patty + price;
  if (state.Cheese) price = ingredients.Cheese + price;
  if (state.Tomatoes) price += ingredients.Tomatoes;
  if (state.Onions) price += ingredients.Onions;
  if (state.Lettuce) price += ingredients.Lettuce;
  document.querySelector(".price-details").innerHTML = "INR " + price;
}