var thermostat = new Thermostat;

var updateThermostat = function(method) {
  method;
  updateHTML();
};

$("#thermostat_counter").css("color", thermostat.colour());
// document.getElementById("Powersave").checked = true;

var updateHTML = function() {
  $("#thermostat_counter").html(thermostat.temperature);
  $("#thermostat_counter").css("color", thermostat.colour());
};

$(document).ready(function() {

  $("#Up").click(function() {
    updateThermostat(thermostat.upButton());
  });

  $("#Down").click(function() {
    updateThermostat(thermostat.downButton());
  });

  $("#Reset").click(function() {
    updateThermostat(thermostat.resetTemperature());
  });

  $("#Powersave").click(function(){
    updateThermostat(thermostat.switchPowerSaving());
  });

  var urlCity = window.location.search.replace('?city=', '') || 'london';

  $.ajax('http://api.openweathermap.org/data/2.5/weather?q=' + urlCity, {
    success: function(data) {
      console.log(data.main.temp);
      $("#Weather").html(data.main.temp);
    }
  });
});
