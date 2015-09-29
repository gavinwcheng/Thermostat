function Thermostat(){
  this.temperature = 20
  this.minTemp = 10
  this.maxTemp = 25
  this.powerSave = true
}

Thermostat.prototype.upButton = function() {
  return this.temperature += 1;
}

Thermostat.prototype.downButton = function() {
  return this.temperature -= 1;
}

Thermostat.prototype.powerSaveSet = function(value) {
  if (value === true) {
    return this.maxTemp = 25;
  }
  if (value === false) {
    return this.maxTemp = 32;
  }
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20
}