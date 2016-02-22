$( document ).ready(function() {

  var thermostat = new Thermostat();

  // $fadeText = function() {
  // $("#currentTemperature").animate({
  //   opacity : 0
  // }, 150, function() {
  //   $("#currentTemperature").text(thermostat.temperature);
  // });

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
    $("#currentTemperature").fadeOut(1000, function() {
      thermostat.tempReset();
      $(this).text(thermostat.temperature);
    }).fadeIn(2000);
  });
});
