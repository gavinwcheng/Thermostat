describe('Thermostat',function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20C',function(){
    expect(thermostat.temperature).toBe(20);
  });

  it('should increase temperature when up button is pressed',function() {
    thermostat.upButton();
    expect(thermostat.temperature).toEqual(21)
  });


  xit('',function() {});
  xit('',function() {});
  xit('',function() {});
  xit('',function() {});
  xit('',function() {});
  xit('',function() {});
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
