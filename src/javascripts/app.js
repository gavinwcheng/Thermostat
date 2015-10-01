var thermostat = new Thermostat;

var updateThermostat = function(method) {
  method;
  updateHTML();
};

document.getElementById("thermostat_counter").style.color = thermostat.colour();
// document.getElementById("Powersave").checked = true;

var updateHTML = function() {
  document.getElementById("thermostat_counter").innerHTML = thermostat.temperature;
  document.getElementById("thermostat_counter").style.color = thermostat.colour();
};

document.addEventListener('DOMContentLoaded', function(){

  document.getElementById("Up").addEventListener("click", function() {
    updateThermostat(thermostat.upButton());
  });

  document.getElementById("Down").addEventListener("click",function() {
    updateThermostat(thermostat.downButton());
  });

  document.getElementById("Reset").addEventListener("click",function() {
    updateThermostat(thermostat.resetTemperature());
  });

  document.getElementById("Powersave").addEventListener("click",function(){
    updateThermostat(thermostat.switchPowerSaving());
  });

});