export { PlanetAge }

// business logic

const mercuryFactor = .24;
const venusFactor = .62;
const marsFactor = 1.88;
const jupiterFactor = 11.86;



class PlanetAge {
  constructor(inputAge, lifeExpectInput) {
    this.inputAge = inputAge;
    this.lifeExpect = lifeExpectInput;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.earthExpectancy = 0;
    this.mercuryExpectancy = 0;
    this.venusExpectancy = 0;
    this.marsExpectancy = 0;
    this.jupiterExpectancy = 0;
  }
  checkInput() {
    if (typeof(this.inputAge) !== 'number') {
      return false;
    } else if (typeof(this.inputAge) === 'number') {
      return true;
    } else {
      console.log('input age type error');
    }
  }
  checkInputExpect() {
    if (typeof(this.lifeExpect) !== 'number') {
      return false;
    } else if (typeof(this.lifeExpect) === 'number') {
      return true;
    } else {
      console.log('input life exp error');
    }
  }
  calcMerc() {
    this.mercuryAge = Math.floor(this.inputAge / mercuryFactor);
    return this.mercuryAge;
  }
  calcVen() {
    this.venusAge = Math.floor(this.inputAge / venusFactor);
    return this.venusAge;
  }
  calcMars() {
    this.marsAge = Math.floor(this.inputAge / marsFactor);
    return this.marsAge;
  }
  calcJupiter() {
    this.jupiterAge = Math.floor(this.inputAge / jupiterFactor);
    return this.jupiterAge;
  }
  calcExpectancyEarth() {
    let earthExpectancyBranch = Math.floor(this.lifeExpect - this.inputAge);
    // this.earthExpectancy = earthExpectancyBranch;
    if (earthExpectancyBranch < 0) {
      this.earthExpectancy = `You have lived ${earthExpectancyBranch * -1} longer than your life expectancy!  Congratulations!`;
    } else if (earthExpectancyBranch = 0) {
      this.earthExpectancy = `You have arrived at your life expectancy of ${lifeExpectInput}! Perhaps you should sit down for a minute and take it in.`;
    } else if (earthExpectancyBranch > 0) {
      this.earthExpectancy = `You can totally bank on at least ${earthExpectancyBranch} more years of life!  I mean...  you know...  probably!`
    } else {
      console.log("Earth Age Expectancy is failing!");
    }
    return this.earthExpectancy;
  }




};
