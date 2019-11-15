// export { ageEarthInputCalc }
export { ageMercuryCalc }
export { ageVenusCalc }
export { PlanetAge }



// business logic

const mercuryFactor = .24;
const venusFactor = .62;
const marsFactor = 1.88;
const jupiterFactor = 11.86;

//original test function to verify input is a number

// let ageEarthInputCalc = function(inputAge) {
//   if (typeof(inputAge) !== 'number') {
//     return false;
//   } else if (typeof(inputAge) === 'number') {
//     return true;
//   } else {
//     console.log('input type error');
//   }
// }

/// object to build up to

class PlanetAge {
  constructor(inputAge) {
    this.inputAge = inputAge;
    this.mercuryAge;
    this.venusAge;
    this.marsAge;
    this.jupiterAge;
  }
  checkInput() {
    if (typeof(this.inputAge) !== 'number') {
      return false;
    } else if (typeof(this.inputAge) === 'number') {
      return true;
    } else {
      console.log('input type error');
    }
  }
  calcAges() {
    return 7;
    // this.mercuryAge = this.inputAge / mercuryFactor;
  }


  // calcAge() {
  //   let mercuryAgeageMercuryCalc = Math.round(inputAge / mercuryFactor);
  //   this.mercuryAge = mercuryAgeageMercuryCalc;
  // }
};


function ageMercuryCalc(inputAge) {
  let mercuryAge = Math.round(inputAge / mercuryFactor);
  return mercuryAge;
}

function ageVenusCalc(inputAge) {
  let venusAge = Math.round(inputAge / venusFactor);
  return venusAge;
}
