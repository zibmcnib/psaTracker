let findYx = psa => {
  let y = ["y1", "y2", "y3", "y4"]
    .filter(y => psa.fieldData[y])
    .join(",")
    .toLocaleUpperCase();
  let index = parseInt(y.split("").unshift()) - 1;
  let cea = psa.locationData.ceas[index];
  return {y, cea}
};

export default findYx;
