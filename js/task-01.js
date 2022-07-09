const listCountRef = document.querySelector("#categories");
console.log(`Number of categories: ${listCountRef.children.length}`);

const itemsRef = listCountRef.querySelectorAll("li.item");

itemsRef.forEach((li) => {
  console.log(
    `Category: ${li.querySelector("h2").firstChild.textContent}\nElements: ${
      li.querySelectorAll("li").length
    }`
  );
});
sole.log(categoriesArray);
