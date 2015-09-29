describe('Thermostat',function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20C',function(){
    expect(thermostat.temperature).toBe(20);
  });

});
