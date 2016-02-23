$( document ).ready(function() {

  var thermostat = new Thermostat();

  function updateTemperature() {
    $("#currentTemperature").text(thermostat.temperature);
    if(thermostat.COLOUR === "Green") {
      $("#currentTemperature").css('color', '#90EE90');
    } else if (thermostat.COLOUR === "Yellow") {
      $("#currentTemperature").css('color', '#F0E68C');
    } else {
      $("#currentTemperature").css('color', '#F08080');
    }
  }

  $("#marquee").marquee();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=81e11cff7d2f945e47fccbf7619304cf&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  });

  $("#powersaving").click(function() {
    $("#power-saving-status").fadeOut(1000, function() {
      thermostat.powerSavingButton();
      $(this).text(thermostat.POWER_SAVING);
    }).fadeIn(2000);
  });

  $("#temperature-up").click(function() {
    $("#currentTemperature").fadeOut(500, function() {
      thermostat.upButton();
      updateTemperature();
    }).fadeIn(1000);
  });

  $("#temperature-down").click(function() {
    $("#currentTemperature").fadeOut(500, function() {
      thermostat.downButton();
      updateTemperature();
    }).fadeIn(1000);
  });

  $("#temperature-reset").click(function() {
    $("#currentTemperature").fadeOut(1000, function() {
      thermostat.tempReset();
      updateTemperature();
    }).fadeIn(2000);
  });
});
