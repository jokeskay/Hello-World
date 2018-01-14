(function(){

  var quotes = [
     "Girl, your so hot my zipper is falling for you! (make her look)",
	   "I grew up during the sixties, with the peace and love generation. If I can't get some love, I'd like to get a piece. ",
	   "On my last date, we played strip poker. We stripped, and I poked her.",
	   "I just got out of Leavenworth. Can I steal you a drink? How about a BMW? ",
	   "Are you a campfire? Cause you're hot and I want s'more.",
	   "We're not socks. But I think we'd make a great pair. ",
	   "Girl, you Make Curves Great Again. ",
	   "So we're friends now, when do the benefits kick in? "
	];
     
  var images = [
    "reddot.jpeg",
    "car.jpeg",
    "chain.jpg",
    "elephant.jpeg",
    "scope.jpeg",
    "pexels-photo-573299.jpeg",
    "staringaway.png",
    "pexels-photo-417040.jpeg",
    "pexels-photo-247361.jpeg",
    "pexels-photo-458555.jpeg",
    "pexels-photo-212410.jpeg",
    "young-girl-rose-man-lady-46171.jpeg",
    "girl-about-red-blue-eyes-90757.jpeg",
    "avi-richards-374974.jpg",
    "colourful.jpeg",
	  
	  
	  
	  
	  
  ];
  
   function chooseOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  window.onload = function() {
    var randomImage = chooseOne(images);
    var randomQuote = chooseOne(quotes);

    document.getElementById('background-image').style.backgroundImage = 'url("img/'+ randomImage +'")';
    document.getElementById('quote').innerHTML = randomQuote;
    document.getElementById('author').innerHTML = "&mdash; " +  'WingmanV1' + " &mdash;";

    document.getElementById('quote').className = 'move';
    document.getElementById('author').className = 'move';
  };

})();

    
