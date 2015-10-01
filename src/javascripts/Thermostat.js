function Thermostat(){
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.powerSave = true;
};

Thermostat.prototype.upButton = function() {
  if (this.maxTemp === 25 && this.temperature >= 25) {
    throw "Temperature cannot be set above 25 degrees";
};
  if (this.maxTemp === 32 && this.temperature >= 32) {
    throw "Temperature cannot be set above 32 degrees";
};
  return this.temperature += 1;
};

Thermostat.prototype.downButton = function() {
  if (this.temperature <= 10) {
    throw "Temperature cannot be set below 10 degrees";
  };
  return this.temperature -= 1;
};

Thermostat.prototype.switchPowerSaving = function() {
  this.powerSave = !this.powerSave;
  this.maxTemp = this.powerSave ? 25 : 32;
  if (this.temperature > this.maxTemp) {
    this.temperature = 25;
    };
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
};

Thermostat.prototype.colour = function() {
  if (this.temperature <= 18) {
    return "green";
  };
  if (this.temperature >= 25) {
    return "red";
  }
  else {
    return "orange";
  }
};

