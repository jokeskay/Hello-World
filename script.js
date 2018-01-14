(function(){

  var quotes = [
           "Girl, your so hot my zipper is falling for you! (make her look)",
	   "I grew up during the sixties, with the peace and love generation. If I can't get some love, I'd like to get a piece. ",
	   "On my last date, we played strip poker. We stripped, and I poked her.",
	   "I just got out of Leavenworth. Can I steal you a drink? How about a BMW? ",
	   "Are you a campfire? Cause you're hot and I want s'more.",
	   "We're not socks. But I think we'd make a great pair. ",
	   "Girl, you Make Curves Great Again. ",
	   "So we're friends now, when do the benefits kick in? ",
	   "I think it is time I tell you what people are saying behind your back. Nice Ass! ",
	   "I like Legos, you like Legos, why don't we build a relationship? ",
	   "Are you the dub to my step? cause' I wub wub wub you.",
	   "90% of my game is corny pick up lines and the other 10 is awkward stares.",
	   "Are you from Japan? Cause I’m tryna get in Japanties.",
	   "You remind me of an overdue library book, cause you got Fine written all over you.",
	   "What’s the difference between a Ferrari and an erection? I don’t have a Ferrari.",
	   "On a scale of 1 to 10, you’re a 9. I’m the 1 you need",
	   "Hi, did your license get suspended for driving all these guys crazy?"
               ];
     
  var images = [
    "reddot.jpeg",
    "car.jpeg",
    "staringaway.png",
    "young-girl-rose-man-lady-46171.jpeg",
    "girl-about-red-blue-eyes-90757.jpeg",
    "avi-richards-374974.jpg",
    "paradise.jpeg",
    "darkwoods.jpeg",
    "redbikini.jpg",
    "pinkrose.jpg",
    "building-metropoli-urban.jpg",
    "urban_night_5-wallpaper-1152x720.jpg",
    "summertime_3-wallpaper-1920x1080.jpg",
    "kate_upton_summertime-wallpaper-1600x900.jpg",
    "
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
