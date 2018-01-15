(function(){

  var quotes = [
	   "I just got out of Leavenworth. Can I steal you a drink? How about a BMW? ",
	   "We're not socks. But I think we'd make a great pair. ",
	   "I like Legos, you like Legos, why don't we build a relationship? ",
	   "Are you the dub to my step? cause' I wub wub wub you.",
	   "90% of my game is corny pick up lines and the other 10 is awkward stares.",
	   "You remind me of an overdue library book, cause you got Fine written all over you.",
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
	   "The best thing about ME is YOU",
	   "Please call 9-1-1, my heart just stopped for you",
	   "Are you a camera? Because I smile every time I see you",
	   "If kisses were snowflakes, I’d send you a blizzard.",
           "If you were a fruit, you would be a fineapple. And if you were a vegetable, I would visit you every day in hospital.",
           "You know what you’d look really beautiful in? My arms.",
	   "I think you’ve got something in your eye. Oh never mind, it’s just a sparkle.",
	   "Would you touch me so I can tell my friends I’ve been touched by an angel?",
	   "Are you a girl scout because you tie my heart in knot.",
	   "Caution: Please keep your distance. I might fall… for you.",
	   "If I had a dime for every time I thought of you… I’d have one dime… coz you never left my mind.",
	   "If beauty were time, you’d be an eternity.",
	   "If I were a letter in the alphabet, I’d be Q, so I could always be next to U.",
	   "May I have the distinguished honor and privilege of sitting next to you?",
	   "You’re so sweet, you’re giving me cavaties.",
	   "You’re so cute, it’s distracting.",
	   "Baby, you must be a broom, cause you just swept me off my feet.",
	   "Can you give me directions to your heart? I seem to have lost my way in your eyes.",
	   "What time do you have to be back in heaven?"
               ];
     
  var images = [
    "reddot.jpeg",
    "girl-about-red-blue-eyes-90757.jpeg",
    "avi-richards-374974.jpg",
    "paradise.jpeg",
    "walking_alone-wallpaper-1680x1050.jpg",
    "pinkrose.jpg",
    "summertime_3-wallpaper-1920x1080.jpg",
    "japanese_woman-wallpaper-1440x900.jpg",
    "contrast_7-wallpaper-1600x900.jpg",
    "yin_and_yang-wide.jpg",
    "love_juice_2-wide.jpg",
    "dare_to_love-normal.jpg",
    "best_thing_about_me_is_you-normal5.4.jpg",
    "heart_fly-normal.jpg",
    "colourful.jpeg",
    "as_in_fairy_tales-wallpaper-1680x1050.jpg",
    "dark_woman_4k-wide.jpg",
    "fallen_angel_4k-wide.jpg",
    "red_woman-HD.jpg",
    "love_bridge-wallpaper-1280x720.jpg",
    "heart_sand_beach_summer_love-wallpaper-1680x1050.jpg",
    "valentine_girl_paint-HD.jpg",
    "love_above_all-wallpaper-1680x1050.jpg"    
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
