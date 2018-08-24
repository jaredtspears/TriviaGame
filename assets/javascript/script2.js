
//question array, the answer array, and the incorrect answer array
//set up with radio buttons after the object Timer.
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
var aArr = ["Plato", "Descartes", "That invisible forms represent the most true ideal expression of reality.", "Descartes",
"He is credited with laying the fundamentals of modern Western philosophy. He is known for creating Socratic irony and the Socratic method.", 
"Religion Within the Limits of Reason Alone", "Derrida", "Time and Being", "high school freshman", "The awoken man", "Pascal", "Darwin", "Freud", 
"Nietzche", "Keirkegaard", "Marx", " Discipline and Punish", "The Postmodern Condition: A Report on Knowledge", 
"Being regarded as the father of modern political science", 
"He was best known for his Ethics, a monumental work that presents an ethical vision unfolding out of a monistic metaphysics in which God and Nature are identified."];
var iArr = ["Socretes", "Hume", "Forms are real and matter ethically.", "Hobbs",
"He was Plato's student.", "Book of Reasonable Philosophy", "Paine", "Between Time", 
"Graduate Students", "The asleep man", "Bacon", "Dalton", "Dewey", "Plato", "Bergson",
"Keirkegaard", " Crime and Politics", "The Modern Condition: A Report on Reason", 
"Being regarded as the father of modern social science", "Best known for the theory on Being"];

//global vars
var correctAnswer = 0;
var incorrectAnswer = 0;
    //the score is just the number correct out of 20
var score = correctAnswer/20;
var intervalId;
var timerRunning = false;

//this function will run at the begin of the loaded page
window.onload = function() {
$("#start").on("click", Timer.start);
$("#stopReset").on("click", Timer.stopReset);

}

var Timer = {
    //set time to 3 minutes
    time: 180,
    //reset function  for timer (expect this to work with the submit button later)
    stopReset: function() {
        time =0;
        $("#display").text("00:00");
        clearInterval(intervalId);
        TimerRunning = false;
        console.log(intervalId);
    },
    start: function() {
        //if the timer is not running do this if statement
        if(!timerRunning){
            intervalId = setInterval(Timer.count, 1000);
            clockRunning = true;
        }
    },
    count: function (){
        //should desend in time
        Timer.time --;
        var converted = Timer.timeConverter(Timer.time);
            //trying to display what is in the console.log but it is not currently
        $("#displayCountDown").html("<h2>Time Remaining: " + converted + "</h2>");
    },
    timeConverter: function(t) {
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes *60);

        if(seconds < 10){
            seconds = "0" + seconds;    
        }
        if(minutes === 0){ 
            minutes = "00";
        }
        else if (minutes < 10 ){
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
}

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
   
    }
}
