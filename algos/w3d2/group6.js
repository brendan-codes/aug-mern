/*
James/Hyunsoo/Bryan/Chris
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.

  Input:
    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)
  Output:
    int (max servings)

  Side note (possible extra challenge version): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the available ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

// Example Input
const recipe = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    "spicy": 5,
    "gourmet memes": 4200,
};

const available = {
    "organic fat": 990,
    "live squid": 10,
    "birds nest": 10,
    "fried flesh": 10,
    "spicy": 50,
    "gourmet memes": 42000,
    "sugar": 9001,
    "spice": 5,
    "everything nice": 1,
};

// Output: 1 because only 1 live squid is available
// Output: 10 IF we had 10 live squids because then we have 10x of every ingredient
// Output: 0 IF we had 0 live squids or live squids key didn't exist in 'available'

function getMaxServings(recipe, ingredients) {

}

function getMaxServings(recipe, available) {
    let haveIngredients = {};
    var minMake = [];
    for (const [key, val] of Object.entries(recipe)) {
        console.log(`${key}, ${val}`);
        if (!available.hasOwnProperty(key) ||
            available[key][val] < recipe[key][val]
        ) {
            return "We don't have the stuff.";
        } else {
            haveIngredients[key] = available[key] / val;
            console.log(haveIngredients);
            // console.log(`we need ${val} of ${key}, we have ${available[key]}.`);
        }
    }
}

getMaxServings(recipe, available);

function getMaxServings(recipe, available) {
    var minMake = [];

    for (const [key, val] of Object.entries(recipe)) {
        // console.log(`${key}, ${val}`)
        if (!available.hasOwnProperty(key)) {
            return "We don't have the stuff.";
        } else {

            // console.log(`we need ${val} of ${key}, we have ${available[key]}.`)
            // console.log(available[key] / val)
            minMake.push(available[key] / val);
        }
    }
    let min = minMake[0];
    for (var i = 0; i < minMake.length; i++) {
        if (minMake[i] < min) {
            min = minMake[i];
        }
        if (min == 0) {
            return "We cant even make that. Your broke ass needs to get to the store";
        }
    }
    return "We can only make " + min + " of that dish.";
}