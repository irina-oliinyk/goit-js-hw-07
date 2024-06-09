const listCategori = document.querySelectorAll('#categories');
const liCategories = document.querySelectorAll('.item');

console.log(`Number of categoris: ${liCategories.length}`);

liCategories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul > li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemsCount}`);
});
