//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (originalDna, replicatedDna) => {
  if (originalDna.length !== replicatedDna.length)
    throw new Error("strands must be of equal length");
  const originalDnaArray = [...originalDna];
  const replicatedDnaArray = [...replicatedDna];
  let hammingDistance = 0;

  originalDnaArray.forEach((el, index) => {
    if (el !== replicatedDnaArray[index]) hammingDistance += 1;
  });

  return hammingDistance;
};
