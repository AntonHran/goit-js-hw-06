const listEl = document.querySelector("#categories");
//console.log(listEl.children);
const list = document.querySelectorAll(".item");

console.log(`Number of categories: ${listEl.children.length}`);
const res = list.forEach((el) => {
  console.log(el.firstElementChild.textContent);
  console.log(el.lastElementChild.childElementCount);
  //console.log(el.lastElementChild.children.length);
});
