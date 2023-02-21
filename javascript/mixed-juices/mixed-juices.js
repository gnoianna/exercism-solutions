// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let timeNeededToMixJuice = 2.5;
  switch (name) {
    case "Pure Strawberry Joy":
      timeNeededToMixJuice = 0.5;
      break;
    case "Energizer":
    case "Green Garden":
      timeNeededToMixJuice = 1.5;
      break;
    case "Tropical Island":
      timeNeededToMixJuice = 3;
      break;
    case "All or Nothing":
      timeNeededToMixJuice = 5;
      break;
  }
  return timeNeededToMixJuice;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let currentWedgesNumber = 0,
    limesNeeded = 0;

  if (wedgesNeeded != 0)
    for (const [index, lime] of limes.entries()) {
      switch (lime) {
        case "small":
          currentWedgesNumber += 6;
          break;
        case "medium":
          currentWedgesNumber += 8;
          break;
        case "large":
          currentWedgesNumber += 10;
          break;
      }
      limesNeeded = index + 1;
      if (currentWedgesNumber >= wedgesNeeded) {
        break;
      }
    }
  return limesNeeded;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let ordersToFinish = [];
  orders.forEach((juice) => {
    if (timeLeft > 0) timeLeft -= timeToMixJuice(juice);
    else ordersToFinish.push(juice);
  });
  return ordersToFinish;
}
