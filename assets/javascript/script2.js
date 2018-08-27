
//question array, the answer array, and the incorrect answer array
//set up with radio buttons after the object Timer.

var qArr = ["1. Who is the father of western philosophy?", "2. Which philosopher said I think therefore I am?", 
"3. What is Platos theory of forms talk about?", "4. Who was the father of modernism?","5. What was Socretes known for?", 
"6. Kant wrote which of these books?", "7. Which philosopher came up with deconstructionism?", "8. Hegel wrote which of these books?", 
"9. Sophies World was a book written to explain all western philosophy in narrative - who was this book marketted towards initially?", 
"10. The cave analogy was written by Plato to explain what?", "11. This philospher was a Rationalist, birthed the 'theory of probability' in mathmatics?", 
"12. This philosopher came up with evolution.", "13. This philosopher was more or less the father of modern psychology.", 
"14.This philosopher came up with the uberman and is know for being the father of atheism.", 
"15.Who wrote Fear and Trembling andthe famous consept of the leap of faith.", 
"16. Socialism was invented by.","17. Foucalt was known for what book?", "18. Lyotard was known for book in postmodernism?", 
"19. Machiavelli did what for philosophy?", "20. Spinoza did what famous contribution to philosophy?"];
//reminder for the future place spaces before and after each so it displays better with the radio buttons
var aArr = [" Plato ", " Descartes ", " That invisible forms represent the most true ideal expression of reality. ", " Descartes ",
" He is credited with laying the fundamentals of modern Western philosophy. He is known for creating Socratic irony and the Socratic method. ", 
" Religion Within the Limits of Reason Alone", " Derrida", "Time and Being", "high school freshman ", " The awoken man ", " Pascal ", " Darwin ", " Freud ", 
" Nietzche ", " Keirkegaard ", " Marx ", " Discipline and Punish ", " The Postmodern Condition: A Report on Knowledge ", 
" Being regarded as the father of modern political science ", 
" He was best known for his Ethics, a monumental work that presents an ethical vision unfolding out of a monistic metaphysics in which God and Nature are identified. "];
var iArr = [" Socretes", " Hume ", " Forms are real and matter ethically. ", " Hobbs ",
" He was Plato's student. ", " Book of Reasonable Philosophy ", " Paine ", " Between Time ", 
" Graduate Students ", " The asleep man ", " Bacon ", " Dalton ", " Dewey ", " Plato ", " Bergson ",
" Keirkegaard ", " Crime and Politics ", " The Modern Condition: A Report on Reason ", 
" Being regarded as the father of modern social science ", " Best known for the theory on Being "];

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
Timer.stopReset();
}

var Timer = {
    //set time to 3 minutes
    time: 180,
    //reset function  for timer (expect this to work with the submit button later)
    stopReset: function() {
        time =0;
        $("#display").text("00:00");
        clearInterval(intervalId);
        timerRunning = false;
    },
    start: function() {
        //if the timer is not running do this if statement
        if(!timerRunning){
            intervalId = setInterval(Timer.count, 1000);
            timerRunning = true;
        }
     
    },
    count: function (){

        if(timerRunning){
            //should desend in time
            Timer.time --;
            var converted = Timer.timeConverter(Timer.time);
             //trying to display what is in the console.log but it is not currently
            $("#displayCountDown").html("<h2>Time Remaining: " + converted + "</h2>");
        }
       
        //tring to make it so the counter does not continue past 0
        if(Timer.time === 0){
            timerRunning = false;
        }
   
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
    //declaring the questions to a paragraph with the text being read from 
    //the array in order of the array. 
    var theQ = $("<br><p>").text(qArr[i]);
    //be keen to note the name is needed so only 1 answer will allow for per <p> 
    //added <br> to make them line up vertically
    var theA = $("<br><input type='radio' name='answerGroup"+i+"' value = 'correct'>"); 
    var theI = $("<br><input type='radio' name='answerGroup"+i+"' value = 'incorrect'>");

    //appending the form with the questions
    theForm.append(theQ);
    
        //appending the form with the correct answers for the radio button, 
        //then appending the aArr with index of i 
         theForm.append(theA);
        theForm.append(aArr[i]);

        //appending the form with the incorrect answers for the radio button,
        // then appending the iArr with index of i 
        theForm.append(theI);
        theForm.append(iArr[i])

    //created a class for trivia that this whole form will append inside of.
    $(".trivia").append(theForm);
    //not sure if I should do a if else statement
   
    }

    practice()
    function practice(){
        $(".test").text("Testing application")
    }



    //function to randomize the aArr and iArr
    randomizer();
    function randomizer(){
        rando =[theA, theI];
    var random = Math.floor(Math.random(rando))
   
    }  

    //adding up the correct answer
    correctAnswer();
    function correctAnswer(){

        //if in the form the answer is check alert correct "checked" wasnt worked
        var checked = correctAnswer ++;
    //    ======================for loop that I will use once it works==============================================================
        //trying to make a for loop for locating the buttons picked. Not finished yet
        // for(i=0; i<answerGroup.length; i++){
        //     if($("input[name="answerGroup" + i]:checked"){
        //         if ( $(this).attr(value) == "correct" ) {
        //         alert(correctAnswer);
        //         }else{  
        //             incorrectAnswer++;
        //             alert(incorrectAnswer);
        //         }
        //     }
        // }

// ==============================end of for loop that will be used ================================================================



        // =====================================================================================================
       //tried this first but it didnt work
        // var user;
        // //if user picks the correct button answer
        // if (user === aArr[i]){
        //     //trying to get this to submit the calculated answers 
        //     theA = $("<br><input name='Submit1' type='submit' value= 'submit' onclick='Test(this.form)'>")
        //     correctAnswer ++;
        //     $("#returnScore").html("Pretend I have a working game and you won! ")
        // }
    }
}

/* attempted several ways to get the function of randomizer to work... not working. */