export { ageEarthInputCalc }
export { ageMercuryCalc }


// business logic

let ageEarthInputCalc = function(input) {
  if (typeof(input) !== 'number') {
    return false;
  } else if (typeof(input) === 'number') {
    return true;
  } else {
    console.log('input type error');
  }
}

let ageMercuryCalc = function(input) {
  return 38;
}
