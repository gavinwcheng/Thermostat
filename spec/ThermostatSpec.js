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
    for (t = 0; t < 10; t++) {
      thermostat.downButton();
    }
    expect(function() {thermostat.downButton(); }).toThrow("Temperature cannot be set below 10 degrees");
  });

  it('powersaving mode is on by default',function() {
    expect(thermostat.powerSave).toEqual(true);
  });

  it('if powersave on the maximum temperature is 25 degrees',function() {
    thermostat.powerSaveSet(true);
    for (t = 0; t < 5; t++) {
      thermostat.upButton();
    }
    expect(function() {thermostat.upButton(); }).toThrow("Temperature cannot be set above 25 degrees");
  });

  it('if powersave off the maximum temperature is 32 degrees',function() {
    thermostat.powerSaveSet(false);
    for (t = 0; t < 12; t++) {
      thermostat.upButton();
    }
    expect(function() {thermostat.upButton(); }).toThrow("Temperature cannot be set above 32 degrees")
  });

  it('reset button returns the temperature to 20',function() {
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20);
  });

  it('',function() {

  });

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
