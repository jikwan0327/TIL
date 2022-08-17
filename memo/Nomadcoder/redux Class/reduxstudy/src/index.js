import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(action);
  return count;
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "hello" });
