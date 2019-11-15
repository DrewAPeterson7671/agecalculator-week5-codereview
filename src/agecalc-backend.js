export { ageEarthInputCalc }
export { ageMercuryCalc }



// business logic

const mercuryFactor = .24;
const venusFactor = .62;
const marsFactor = 1.88;
const jupiterFactor = 11.86;

let ageEarthInputCalc = function(inputAge) {
  if (typeof(inputAge) !== 'number') {
    return false;
  } else if (typeof(inputAge) === 'number') {
    return true;
  } else {
    console.log('input type error');
  }
}

/// object to build up to

function PlanetAge(inputAge) {

  this.earthAge = inputAge;
  this.mercuryAge = inputAge / mercuryFactor;
}


function ageMercuryCalc(inputAge) {
  let mercuryAge = Math.round(inputAge / mercuryFactor);
  return mercuryAge;
}
