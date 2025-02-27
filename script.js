console.log("Test")

const categoryFilter = document.getElementById('category');
const countryFilter = document.getElementById('country');
const decadeFilter = document.getElementById('decade');
const articles = document.querySelectorAll('#pieces article');

categoryFilter.addEventListener('change', () => {
    const selectedCategory = categoryFilter.value;

    for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        const articleCategory = article.getAttribute('data-category');

        if (selectedCategory === 'all' || selectedCategory === articleCategory) {
            article.style.display = 'block';  
        } else {
            article.style.display = 'none';
        }
    }
});