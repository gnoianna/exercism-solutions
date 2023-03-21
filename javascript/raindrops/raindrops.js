//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  const raindropsRules = {
    3: "Pling",
    5: "Plang",
    7: "Plong",
  };
  let result = "";
  Object.entries(raindropsRules).forEach(([key, value]) => {
    if (number % key === 0) result += value;
  });
  return result || number.toString();
};
