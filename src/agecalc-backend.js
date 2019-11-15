// export { ageEarthInputCalc }
export { ageMercuryCalc }
export { ageVenusCalc }
export { PlanetAge }



// business logic

const mercuryFactor = .24;
const venusFactor = .62;
const marsFactor = 1.88;
const jupiterFactor = 11.86;


class PlanetAge {
  constructor(inputAge) {
    this.inputAge = inputAge;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
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
    return this.mercuryAge = Math.round(this.inputAge / mercuryFactor);
    console(this.mercuryAge);
  }




function ageMercuryCalc(inputAge) {
  let mercuryAge = Math.round(inputAge / mercuryFactor);
  return mercuryAge;
}

function ageVenusCalc(inputAge) {
  let venusAge = Math.round(inputAge / venusFactor);
  return venusAge;
}
