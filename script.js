"use strict";

let nav = document.querySelector(".nav");
let list = document.querySelector(".list");

function clearAll() {
  for (let i = 0; i < list.querySelectorAll("li").length; i++) {
    list.querySelectorAll("li")[i].style.display = "none";
  }
}

function getClothes() {
  let;
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
      console.log(action);
    }
  }
}

new Nav(nav);
