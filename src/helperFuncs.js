export const findClosestColors = (colorsArr, targetColor) => {
  const colorDiff = (color1, color2) => {
    // remove # from the first char of the color string and destructure the string into individual R, G, and B values (0-255)
    color1 = color1.substring(1);
    color2 = color2.substring(1);
    let r1 = parseInt(color1.substring(0, 2), 16);
    let g1 = parseInt(color1.substring(2, 4), 16);
    let b1 = parseInt(color1.substring(4, 6), 16);

    let r2 = parseInt(color2.substring(0, 2), 16);
    let g2 = parseInt(color2.substring(2, 4), 16);
    let b2 = parseInt(color2.substring(4, 6), 16);

    let deltaR = (r1 - r2) ** 2;
    let deltaG = (g1 - g2) ** 2;
    let deltaB = (b1 - b2) ** 2;

    // calculate distance baesd on sqrt(a2 + b2 + c2)
    let distance = Math.sqrt(deltaR + deltaG + deltaB);
    return distance;
  };
  // create an array of array where each element contains the color name and distance from target
  let colorsAndDeltaArray = colorsArr.map((color) => [color, colorDiff(targetColor, color)]);
  // sort the array based on its difference
  let sortedColors = colorsAndDeltaArray.sort((a, b) => a[1] - b[1]);
  // take the 5 colors closest to the start of the array excluding the 0 index since that's the target color
  let closestColors = sortedColors.slice(1, 6).map((color) => color[0]);
  return closestColors;
};
