function WeatherController(){
	//var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather);
		weatherService.weather = weather
		//What can you do with this weather object?
		draw()
	})
	var fTemp = false
	//THIS TOGGLE FUNCTION IS NOT WORKING...WHAT DO I NEED TO PASS IT FROM THE HTML TO CALL IT? MEH...I'M CONFUSED...
	function draw(){
		
		fTemp = !fTemp
		var template =``
		//console.log(weather)
		var elem = document.getElementById("weather");
		if (fTemp == true){
			template = `<h3>The temperature in ${weatherService.weather.name} is <a href="#" id="toggle-temp">${(weatherService.weather.main.temp *(9/5) - 459.67).toFixed(1) + "°F"}</a></h3>`
		}else{
			template = `<h3>The temperature in ${weatherService.weather.name} is <a href="#" id="toggle-temp">${(weatherService.weather.main.temp - 273.15).toFixed(1) + "°C"}</a></h3>`
		}
		
	elem.innerHTML = template
	var temp = document.getElementById("toggle-temp")//now that the id toggle-temp has been written to the page, you can grab it...
	temp.addEventListener("click", draw)
	}

	function failed(){
    var elem = document.getElementById("weather")

    elem.innerHTML = "I'm sorry your request was eaten by a hungry gnome."
	}










}