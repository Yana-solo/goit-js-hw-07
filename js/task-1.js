const categoriesList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesList.length}`);
for (const category of categoriesList) {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
}
