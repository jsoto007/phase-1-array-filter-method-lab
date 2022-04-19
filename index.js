// Code your solution here
function findMatching(drivers, driverName) {
  const result = drivers.filter(function (name) {
    return name.toUpperCase() === driverName.toUpperCase();
  })
  return result;
}

function fuzzyMatch(drivers, driverName) {
  const result = drivers.filter(function (name) {
    return name.charAt(1) === driverName.charAt(1);
  })
  return result;
}

function matchName(drivers, driverName) {
  const finder = drivers.filter(obj => obj.name === `${driverName}`)
  return finder
}
