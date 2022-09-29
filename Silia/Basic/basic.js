let sandwich = JSON.parse(sandwiches);
console.log(sandwich);
let frie = JSON.parse(fries);

//Print the JSON sentence

document.getElementById("result").innerHTML = `My favorite sandwich is a ${sandwich.sandwich} which has approximately ${sandwich.calories} calories, along with it I enjoy eating Large ${frie.fries_size} which have about ${frie.calories} calories.`