// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і 
// виведе в консоль текст заголовку елемента(тегу < h2 >) і кількість елементів в
// категорії(усіх < li >, вкладених в нього).

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
