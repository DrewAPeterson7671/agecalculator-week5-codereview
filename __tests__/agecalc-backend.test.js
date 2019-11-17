
import { PlanetAge } from  './../src/agecalc-backend.js';

describe('PlanetAge', () => {
  test('to determine if object is loading input age correctly', () => {
    let planetAgeTest = new PlanetAge(20);
    expect (planetAgeTest.inputAge).toEqual(20);
  });
  test('folding in input type function to class', () => {
    let planetAgeTest2 = new PlanetAge('age');
    expect (planetAgeTest2.checkInput()).toEqual(false);
  });
  test('test if mercury calculation is correct', () => {
    let mercuryAgeTest = new PlanetAge(20);
    expect (mercuryAgeTest.calcMerc()).toEqual(83);
  });
  test('test if venus calculation is correct', () => {
    let venusAgeTest = new PlanetAge(20);
    expect (venusAgeTest.calcVen()).toEqual(32);
  });
  test('test if mars calculation is correct', () => {
    let calcMarsTest = new PlanetAge(20);
    expect (calcMarsTest.calcMars()).toEqual(10);
  });
  test('test if jupiter calculation is correct', () => {
    let calcJupiterTest = new PlanetAge(20);
    expect (calcJupiterTest.calcJupiter()).toEqual(1);
  });
  test('checking life expectancy input to class to test input type', () => {
    let expectAgeTest2 = new PlanetAge(20,'age');
    expect (expectAgeTest2.checkInputExpect()).toEqual(false);
  });
  test('checking life expectancy input to class to test input is number', () => {
    let expectAgeTest = new PlanetAge(20, 78);
    expect (expectAgeTest.checkInputExpect()).toEqual(true);
  });
  test('test if earth life expectancy is correct', () => {
    let earthExpectancyTest = new PlanetAge(30, 78);
    expect (earthExpectancyTest.calcExpectancyEarth()).toEqual(48);
  });
  // test('checking earth life expectancy output', () => {
  //   let expectAgeTest2 = new PlanetAge(20, 78);
  //   expect (expectAgeTest.calcExpectancyEarth()).toEqual("You can totally bank on at least 50 more years of life!  I mean...  you know...  probably!");
  // });


});
