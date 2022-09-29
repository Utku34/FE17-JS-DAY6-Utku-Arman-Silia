

var sandwiches = `{ "sandwich": "hamburger",
                    "calories": "260" }`;

var fries = `{ "fries_size": "Large French Fries", 
               "calories": "570" }`;

let main_meal = JSON.parse(sandwiches);
let side_meal = JSON.parse(fries)


document.getElementById("demo").innerHTML = `My favorite sandwich is a ${main_meal.sandwich} which has approximately ${main_meal.calories} calories, along with it I enjoy eating ${side_meal.fries_size} which have about ${side_meal.calories} calories.`