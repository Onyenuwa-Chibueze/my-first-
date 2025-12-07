const searchBtn = document.getElementById('search-btn')
const mealList = document.getElementById('meal')
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn')

searchBtn.addEventListener('click', getMealList)
mealList.addEventListener('click', getMealRecipe)
recipeCloseBtn.addEventListener('click', () =>{
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});


async function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();

    try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + searchInputTxt);
        const data = await res.json();

        let html = "";

        if (data.meals) {
            data.meals.forEach(meal => {
                html += `
                <div class="meal-item" data-id="${meal.idMeal}">
                    <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="food">
                    </div>
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" class="recipe-btn">Get Recipe</a>
                    </div>
                </div>`;
            });
            mealList.classList.remove('output');
        } else {
            html = "<p>No meals found. Try another ingredient.</p>";
            mealList.classList.add('output');
        }

        mealList.innerHTML = html;

    } catch (error) {
        mealList.innerHTML = "<p>Error fetching data. Check your internet.</p>";
        console.error(error);
    }
}

async function getMealRecipe(e) {
    e.preventDefault();

    if (e.target.classList.contains("recipe-btn")) {
        let mealItem = e.target.parentElement.parentElement;

        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`);
            const data = await res.json();

            mealRecipeModal(data.meals);
        } catch (error) {
            console.error("Error fetching recipe:", error);
        }
    }
}

function mealRecipeModal(meal) {
    meal = meal[0];

    let html = `
        <h2 class="recipe-title">${meal.strMeal}</h2>
        <p class="recipe-category">${meal.strCategory}</p>
        <div class="recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class="recipe-meal-img">
            <img src="${meal.strMealThumb}" 
                 alt="" 
                 style="width: 100px; height: 100px; border-radius: 50%;">
        </div>
        <div class="recipe-video">
            <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
        </div>
    `;

    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add("showRecipe");
}
