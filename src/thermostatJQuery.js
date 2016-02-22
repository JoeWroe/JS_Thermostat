$( document ).ready(function() {

  var thermostat = new Thermostat();

  $("#powersaving").click(function() {
    thermostat.powerSavingButton();
    $("#power-saving-status").text(thermostat.POWER_SAVING);
  });

  $("#temperature-up").click(function() {
    thermostat.upButton();
    $("#currentTemperature").text(thermostat.temperature);
  });

  $("#temperature-down").click(function() {
    thermostat.downButton();
    $("#currentTemperature").text(thermostat.temperature);
  });

  $("#temperature-reset").click(function() {
    thermostat.tempReset();
    $("#currentTemperature").text(thermostat.temperature);
  });



});
