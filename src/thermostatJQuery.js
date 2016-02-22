$( document ).ready(function() {

  var thermostat = new Thermostat();

  $("#powersaving").click(function() {
    thermostat.powerSavingButton();
    $("#power-saving-status").text(thermostat.POWER_SAVING);
  });



});
