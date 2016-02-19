function Thermostat() {
  this.temperature = 20;
  MIN_TEMP         = 10;
  this.POWER_SAVING     = "on";
  this.COLOUR = 'Yellow';
}

Thermostat.prototype.upButton = function() {
  if (this.POWER_SAVING === "off" && this.temperature >= 32)
   throw ('Max Temp reached');
  if (this.POWER_SAVING === "on" && this.temperature >= 25)
   throw ('Max Temp reached');
  this.temperature += 1;
  this.colour();
};

Thermostat.prototype.downButton = function() {
  if (this.temperature <= MIN_TEMP) throw ('Min Temp reached');
  this.temperature -= 1;
  this.colour();
};

Thermostat.prototype.powerSavingButton = function() {
  if (this.POWER_SAVING === "on") {
    this.POWER_SAVING = "off";
  }
  else {
    this.POWER_SAVING = "on";
    this.temperature = 25;
  }
};

Thermostat.prototype.tempReset = function() {
  this.temperature = 20;
  this.colour();
};

Thermostat.prototype.colour = function () {
  if (this.temperature < 18) {
    this.COLOUR = 'Green';
  }
  else if (this.temperature <= 25 && this.temperature >= 18) {
    this.COLOUR = 'Yellow';
  }
  else {
    this.COLOUR = 'Red';
  }
};
