describe('Thermostat',function() {

var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20C',function(){
    expect(thermostat.temperature).toBe(20);
  });

  it('should increase temperature when up button is pressed',function() {
    thermostat.upButton();
    expect(thermostat.temperature).toEqual(21);
  });

  it('should decrease temperature when down button is pressed',function() {
    thermostat.downButton();
    expect(thermostat.temperature).toEqual(19);
  });

  it('the minimum temperature is 10 degrees',function() {
    expect(thermostat.minTemp).toEqual(10);
  });

  it('powersaving mode is on by default',function() {
    expect(thermostat.powerSave).toEqual(true);
  });

  it('powersave sets the maximum temperature to 25 degrees',function() {
    thermostat.powerSaveSet(true);
    expect(thermostat.maxTemp).toEqual(25);
  });

  it('powersave off sets the maximum temperature to 32 degrees',function() {
    thermostat.powerSaveSet(false);
    expect(thermostat.maxTemp).toEqual(32);
  });

  it('reset button returns the temperature to 20',function() {
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20);
  });

  xit('',function() {});

});

// describe("clicking a thing makes it go up by 1", function() {
//   beforeEach(function() {
//     // set up your ‘fixture’ i.e. the HTML/JS for the feature
//   });

//   it("increments a counter", function() {
//     // use jQuery to fetch the HTML element with the id=“counter"
//     var $counter = $('#counter');
//     var $button = $('#button');

//     // click the button
//     $button.click();
//     // expect the thing to now show 1
//     expect($counter.text()).toContainText("1");
//     // that toContainText is a Jasmine-jQuery matcher
//   });
// });
