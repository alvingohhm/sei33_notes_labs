"use strict";
const submitBtn = document.getElementById("submit");
const inputBx = document.getElementById("input-box");
const toDoList = document.getElementById("to-do-list");
const completedList = document.getElementById("completed");
const toDoArray = [];
const completedArray = [];

const generateID = () => {
  return Math.floor(Math.random() * Date.now());
};

const addLocalStorage = (whichList, id, toDoText) => {
  let localData = [];
  if (localStorage.getItem(whichList) !== null) {
    localData = JSON.parse(localStorage.getItem(whichList));
    localData.push({ id, toDoText });
  } else {
    localData.push({ id, toDoText });
  }
  localStorage.setItem(whichList, JSON.stringify(localData));
};

const rmLocalStorageItem = (whichList, index) => {
  let localData = [];
  if (localStorage.getItem(whichList) !== null) {
    localData = JSON.parse(localStorage.getItem(whichList));
    const toDoObj = localData.splice(index, 1)[0];
    localStorage.setItem(whichList, JSON.stringify(localData));
  }
};

const createToDOItem = (id, toDo) => {
  const toDoContainer = document.createElement("div");
  toDoContainer.classList.add("to-do-item");
  toDoContainer.setAttribute("data-id", id);
  toDoContainer.innerHTML = `<p>${toDo}</p><button>COMPLETED</button>`;
  return toDoContainer;
};

const addToDoToArray = (toDoItem) => {
  const toDoObj = {
    id: toDoItem.dataset.id,
    toDoItem: toDoItem,
  };
  toDoArray.push(toDoObj);
  const toDoText = toDoItem.querySelector("p").innerText;
  addLocalStorage("toDoArray", toDoItem.dataset.id, toDoText);
};

const addDoneToDoToArray = (toDoObj) => {
  const toDoItem = toDoObj.toDoItem;
  const btn = toDoItem.querySelector("button");
  btn.innerText = "REMOVE";
  const modifyToDoObj = {
    id: toDoObj.id,
    toDoItem: toDoItem,
  };
  completedArray.push(modifyToDoObj);
  const toDoText = toDoItem.querySelector("p").innerText;
  addLocalStorage("completedArray", toDoObj.id, toDoText);
};

const rmToDoFromArray = (toDoItemID) => {
  let targetIndex = null;
  let toDoObj = {};
  for (let i = 0; i < toDoArray.length; i++) {
    if (toDoArray[i].id === toDoItemID) {
      targetIndex = i;
      break;
    }
  }
  if (targetIndex !== null) {
    toDoObj = toDoArray.splice(targetIndex, 1)[0];
    rmLocalStorageItem("toDoArray", targetIndex);
  }
  return toDoObj;
};

const rmDoneToDoFromArray = (toDoItemID) => {
  let targetIndex = null;
  let toDoObj = {};
  for (let i = 0; i < completedArray.length; i++) {
    if (completedArray[i].id === toDoItemID) {
      targetIndex = i;
      break;
    }
  }
  if (targetIndex !== null) {
    toDoObj = completedArray.splice(targetIndex, 1)[0];
    rmLocalStorageItem("completedArray", targetIndex);
  }
  return toDoObj;
};

const renderToDoItem = (renderAll = false) => {
  if (toDoArray.length > 0) {
    if (renderAll) {
      toDoArray.map((item) => {
        toDoList.append(item.toDoItem);
      });
    } else {
      const toDoObj = toDoArray[toDoArray.length - 1];
      toDoList.append(toDoObj.toDoItem);
    }
  }
};

const renderDoneToDoItem = (renderAll = false) => {
  if (completedArray.length > 0) {
    if (renderAll) {
      completedArray.map((item) => {
        completedList.append(item.toDoItem);
      });
    } else {
      const toDoObj = completedArray[completedArray.length - 1];
      completedList.append(toDoObj.toDoItem);
    }
  }
};

const retrieveLocalStorage = (whichList) => {
  let localData = [];
  if (localStorage.getItem(whichList) !== null) {
    localData = JSON.parse(localStorage.getItem(whichList));
    localStorage.removeItem(whichList);
  }
  if (localData.length > 0) {
    localData.map((item) => {
      let toDoItem = createToDOItem(item.id, item.toDoText);
      switch (whichList) {
        case "toDoArray":
          addToDoToArray(toDoItem);
          renderToDoItem(true);
          break;
        case "completedArray":
          const toDoObj = {
            id: toDoItem.dataset.id,
            toDoItem: toDoItem,
          };
          addDoneToDoToArray(toDoObj);
          renderDoneToDoItem(true);
          break;
        default:
          break;
      }
    });
  }
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let toDo = inputBx.value.trim();
  if (toDo !== "") {
    const uniqueID = generateID();
    const toDoItem = createToDOItem(uniqueID, toDo);
    addToDoToArray(toDoItem);
    renderToDoItem(false);
    inputBx.value = "";
    inputBx.focus();
  } else {
    alert("You are adding nothing. Input box cannot be empty.");
  }
});

toDoList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const toDoItem = e.target.parentNode;
    const toDoItemID = e.target.parentNode.dataset.id;
    toDoItem.remove();
    const toDoObj = rmToDoFromArray(toDoItemID);
    addDoneToDoToArray(toDoObj);
    renderDoneToDoItem(false);
  }
});

completedList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const toDoItem = e.target.parentNode;
    const toDoItemID = e.target.parentNode.dataset.id;
    toDoItem.remove();
    const toDoObj = rmDoneToDoFromArray(toDoItemID);
    console.log("Remove Item:", toDoObj.toDoItem);
  }
});

window.onload = function () {
  document.querySelectorAll(".to-do-item").forEach((item) => item.remove());
  retrieveLocalStorage("toDoArray");
  retrieveLocalStorage("completedArray");
};
