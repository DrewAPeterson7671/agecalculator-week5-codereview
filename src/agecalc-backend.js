export { ageEarthCalc }


// business logic

let ageEarthCalc = function(input) {
  if (typeof(input) !== 'number') {
    return false;
  } else if (typeof(input) == 'number') {
    return true;
  } else {
    return console.log('input type error');
  }
}
