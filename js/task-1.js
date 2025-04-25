const categoryNumber = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoryNumber.length}`);

categoryNumber.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const numberOfElements = category.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${numberOfElements}`);
});
