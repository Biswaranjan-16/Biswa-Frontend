document.addEventListener('DOMContentLoaded', function() {
    const recipeLinks = document.querySelectorAll('#recipe-list a');
    const recipes = document.querySelectorAll('.recipe');

    recipeLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const recipeId = this.getAttribute('href').substring(1);
            recipes.forEach(function(recipe) {
                recipe.style.display = 'none';
            });
            document.getElementById(recipeId).style.display = 'block';
        });
    });
});
