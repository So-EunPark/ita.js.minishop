"use strict";

function makeClothes(category, color, gender, size) {
  return {
    category,
    color,
    gender,
    size,
  };
}

let clothes0 = makeClothes("shirts", "blue", "female", "large");
let clothes1 = makeClothes("skirt", "pink", "female", "small");
let clothes2 = makeClothes("pants", "pink", "male", "medium");
let clothes3 = makeClothes("pants", "pink", "male", "small");
let clothes4 = makeClothes("skirt", "blue", "female", "medium");
let clothes5 = makeClothes("shirts", "yellow", "male", "medium");
let clothes6 = makeClothes("pants", "blue", "male", "large");
let clothes7 = makeClothes("pants", "yellow", "male", "large");
let clothes8 = makeClothes("skirt", "yellow", "female", "small");
let clothes9 = makeClothes("skirt", "blue", "female", "medium");
let clothes10 = makeClothes("pants", "yellow", "female", "small");
let clothes11 = makeClothes("shirts", "yellow", "male", "large");
let clothes12 = makeClothes("skirt", "yellow", "female", "medium");
let clothes13 = makeClothes("pants", "blue", "male", "medium");
let clothes14 = makeClothes("shirts", "pink", "female", "small");

let clothesArray = new Array();

clothesArray[0] = clothes0;
clothesArray[1] = clothes1;
clothesArray[2] = clothes2;
clothesArray[3] = clothes3;
clothesArray[4] = clothes4;
clothesArray[5] = clothes5;
clothesArray[6] = clothes6;
clothesArray[7] = clothes7;
clothesArray[8] = clothes8;
clothesArray[9] = clothes9;
clothesArray[10] = clothes10;
clothesArray[11] = clothes11;
clothesArray[12] = clothes12;
clothesArray[13] = clothes13;
clothesArray[14] = clothes14;

function addClothesList() {
  for (let array in clothesArray) {
    let list = document.querySelector(".list>ul");

    let clothesList = document.createElement("li");
    list.append(clothesList);

    let clothesDiv = document.createElement("div");
    clothesList.append(clothesDiv);

    let clothesImg = document.createElement("img");
    let clothesP = document.createElement("p");
    clothesDiv.append(clothesImg);
    clothesDiv.append(clothesP);

    clothesImg.classList.add(
      "clothes",
      clothesArray[array].category,
      clothesArray[array].color
    );

    clothesP.innerHTML =
      clothesArray[array].gender + ", " + clothesArray[array].size + " size";

    if (clothesImg.classList.contains("shirts")) {
      if (clothesImg.classList.contains("blue")) {
        clothesImg.setAttribute("src", "imgs/blue_t.png");
      } else if (clothesImg.classList.contains("yellow")) {
        clothesImg.setAttribute("src", "imgs/yellow_t.png");
      } else {
        clothesImg.setAttribute("src", "imgs/pink_t.png");
      }
    }

    if (clothesImg.classList.contains("pants")) {
      if (clothesImg.classList.contains("blue")) {
        clothesImg.setAttribute("src", "imgs/blue_p.png");
      } else if (clothesImg.classList.contains("yellow")) {
        clothesImg.setAttribute("src", "imgs/yellow_p.png");
      } else {
        clothesImg.setAttribute("src", "imgs/pink_p.png");
      }
    }

    if (clothesImg.classList.contains("skirt")) {
      if (clothesImg.classList.contains("blue")) {
        clothesImg.setAttribute("src", "imgs/blue_s.png");
      } else if (clothesImg.classList.contains("yellow")) {
        clothesImg.setAttribute("src", "imgs/yellow_s.png");
      } else {
        clothesImg.setAttribute("src", "imgs/pink_s.png");
      }
    }
  }
}
addClothesList();

let nav = document.querySelector(".nav");
let list = document.querySelector(".list");

function clearAll() {
  for (let i = 0; i < list.querySelectorAll("li").length; i++) {
    list.querySelectorAll("li")[i].style.display = "none";
  }
}

class Nav {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this); // (*)
  }

  shirts() {
    for (let i = 0; i < list.querySelectorAll(".shirts").length; i++) {
      list.querySelectorAll(".shirts")[i].parentNode.parentNode.style.display =
        "block";
    }
  }

  pants() {
    for (let i = 0; i < list.querySelectorAll(".pants").length; i++) {
      list.querySelectorAll(".pants")[i].parentNode.parentNode.style.display =
        "block";
    }
  }

  skirt() {
    for (let i = 0; i < list.querySelectorAll(".skirt").length; i++) {
      list.querySelectorAll(".skirt")[i].parentNode.parentNode.style.display =
        "block";
    }
  }
  blue() {
    for (let i = 0; i < list.querySelectorAll(".blue").length; i++) {
      list.querySelectorAll(".blue")[i].parentNode.parentNode.style.display =
        "block";
    }
  }
  yellow() {
    for (let i = 0; i < list.querySelectorAll(".yellow").length; i++) {
      list.querySelectorAll(".yellow")[i].parentNode.parentNode.style.display =
        "block";
    }
  }

  pink() {
    for (let i = 0; i < list.querySelectorAll(".pink").length; i++) {
      list.querySelectorAll(".pink")[i].parentNode.parentNode.style.display =
        "block";
    }
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      clearAll();
      this[action]();
    }
  }
}

let main = document.querySelector(".shop");
main.addEventListener("click", () => {
  for (let i = 0; i < list.querySelectorAll("li").length; i++) {
    list.querySelectorAll("li")[i].style.display = "block";
  }
});

new Nav(nav);
