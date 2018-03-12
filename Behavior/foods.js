addLoadListener(initialize_events);

function initialize_events(){    
    
    var user_button = document.getElementById("hover");
    var breakfast_submit = document.getElementById("breakfastb");
    var lunch_submit = document.getElementById("lunchb");
    var dinner_submit = document.getElementById("dinnerb");
    var reset_button = document.getElementById("resetbAll");

    
    attachEventListener(user_button, "click", user_button_click_event_handler, false);
    attachEventListener(breakfast_submit, "click", breakfast_submit_click_event_handler, false);
    attachEventListener(lunch_submit, "click", lunch_submit_click_event_handler, false);
    attachEventListener(dinner_submit, "click", dinner_submit_click_event_handler, false);
    attachEventListener(reset_button, "click", reset_button_click_event_handler, false);

  
};


//for all: get answer value

function retrieveAV(divID){
    var e = document.getElementById(divID);
    return getValue = e.options[e.selectedIndex].value;
}


//breakfast submit button handler
function breakfast_submit_click_event_handler(){
    answerVal(retrieveAV("bk"));
    return;
    
}



//lunch submit button handler
function lunch_submit_click_event_handler(){
    answerVal(retrieveAV("l"));
    return;
}


//dinner submit button handler
function dinner_submit_click_event_handler(){
    answerVal(retrieveAV("d"));
    return;
}



var guessBK = 0
var guessL = 0
var guessD = 0

var correctBK = false;
var correctL = false;
var correctD = false;

var allAnswOpen = false;


function answerVal (list){
    switch (list) {
       case "0":
           document.getElementById("answerBreakfast").innerHTML = "Please choose one.";
           if (guessBK == 0) {
               displayAnswer("answer1Container");
               guessBK = 1;
           }
           checkFalse(correctBK);
           break;
       case "1":
           document.getElementById("answerBreakfast").innerHTML = "Nope.";
            if (guessBK == 0) {
               displayAnswer("answer1Container");
               guessBK = 1;
           }
           checkFalse(correctBK);
           break;
       case "2":
           document.getElementById("answerBreakfast").innerHTML = "Try again.";
            if (guessBK == 0) {
               displayAnswer("answer1Container");
               guessBK = 1;
           }
           checkFalse(correctBK);
           break;
       case "3":
           document.getElementById("answerBreakfast").innerHTML = "Incorrect.";
            if (guessBK == 0) {
               displayAnswer("answer1Container");
               guessBK = 1;
           }
           checkFalse(correctBK);
           break;
       case "4":
           document.getElementById("answerBreakfast").innerHTML = "Correct!";
            if (guessBK == 0) {
               displayAnswer("answer1Container");
               guessBK = 1;
           }
           correctBK = true;
           allAnswers();
           break;
       case "5":
           document.getElementById("answerBreakfast").innerHTML = "Opps! Incorrect.";
            if (guessBK == 0) {
               displayAnswer("answer1Container");
               guessBK = 1;
           }
           checkFalse(correctBK);
           break;
       case "6":
           document.getElementById("answerBreakfast").innerHTML = "Nope.";
            if (guessBK == 0) {
               displayAnswer("answer1Container");
               guessBK = 1;
           }
           checkFalse(correctBK);
           break;
       case "7":
           document.getElementById("answerBreakfast").innerHTML = "Incorrect.";
            if (guessBK == 0) {
               displayAnswer("answer1Container");
               guessBK = 1;
           }
           checkFalse(correctBK);
           break;
       case "8":
           document.getElementById("answerBreakfast").innerHTML = "Incorrect.";
            if (guessBK == 0) {
               displayAnswer("answer1Container");
               guessBK = 1;
           }
           checkFalse(correctBK);
           break;
       
       //******lunch:*********
       case "9":
           document.getElementById("answerLunch").innerHTML = "Please choose one.";
            if (guessL == 0) {
               displayAnswer("answer2Container");
               guessL = 1;
           }
           checkFalse(correctL);
           break;
       case "10":
           document.getElementById("answerLunch").innerHTML = "Eww. No.";
            if (guessL == 0) {
               displayAnswer("answer2Container");
               guessL = 1;
           }
           checkFalse(correctL);
           break;
       case "11":
           document.getElementById("answerLunch").innerHTML = "Nope!";
            if (guessL == 0) {
               displayAnswer("answer2Container");
               guessL = 1;
           }
           checkFalse(correctL);
           break;
       case "12":
           document.getElementById("answerLunch").innerHTML = "Incorrect.";
            if (guessL == 0) {
               displayAnswer("answer2Container");
               guessL = 1;
           }
           checkFalse(correctL);
           break;
       case "13":
           document.getElementById("answerLunch").innerHTML = "Incorrect.";
            if (guessL == 0) {
               displayAnswer("answer2Container");
               guessL = 1;
           }
           checkFalse(correctL);
           break;
       case "14":
           document.getElementById("answerLunch").innerHTML = "Try again.";
            if (guessL == 0) {
               displayAnswer("answer2Container");
               guessL = 1;
           }
           checkFalse(correctL);
           break;
       case "15":
           document.getElementById("answerLunch").innerHTML = "I'm no shark.";
            if (guessL == 0) {
               displayAnswer("answer2Container");
               guessL = 1;
           }
           checkFalse(correctL);
           break;
       case "16":
           document.getElementById("answerLunch").innerHTML = "Yes, that's right!";
            if (guessL == 0) {
               displayAnswer("answer2Container");
               guessL = 1;
           }
               correctL = true;
               allAnswers();
           break;
       case "17":
           document.getElementById("answerLunch").innerHTML = "&hellip;I don't eat that for lunch.";
            if (guessL == 0) {
               displayAnswer("answer2Container");
               guessL = 1;
           }
           checkFalse(correctL);
           break;
           
       //******dinner:*********
       case "18":
           document.getElementById("answerDinner").innerHTML = "Please choose one.";
            if (guessD == 0) {
               displayAnswer("answer3Container");
               guessD = 1;
           }
           checkFalse(correctD);
           break;
       case "19":
           document.getElementById("answerDinner").innerHTML = "Incorrect.";
            if (guessD == 0) {
               displayAnswer("answer3Container");
               guessD = 1;
           }
           checkFalse(correctD);
           break;
       case "20":
           document.getElementById("answerDinner").innerHTML = "Try again.";
            if (guessD == 0) {
               displayAnswer("answer3Container");
               guessD = 1;
           }
           checkFalse(correctD);
           break;
       case "21":
           document.getElementById("answerDinner").innerHTML = "Try again.";
            if (guessD == 0) {
               displayAnswer("answer3Container");
               guessD = 1;
           }
           checkFalse(correctD);
           break;
       case "22":
           document.getElementById("answerDinner").innerHTML = "Incorrect.";
            if (guessD == 0) {
               displayAnswer("answer3Container");
               guessD = 1;
           }
           checkFalse(correctD);
           break;
       case "23":
           document.getElementById("answerDinner").innerHTML = "Try again.";
            if (guessD == 0) {
               displayAnswer("answer3Container");
               guessD = 1;
           }
           checkFalse(correctD);
           break;
       case "24":
           document.getElementById("answerDinner").innerHTML = "Incorrect.";
            if (guessD == 0) {
               displayAnswer("answer3Container");
               guessD = 1;
           }
           checkFalse(correctD);
           break;
       case "25":
           document.getElementById("answerDinner").innerHTML = "Nope.";
            if (guessD == 0) {
               displayAnswer("answer3Container");
               guessD = 1;
           }
           checkFalse(correctD);
           break;
       case "26":
           document.getElementById("answerDinner").innerHTML = "Correct!";
            if (guessD == 0) {
               displayAnswer("answer3Container");
               guessD = 1;          
           }
           correctD = true;
           allAnswers();
           break;
       
       default:
           document.getElementById("answerFinal").innerHTML = "Error";
           displayAnswer("answerContainer");
           
           break;
    }

}

function checkFalse(mealVar){
    mealVar = false;
    if (allAnswOpen == true){
        hideAllAnimation();
        allAnswOpen = false;
        return;
    }
}


function allAnswers() {
    if (correctBK == true && correctL == true && correctD == true && allAnswOpen == false){
    setTimeout(function() {
        displayFinalAnswer();
    }, 250);
    allAnswOpen = true;
    }
}


//display animation:

function displayAnswer(answID){

    var answerGlide = document.getElementById(answID);
    var sheet = document.styleSheets[2]
    
    var Safari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor')>0;
    var Opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var Chrome = !!window.chrome && !Opera;
 
    if (Safari == true || Chrome == true){
        sheet.insertRule("@-webkit-keyframes showAnswer{0%  {left: 330px;} 100% {left: 62px;}}", 2);
    }
    else
    { 
        sheet.insertRule("@keyframes showAnswer{0% {left: 330px;} 100% {left: 62px;}}", 2);
    }
    sheet.insertRule("#" + answID + " {-webkit-animation: showAnswer 0.25s ease-in; animation: showAnswer 0.25s ease-in;}" , 1);
    answerGlide.style.left = "62px";
    glideAnimationDone(answID);

    return;

}


function glideAnimationDone(answID) {
    setTimeout(function() {
        var sheet = document.styleSheets[2]
        sheet.deleteRule(1);
       
        var answerGlide = document.getElementById(answID)
        answerGlide.style.left = "62px";
       }, 250);
}

function displayFinalAnswer(){
    var answerFinalGlide = document.getElementById("answerContainer");
    var sheet = document.styleSheets[2]
    
    var Safari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor')>0;
    var Opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var Chrome = !!window.chrome && !Opera;
 
    if (Safari == true || Chrome == true){
        sheet.insertRule("@-webkit-keyframes showFinalAnswer{0%  {left: 700px;} 100% {left: 0px;}}", 2);
        sheet.insertRule("#answerContainer {-webkit-animation: showFinalAnswer 0.5s ease-in;}" , 1);
    }
    else
    { 
        sheet.insertRule("@keyframes showFinalAnswer{0% {left: 700px;} 100% {left: 0px;}}", 2);
        sheet.insertRule("#answerContainer {animation: showFinalAnswer 0.5s ease-in;}" , 1);
    }
    var answerGlide = document.getElementById("answerContainer")
    answerGlide.style.left = "0px";
    glideFinalAnimationDone();
    return;
}

function glideFinalAnimationDone() {
    var sheet = document.styleSheets[2]
    setTimeout(function() {
        sheet.deleteRule(1);
               
        var answerGlide = document.getElementById("answerContainer")
        answerGlide.style.left = "0px";
       }, 500);
    
    sheet.insertRule(".pic:hover {cursor: default !important;}", 3);
    sheet.insertRule(".pic:active {border-color: rgba(117, 124, 211, 0.5) !important;}", 4);

    document.getElementById("bk").disabled = true;    
    document.getElementById("l").disabled = true;    
    document.getElementById("d").disabled = true;    

}


function hideAllAnimation(){
    var answerGlide = document.getElementById("answerContainer");
    var sheet = document.styleSheets[2]
    
    var Safari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor')>0;
    var Opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var Chrome = !!window.chrome && !Opera;
 


      
    if (Safari == true || Chrome == true){
        sheet.insertRule("@-webkit-keyframes closeHideAnswer{0%  {left: 0px;} 100% {left: 700px;}}", 1);
        sheet.insertRule("#answerContainer {-webkit-animation: closeHideAnswer 0.5s ease-in;}" , 0);
    }
    else
    { 
        sheet.insertRule("@keyframes closeHideAnswer{0% {left: 0px;} 100% {left: 700px;}}", 1);
        sheet.insertRule("#answerContainer {animation: closeHideAnswer 0.5s ease-in;}" , 0);
    }
   
    hideAnimationAllDone(); 

}

function hideAnimationAllDone() {
    setTimeout(function() {
        var sheet = document.styleSheets[2]
        console.log(sheet);
        sheet.deleteRule(0);
        console.log("hideAnimationDone, deleted");
       
        var answerGlide = document.getElementById("answerContainer")
        answerGlide.style.left = "700px";
       }, 500);
}
  
    
//reset button handler
function reset_button_click_event_handler(){

    var sheet = document.styleSheets[2]
    sheet.deleteRule(3);
    sheet.deleteRule(2);
        
    guessBK = 0;
    guessL = 0;
    guessD = 0;

    correctBK = false;
    correctL = false;
    correctD = false;
    allAnswOpen = false;

    document.getElementById("bk").disabled = false;    
    document.getElementById("l").disabled = false;    
    document.getElementById("d").disabled = false; 
    
    hideAllAnimation();
    hideAnimationMeals();
    

    return;
}




function hideAnimationMeals(){
    var answerGlide = document.getElementsByClassName("answerContainer");
    var sheet = document.styleSheets[2]
    
    var Safari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor')>0;
    var Opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var Chrome = !!window.chrome && !Opera;
 
    if (Safari == true || Chrome == true){
        sheet.insertRule("@-webkit-keyframes closeMealAnsws{0%  {left: 62px;} 100% {left: 335px;}}", 1);
        sheet.insertRule(".answerContainer {-webkit-animation: closeMealAnsws 0.5s ease-in;}" , 2);
    }
    else
    { 
        sheet.insertRule("@keyframes closeMealAnsws{0% {right: 62px;} 100% {right: 335;}}", 1);
        sheet.insertRule(".answerContainer {animation: closeMealAnsws 0.5s ease-in;}" , 2);
    }
   
    hideAnimationMealsDone(); 

}

function hideAnimationMealsDone() {
    setTimeout(function() {
        var sheet = document.styleSheets[2]
        sheet.deleteRule(2);
        
        document.getElementById("answer1Container").style.left = "335px";
        document.getElementById("answer2Container").style.left = "335px";
        document.getElementById("answer3Container").style.left = "335px";
        
       }, 250);
       return;
}
  
    







//username button handler
function user_button_click_event_handler() {
    var userOpt = document.getElementById("useropt");
    var usern = document.getElementById("usern");
    usern.style.fontWeight = "bold";

    userOpt.style.visibility = "visible";
    

    closeUserOpts();
    
    return;
}

function closeUserOpts() {
    var secondClick = document.getElementById("container");
    var messageClick = document.getElementById("message");
    var userOpt = document.getElementById("useropt"); 
   userOpt.style.visibility = "visibile";

    var messageClicked = "no"
    var outsideClicked = "no"


    attachEventListener(secondClick, "click", secondClick_click_event_handler, false);
    attachEventListener(messageClick, "click", messageClick_click_event_handler, false);


    function messageClick_click_event_handler(){
        userOpt.style.visibility = "visibile";
        messageClicked = "yes";

        determine();
        return;
    }

    function secondClick_click_event_handler(){
        outsideClicked = "yes";
        determine();
        return;
    }

    function determine(){
        if (messageClicked == "yes" && outsideClicked == "yes") {
            userOpt.style.visibility = "visibile";
            messageClicked = "no"
            outsideClicked = "no"
            return;
        }
        else if (messageClicked == "no" && outsideClicked == "yes") {
            var usern = document.getElementById("usern");
            usern.style.fontWeight = "500";
            userOpt.style.visibility = "hidden";
            messageClicked = "no"
            outsideClicked = "no"
            return;
        }
    }

}







function attachEventListener(target, eventType, functionRef, capture)
{
  if (typeof target.addEventListener != "undefined")
  {
    target.addEventListener(eventType, functionRef, capture);
  }
  else if (typeof target.attachEvent != "undefined")
  {
    target.attachEvent("on" + eventType, functionRef);
  }
  else
  {
    eventType = "on" + eventType;

    if (typeof target[eventType] == "function")
    {
      var oldListener = target[eventType];

      target[eventType] = function()
      {
        oldListener();

        return  functionRef();
      }
    }
    else
    {
      target[eventType] = functionRef;
    }
  }

  return true; 
}

function addLoadListener(fn)
{
  if (typeof window.addEventListener != 'undefined')
     {
        window.addEventListener('load', fn, false);
     }
  else if (typeof document.addEventListener != 'undefined')
    {
        document.addEventListener('load', fn, false);
    }
  else if (typeof window.attachEvent != 'undefined')
    {
        window.attachEvent('onload', fn);
    }
  else
    {
        var oldfn = window.onload;
        if (typeof window.onload != 'function')
        {
            window.onload = fn;
        }
        else
        {
            window.onload = function()
            {
                oldfn();
                fn();
            };
        }
    }
}

