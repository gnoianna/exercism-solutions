//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const GIGASECOND_IN_MS = 10 ** 12;

/**
 * Calculate the date and time one gigasecond after a date.
 *
 * @param {Date} certainDate
 * @returns {Date} the new date
 */
export const gigasecond = (certainDate) => {
  return new Date(certainDate.getTime() + GIGASECOND_IN_MS);
};
