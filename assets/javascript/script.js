/*
will need a timer 120 seconds long posted in a card or an bootstrap alert for the diplay of the timer
will need an array of questions of which each index will be corresponding to a number class called $(".question#") should apend div
in the container listed in order (could be an ol) 
   
    

Will need a document.ready function(){} 
    - will need a call to start the triviaGame() first [be sure to set up all the vars to 0.]
    - will need the to create the triviaGame() below it with a
        -for loop most likely that will have the stuff for the timer and start button
        -will need switch/case function for the answerArr */


        //joe said to try doing functions and using intervals per second instead of setTimeOut
        // question array 
        var qArr = ["Who is the father of western philosophy?", "Which philosopher said I think therefore I am?", 
        "What is Platos theory of forms talk about?", "Who was the father of modernism?","What was Socretes known for?", 
        "Kant wrote which of these books?", "Which philosopher came up with deconstructionism?", "Hegel wrote which of these books?", 
        "Sophies World was a book written to explain all western philosophy in narrative - who was this book marketted towards initially?", 
        "The cave analogy was written by Plato to explain what?", "This philospher was a Rationalist, birthed the 'theory of probability' in mathmatics?", 
        "This philosopher came up with evolution.", "This philosopher was more or less the father of modern psychology.", 
        "This philosopher came up with the uberman and is know for being the father of atheism.", 
        "Who wrote Fear and Trembling andthe famous consept of the leap of faith.", 
        "Socialism was invented by."," Foucalt was known for what book?", "Lyotard was known for book in postmodernism?", 
        "Machiavelli did what for philosophy?", "Spinoza did what famous contribution to philosophy?"];

        // answer array
       var aArr = ["Plato", "Descartes", "That invisible forms represent the most true ideal expression of reality.", "Descartes",
        "He is credited with laying the fundamentals of modern Western philosophy. He is known for creating Socratic irony and the Socratic method.", 
        "Religion Within the Limits of Reason Alone", "Derrida", "Time and Being", "high school freshman", "The awoken man", "Pascal", "Darwin", "Freud", 
        "Nietzche", "Keirkegaard", "Marx", " Discipline and Punish", "The Postmodern Condition: A Report on Knowledge", 
        "Being regarded as the father of modern political science", 
        "He was best known for his Ethics, a monumental work that presents an ethical vision unfolding out of a monistic metaphysics in which God and Nature are identified."];

        
        // incorrect array...being long arrays and questions are complex listing off only one wrong answer for each because it is on a 2 minute timer
        var iArr = ["Socretes", "Hume", "Forms are real and matter ethically.", "Hobbs",
        "He was Plato's student.", "Book of Reasonable Philosophy", "Paine", "Between Time", 
        "Graduate Students", "The asleep man", "Bacon", "Dalton", "Dewey", "Plato", "Bergson",
        "Keirkegaard", " Crime and Politics", "The Modern Condition: A Report on Reason", 
        "Being regarded as the father of modern social science", "Best known for the theory on Being"];
        
//global vars here:

  
    var correctScore = 0;
    var incorrectScore = 0;
    var user;
    

//just copied this little thing to see if it would work (wont use for final product, on the bottom of the script was the timer I was attempting to work with)
var count = 180;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);

//calling the setTimeout fuction outside the checkTime(), this might be useful incase the page doesnt load it
//this is not working so I commented it out it said checkTime() was not defined
//setTimeout(checkTime(), 1000);


//attempting to think of a way to have aArr and iArr not always in first and second but rather random.
function RandomALocation(){
    //tryint to randomize the choice positions attempting to do a randomizer var that is either aArr or iArr
    var randomizer = aArr && iArr;
    Math.floor(Math.random(randomizer) +aArr && iArr)
}


        //main function here:
// document.ready = function mainTriviaFunction(){
    gameStart();
    function gameStart(){
      //loop to go through the questions 
      for(var i=0; i < qArr.length; i++ ){
        var theForm =  $("<form>");
       //declaring the questions to a paragraph with the text being read from the array in order of the array. 
        var theQ = $("<p>").text(qArr[i]);
       //be keen to note the name is needed so only 1 answer will allow for per <p>
        var theA = $("<input type='radio' name='answerGroup"+i+"' value = 'correct'>"); 
        var theI = $("<input type='radio' name='answerGroup"+i+"' value = 'incorrect'>");

        //appending the form with the questions
        theForm.append(theQ);
        
        //appending the form with the correct answers for the radio button, then appending the aArr with index of i 
        theForm.append(theA);
        theForm.append(aArr[i]);

        //appending the form with the incorrect answers for the radio button, then appending the iArr with index of i 
        theForm.append(theI);
        theForm.append(iArr[i])

        //created a class for trivia that this whole form will append inside of.
        $(".trivia").append(theForm);
        
     

        //not sure if I should do a if else statement
    
        $(theForm).on("click", correctScore);
        if (user == aArr){
            correctScore ++;
        }else{
            incorrectScore ++;
        }
    
    }

    //trying to set up a place where a button will return the score of corrrect and incorrect answers on the trivia game
      $("returnScore").on("click", correctScore + incorrectScore);
    }

    //setting timer function here:

  //on.click that starts the timer. loop over questions and print to screen (RESEARCH RADIO FUNCTION)
//add up all the check values that are correct

    



























// };

// //converting from array to an object called questions so I can call it easier and it is less confusing
// var questions = {

//     Q1:"Who is the father of western philosophy?",
//     Q2:"Which philosopher said I think therefore I am?",
//     Q3:"What is Platos theory of forms talk about?",
//     Q4:"Who was the father of modernism?",
//     Q5:"What was Socretes known for?",
//     Q6:"Kant wrote which of these books?",
//     Q7:"Which philosopher came up with deconstructionism?",
//     Q8:"Hegel wrote which of these books?",
//     Q9:"Sophies World was a book written to explain all western philosophy in narrativ ewho was this book marketted towards initially?",
//     Q10:"The cave analogy was written by Plato to explain what?",
//     Q11:"This philospher was a Rationalist, birthed the 'theory of probability' in mathmatics?",
//     Q12: "This philosopher came up with evolution.",
//     Q13:"This philosopher was more or less the father of modern psychology.",
//     Q14:"This philosopher came up with the uberman and is know for being the father of atheism.",
//     Q15: "Who wrote Fear and Trembling andthe famous consept of the leap of faith.",
//     Q16:"Socialism was invented by.",
//     Q17:" Foucalt was known for what book?",
//     Q18:"Lyotard was known for book in postmodernism?",
//     Q19:"Machiavelli did what for philosophy?",
//     Q20:"Spinoza did what famous contribution to philosophy?"
// };

// var cAnswer = {
//     A1:"Plato",
//     A2:"Descarte",
//     A3:"That invisible forms represent the most true ideal expression of reality.",
//     A4:"Descartes",
//     A5:"He is credited with laying the fundamentals of modern Western philosophy. He is known for creating Socratic irony and the Socratic method.", 
//     A6: "Religion Within the Limits of Reason Alone",
//     A7:"Derrida",
//     A8:
//     A9:
//     A10:
//     A11:
//     A12:
//     A13:
//     A14:
//     A15:
//     A16:
//     A17:
//     A18:
//     A19:
//     A20:
// }
// var iAnswer = {
//     A1:
//     A2:
//     A3:
//     A4:
//     A5:
//     A6:
//     A7:
//     A8:
//     A9:
//     A10:
//     A11:
//     A12:
//     A13:
//     A14:
//     A15:
//     A16:
//     A17:
//     A18:
//     A19:
//     A20:
// }

//try using setTime on the main function. 
    //timer function (MAY PLACE INTO MAIN document.ready function())
 /*__________________________________________________________________________________________________________________
       //3:00 timer setting the total seconds to 180seconds
    var totalSeconds = 60*3;
        //for the minutes the total will start as 3.
    var minutes = parseInt(totalSeconds/60);
        //SECONDS NOT WORKING
        //for the seconds (saw some guy try it like this, testing it out)
    var seconds = parseInt(totalSeconds%60);
                //loging at 180 currently
         console.log("this is the total seconds " + totalSeconds);
                //loging at 3
         console.log("this is the minutes " + minutes);
                //loging at 0
         console.log("this is the seconds " + seconds);
        //setting correct and incorrect scores to zero. 
    function checkTimer(){


     //create a id called for the rivia time left to be displayed in the html
     $("triviaTimer").html("Start Trivia Game, You have 3 Mins!")==
     //this was the other code I saw but I tried to do the above line instead
   //using jQuery          document.getElementbyId("triviaTimer").innerHTML 
    "Time Remaining: " + minutes + seconds;

//     //if total seconds is less than 0
     if (totalSeconds <= 0) {
         setInterval("document.triviaGame.submit()", 1);
    } else {
//             //reducing total seconds by 1 second
      totalSeconds = totalSeconds -1;
      minutes = parseInt(totalSeconds/60);//3
        seconds = parseInt(totalSeconds%60);
//              //the set time out fuction is created here relating to 
//              //the checkTime() fuction set to 1 second
        setInterval("checkTime(theA & theI)", 1000);
        console.log(checkTimer);
        var theTIMER = $("<div>");
        $(theTIMER).append(count)
        console.log(theTIMER)
    }

 }
 checkTimer()
 _______________________________________________________________________________________
 
 */
//peter said this worked for him just testing it out...not seeming to work just yet probably missing something to turn it on.
 var timer = {
     time: 0,
 }
var intervalID;
var running;
var running = false;
var timerNumber = timer.time;
//this seems to display which is what I wanted..not linking to anything yet.
$("#display").text("00:00");

//trying to link the onload function for onlcik of the timer... NOT WORKING
window.onload = function(){
$("#start").on("click", runTimer());
}
//Timer begin
function runTimer() {
   if (!running) {
       intervalID = setInterval(decrement, 1000);
       running = true;
   }
}

//Timer functionality
function decrement() {
   $("#timerHolder").html("<h3>Time Remaining: " + timerNumber + "</h3>");
   timerNumber--;

//stops timer upon reaching 0 seconds remaining
   if(timerNumber === 0) {
       incorrectScore++;
       stop();
       $("#answerDiv").html("Time has run out! The correct answer is: " +correctScore);
   }
}

//Stop timer function
function stop() {
   running = false;
   clearInterval(intervalID);
}