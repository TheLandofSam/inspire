function WeatherService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
	var apiUrl = url + encodeURIComponent(url2);


	this.getWeather = function (callWhenDone) { //Jake said this should be taken out
		//var w = localStorage.getItem('weather');
		//if (w) {
		//	w = JSON.parse(w);
		//	console.log('Weather Data:', w)
		//	return callWhenDone(w)
	  //	}
		
		$.get(apiUrl, function (res) {
			res = JSON.parse(res) //info back from weather service is a string, thus, this line is necessary
			localStorage.setItem('weather', JSON.stringify(res))
			callWhenDone(res);
		})
	}











}
