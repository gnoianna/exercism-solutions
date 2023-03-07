// @ts-check

/**
 * Determines whether the lasagna is done.
 *
 * @param {number} remainingTimeInMinutes
 * @returns {string} the status of lasagna
 */
export function cookingStatus(remainingTimeInMinutes) {
  if (remainingTimeInMinutes === undefined) {
    return "You forgot to set the timer.";
  }
  return remainingTimeInMinutes === 0
    ? "Lasagna is done."
    : "Not done, please wait.";
}

/**
 * Estimate the lasagna's preparation time.
 *
 * @param {string[]} layers
 * @param {number} averageLayerPreparationTime
 * @returns {number} the preparation time
 */
export function preparationTime(layers, averageLayerPreparationTime = 2) {
  return layers.length * averageLayerPreparationTime;
}

/**
 * Estimate the lasagna's preparation time.
 *
 * @param {string[]} layers
 * @returns {Record<number, number>} the quantity of noodles and sauce
 */
export function quantities(layers) {
  let noodlesAndSauceQuantity = { noodles: 0, sauce: 0 };
  layers.forEach((quantity) => {
    if (quantity === "noodles") noodlesAndSauceQuantity.noodles += 50;
    else if (quantity === "sauce") noodlesAndSauceQuantity.sauce += 0.2;
  });
  return noodlesAndSauceQuantity;
}

/**
 * Modify recipe based on list of ingredients
 *
 * @param {string[]} friendsList
 * @param {string[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[myList.length - 1]);
}

/**
 * Calculate the amounts of ingredients for different number of portions
 *
 * @param {object} recipe
 * @param {number} numberOfPortions
 * @returns {object} modified recipe
 */
export function scaleRecipe(recipe, numberOfPortions) {
  const scaleFactor = numberOfPortions / 2;
  const newRecipe = { ...recipe };
  Object.keys(newRecipe).forEach((key) => {
    newRecipe[key] *= scaleFactor;
  });
  return newRecipe;
}
