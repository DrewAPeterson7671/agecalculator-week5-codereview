export { ageEarthInputCalc }


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
