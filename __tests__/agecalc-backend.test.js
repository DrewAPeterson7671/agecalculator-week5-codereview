
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
  test('checking earth life expectancy string handles a person older than', () => {
    let expectAgeTest2 = new PlanetAge(82, 78);
    expectAgeTest2.calcExpectancyEarth();
    expect (expectAgeTest2.expectancyBranching()).toEqual("You have lived 4 longer than your life expectancy!  Congratulations!");
  });
  test('checking earth life expectancy string handles a person equal to', () => {
    let expectAgeTest3 = new PlanetAge(78, 78);
    expectAgeTest3.calcExpectancyEarth();
    expect (expectAgeTest3.expectancyBranching()).toEqual("You have arrived at your life expectancy of 78! Perhaps you should sit down for a minute and take it in.");
  });
  test('checking earth life expectancy string handles a younger person', () => {
    let expectAgeTest4 = new PlanetAge(40, 78);
    expectAgeTest4.calcExpectancyEarth();
    expect (expectAgeTest4.expectancyBranching()).toEqual("You can totally bank on at least 38 more years of life!  I mean...  you know...  probably!");
  });
  test('mars life expectancy calc', () => {
    let expectMercTest = new PlanetAge(34, 78);
    expectMercTest.calcExpectancyEarth();
    expect (expectMercTest.expectMerc()).toEqual(183);
  });
  test('venus life expectancy calc', () => {
    let expectVenusTest = new PlanetAge(34, 78);
    expectVenusTest.calcExpectancyEarth();
    expect (expectVenusTest.expectVenus()).toEqual(70);
  });
  test('mars life expectancy calc', () => {
    let expectMarsTest = new PlanetAge(34, 78);
    expectMarsTest.calcExpectancyEarth();
    expect (expectMarsTest.expectMars()).toEqual(20);
  });

});
