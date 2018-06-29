$(document).ready(function () {  
  $("#next-quote").on("click", function (e) {
    e.preventDefault();
    
    var randomQuoteNumber = getRandomQuoteNumber();
    updateQuote(randomQuoteNumber);
  });
  
  var q = location.search.split("?q=")[1];
  
  if (q >= 0 && q < quotes.length) {
    updateQuote(q);
  } else {
    $("#next-quote").click();
  }
});

function updateQuote(quoteNumber) {
  var randomQuote = quotes[quoteNumber];
    
  $("#quote").html(randomQuote.quote);
  $("#author").html(randomQuote.author);
  $("#quote-box").removeClass().addClass("animated bounceIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass();
  });

  $("#share").attr("href", "https://twitter.com/intent/tweet?text=\"" + encodeURIComponent($("#hidden").html(randomQuote.quote).text()) + "\" https://codepen.io/xgusth/full/OyeJLP?q=" + quoteNumber);
}

function getRandomQuoteNumber() {
  return Math.floor(Math.random() * quotes.length);
}

var quotes = [{"author": "comminatory", "quote": "threating, punitive, or vengefu"},{"author": "Hanker Sore", "quote": "when you find a person attractive and it some what makes you upset"},{"author": "deedy", "quote": "industrious, effective"},{"author": "dight", "quote": "clothed or equipped also making something ready for use."},{"author": "flatline", "quote": "to die"},{"author": "furuncle", "quote": "a boil or put to a boil"},{"author": "infucation", "quote": "to paint of color somthing"},{"author": "nimbose", "quote": "another word for cloud"},{"author": "degust", "quote": "taste (somthing) carefully"},{"author":"jirble", "quote":"to spill (a liquid)"},{"author":"abject","quote":"contemptible"},{"author":"pilgarlic","quote":"a bald head"},{"author":"philtrum","quote":"the vertical groove on the median line of the upper lip"},{"author":"natiform","quote":"something resembling a butt"},{"author":"drakle","quote":"becoming cloudy or dark"},{"author":"pogonotrophy","quote":"growing and grooming a beard or other facial hair"},{"author":"cancatervate","quote":"heaping things into a pile"},{"author":"lemniscate","quote":"the infinity symbol"},{"author":"dactylion","quote":"the tip of the middle finger"},{"author":"poobah","quote":"a powerful person"},{"author":"interrobang","quote":"A punctuation mark designed for use especially at the end of an exclamatory rhetorical question"},{"author":"cachinnate","quote":"laughing very loudly"},{"author":"balter","quote":"dancing clumsily"},{"author":"grawlix","quote":"symbols commonly used in comics or cartoons to represent curse words."},{"author":"aglet","quote":"The tag covering the ends of a shoelace"},{"author":"rasher","quote":"a thin slice of bacon"},{"author":"tines","quote":"the prongs of a fork"},{"author":"tittle","quote":"the dot over i or j"},{"author":"flapdoodle","quote":"nonsense"},{"author":"knavery","quote":"a roughish or mischievous act"},{"author":"melange","quote":"a mixture of different things"},{"author":"doodle sack","quote":"bagpipe"},{"author":"syzygy","quote":"the alignment of three celestial bodies in a straight line"},{"author":"dreamt","quote":"past tense and past participle of dream"},{"author":"nelipot","quote":"a person who walks bare foot"},{"author":"logolepy","quote":"an obession with words"},{"author":"kalon","quote":"beauty that is more then skin deep"},{"author":"tacenda","quote":"things that are better unsaid"},{"author":"orphic","quote":"beyond ordlinary understanding"},{"author":"balter","quote":"to dance gracelessly"},{"author":"yugen","quote":"an awarness of the universe"},{"author":"jayus","quote":"a joke that was told poorly and not funny"},{"author":"eesome","quote":"pleasing to the eye"},{"author":"opia","quote":"an intensity"},{"author":"frawzy","quote":"habitually"},{"author":"logophile","quote":"a person who loves words"},{"author":"lucid","quote":"full of fun and high spirits"},{"author":"fusyt","quote":"ald-fashions or out of date"},{"author":"furphy","quote":"a false report; rumor"},{"author":"lacuna","quote":"a blank space, missing part"},{"author":"wanderlust","quote":"a great desire to travel"},{"author":"liripoop","quote":"a silly person"},{"author":"irenic","quote":"promoting peace"},{"author":"atelophobia","quote":"fear of imperfection"},{"author":"petrichor","quote":"the smell of Earth after rain"}]
