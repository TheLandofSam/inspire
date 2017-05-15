function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		//console.log('What is the quote', quote)
		draw(quote)
	})

	function draw(quote){
		//console.log(quote)
		var elem1 = document.getElementById("quote");
		var elem2 = document.getElementById("quoteAuthor")
			
		var template1 =`
		<h3>"${quote.quote}"</h3>
			`
		
		var template2 =`
		<h4>-${quote.author}<h4>
		`
	elem1.innerHTML = template1
	elem2.innerHTML = template2

	}

function failed(){
    var elem = document.getElementById("quote")

    elem.innerHTML = "A magenta elephant was seen in the vacinity of your broken request."
	}
}
