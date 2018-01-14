(function(){

  var quotes = [
	   "I grew up during the sixties, with the peace and love generation. If I can't get some love, I'd like to get a piece. ",
	   "I just got out of Leavenworth. Can I steal you a drink? How about a BMW? ",
	   "Are you a campfire? Cause you're hot and I want s'more.",
	   "We're not socks. But I think we'd make a great pair. ",
	   "Girl, you Make Curves Great Again. ",
	   "So we're friends now, when do the benefits kick in? ",
	   "I think it is time I tell you what people are saying behind your back. Nice Ass! ",
	   "I like Legos, you like Legos, why don't we build a relationship? ",
	   "Are you the dub to my step? cause' I wub wub wub you.",
	   "90% of my game is corny pick up lines and the other 10 is awkward stares.",
	   "You remind me of an overdue library book, cause you got Fine written all over you.",
	   "What’s the difference between a Ferrari and an erection? I don’t have a Ferrari.",
	   "On a scale of 1 to 10, you’re a 9. I’m the 1 you need",
	   "Hi, did your license get suspended for driving all these guys crazy?",
	   "Do bandz, make you dance?",
	   "On a scale of 1 to America, how free are you tonight?",
	   "Hey there, whats up, what do I have to do to get on your drunk dial list?",
	   "Hey how do you pronounce your digits",
	   "Your killing me with that smile, instead of going to jail for murder you should just do time with me.",
	   "Do you have a Bandaid? Cos I just scraped my knee falling for you.",
	   "Do you have a map? Cos Honey, I just keep gettin lost in your eyes.",
	   "You're eyes are bluer than the Atlantic ocean and baby, I'm all lost at sea.",
	   "Hello. Cupid called. He says to tell you that he needs my heart back.",
	   "Do you have a pencil? Cause I want to erase your past and write our future.",
	   "How was Heaven when you left it? You are so beautiful that you give the sun a reason to shine.",
	   "The only thing your eyes haven't told me is your name.",
	   "Honey, you give new meaning to the defintion of 'edible'.",
	   "I think I can die happy now, coz I've just seen a piece of heaven.",
	   "You must be a magician, because every time I look at you, everyone else disappears.", 
	   "My mom told me that life is like a deck of cards, so you must the be queen of hearts.",
	   "I'm no organ donor, but I'd be happy to give you my heart.",
	   "When I first saw you I looked for a signature, because every masterpiece has one.", 
	   "Excuse me...Hi, I'm writing an essay on the finer things in life, and I was wondering if I could interview you.",
	   "Has anyone ever told you that your eyes are clear like the ocean? Because I can see straight into your soul.",
	   "If I had a rose for every time I thought of you, I would be walking through my garden forever.",
	   "The best thing about ME is YOU"
               ];
     
  var images = [
    "reddot.jpeg",
    "car.jpeg",
    "young-girl-rose-man-lady-46171.jpeg",
    "girl-about-red-blue-eyes-90757.jpeg",
    "avi-richards-374974.jpg",
    "paradise.jpeg",
    "redbikini.jpg",
    "pinkrose.jpg",
    "building-metropoli-urban.jpg",
    "urban_night_5-wallpaper-1152x720.jpg",
    "summertime_3-wallpaper-1920x1080.jpg",
    "kate_upton_summertime-wallpaper-1600x900.jpg",
    "japanese_woman-wallpaper-1440x900.jpg",
    "contrast_7-wallpaper-1600x900.jpg",
    "dessertpaint.jpeg",
    "yin_and_yang-wide.jpg",
    "love_juice_2-wide.jpg",
    "dare_to_love-normal.jpg",
    "best_thing_about_me_is_you-normal5.4.jpg",
    "heart_fly-normal.jpg",
	  
	  
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
