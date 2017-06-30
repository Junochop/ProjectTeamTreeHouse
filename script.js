// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var message = '';


//to generate a random quote object
function getRandomQuote() {
var randomNumber = Math.floor(Math.random() * quotes.length);
var randomQuote = quotes[randomNumber];
return randomQuote;
}

//to print a random quote
function printQuote() {
    var div = document.getElementById("quote-box");
    var quotesRandom = getRandomQuote(); 
  
    message = '<p class="quote">' + quotesRandom.quote + '</p>';
    message += '<p class="source">' + quotesRandom.source + '</p>';
    
    //if 'citation' is not an empty string, it will print 'citation'
    if (quotesRandom.citation !== " ") {   
      message += '<span class="citation">' + quotesRandom.citation + '</span>';

    //if 'year' is not an empty string, it will print 'year'
    }  if (quotesRandom.year !== " ") {
         message += '<span class="year">' + quotesRandom.year + '</span>'; 
    }
    
    div.innerHTML =  message;

    }  










