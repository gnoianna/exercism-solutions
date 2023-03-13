//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (positiveInteger, stepsNumber = 0) => {
  if (positiveInteger <= 0)
    throw new Error("Only positive numbers are allowed");
  else if (positiveInteger === 1) return stepsNumber;

  positiveInteger =
    positiveInteger % 2 === 0 ? positiveInteger / 2 : 3 * positiveInteger + 1;
  stepsNumber++;

  return steps(positiveInteger, stepsNumber);
};
