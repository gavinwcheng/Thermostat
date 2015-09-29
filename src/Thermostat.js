function Thermostat(){
  this.temperature = 20
  this.minTemp = 10
  this.maxTemp = 32
  this.powerSave = true
}

Thermostat.prototype.upButton = function() {
  return this.temperature += 1;
}

Thermostat.prototype.downButton = function() {
  return this.temperature -= 1;
}

Thermostat.prototype.powerSaveOn = function() {
  return this.maxTemp = 25;
}