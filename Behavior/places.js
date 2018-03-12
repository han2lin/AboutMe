addLoadListener(initialize_events);

function initialize_events(){    
    
    var submitb_element = document.getElementById("submitb");
    // var close_button = document.getElementById("close");
    //var BG = document.getElementById("BG2");
    var glideClose = document.getElementById("closeAnswer");
    var reset_button = document.getElementById("resetb");
    
    var user_button = document.getElementById("hover");
   // var user_arrow = document.getElementById("arrow");

    attachEventListener(submitb_element, "click", submitb_element_click_event_handler, false);
    // attachEventListener(close_button, "click", close_button_click_event_handler, false);
    // attachEventListener(BG, "click", BG_button_click_event_handler, false);
    attachEventListener(glideClose, "click", glideClose_click_event_handler, false);
    attachEventListener(reset_button, "click", reset_button_click_event_handler, false);
    attachEventListener(user_button, "click", user_button_click_event_handler, false);
    //attachEventListener(user_arrow, "click", user_arrow_click_event_handler, false);
    
};

//user arrow button handler
/*function user_arrow_click_event_handler(){
    user_button_click_event_handler();
    return;
}*/

//username button handler
function user_button_click_event_handler() {
    console.log("user clicked");
    var userOpt = document.getElementById("useropt");
    var usern = document.getElementById("usern");
    usern.style.fontWeight = "bold";

    console.log(userOpt);
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
        console.log("message IS clicked!");
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
        console.log("messageClicked is " + messageClicked + " outsideClicked is " + outsideClicked);
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
            console.log("close user options");
            messageClicked = "no"
            outsideClicked = "no"
            return;
        }
    }

}
/*
function endFunct(){
   console.log("endFunct done");
    return false;
}*/

/*var where = 0
var time = 0

function closeUserOpts(){
    var secondClick = document.getElementById("container");
    // var messageClick = document.getElementById("message");
    var userOpt = document.getElementById("useropt"); 
 
    attachEventListener(secondClick, "click", secondClick_click_event_handler, false);
    // attachEventListener(messageClick, "click", messageClick_click_event_handler, false);
    
    console.log("outside of functions: " + where);
    
    function secondClick_click_event_handler(){
        console.log("before adding: " + where);
        where = where + 1;
        console.log("secondClick: where " + where + " secondClick: time " + time);
        closeOpt();
        return;
    }
    
    
    function closeOpt(){
        if (where = 1 + time && where > 1 && time == 0){
            console.log("closeOpt: where " + where);
            console.log("where > 1");
            where = 0;
            time = time + 1;
            console.log("time " + time);
            return;
        }
        else if (where = 1 + time && time > 0) {
            console.log("closing for >1 time");
            where = -1;
            time = time + 1;
            return;
        }
        return;
    }
    
    return;
}
*/




//submit button handler
var guessT = 0;

function submitb_element_click_event_handler() {
    var radgroup = document.forms["guess_places"];
    console.log("dipslay");
    if (getAnswer(radgroup) === true){
        console.log(guessT);
        if (guessT == 0){
            displayAnswer();
        }
        return false;
    }
    else 
    {
        document.getElementById("answer2").innerHTML = "Please select an answer.";
        if (guessT == 0){
            displayAnswer();
            guessT == 1;
        }
        console.log(guessT);
        return false;
        }
}


//display animation:
function displayAnswer(){

    var answerGlide = document.getElementById("answerContainer");
    var sheet = document.styleSheets[2]
    
    var Safari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor')>0;
    var Opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var Chrome = !!window.chrome && !Opera;
 
    if (Safari == true || Chrome == true){
        sheet.insertRule("@-webkit-keyframes showAnswer{0%  {left: 700px;} 100% {left: 0px;}}", 1);
        console.log("showAnswer, sheetRules added, Safari/Chrome");
    }
    else
    { 
        sheet.insertRule("@keyframes showAnswer{0% {left: 700px;} 100% {left: 0px;}}", 1);
    }
    sheet.insertRule("#answerContainer {-webkit-animation: showAnswer 0.5s ease-in; animation: showAnswer 0.5s ease-in;}" , 2);
    var answerGlide = document.getElementById("answerContainer")
    answerGlide.style.left = "0px";
    //sheet.insertRule("html {}", 3);
    glideAnimationDone();

    guessT = 1;
    return;

}


function glideAnimationDone() {
    setTimeout(function() {
        var sheet = document.styleSheets[2]
        console.log(sheet);
        //sheet.deleteRule(1);
        sheet.deleteRule(2);
        //sheet.deleteRule(3);
        console.log("glideAnimationDone, deleted");
       
        var answerGlide = document.getElementById("answerContainer")
        answerGlide.style.left = "0px";
       }, 500);
}
function hideAnimationDone() {
    setTimeout(function() {
        var sheet = document.styleSheets[2]
        console.log(sheet);
        //sheet.deleteRule(1);
        sheet.deleteRule(2);
        //sheet.deleteRule(3);
        console.log("hideAnimationDone, deleted");
       
        var answerGlide = document.getElementById("answerContainer")
        answerGlide.style.left = "700px";
       }, 500);
}
  
    
//glide-answer close button
function glideClose_click_event_handler(){
    hide();
}

function hide(){

    var answerGlide = document.getElementById("answerContainer");
    var sheet = document.styleSheets[2]
    
    var Safari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor')>0;
    var Opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var Chrome = !!window.chrome && !Opera;
 
    if (Safari == true || Chrome == true){
        sheet.insertRule("@-webkit-keyframes hideAnswer{0%  {left: 0px;} 100% {left: 700px;}}", 1);
        console.log("hideAnswer, rule1 added, Safari/Chrome");
        sheet.insertRule("#answerContainer {-webkit-animation: hideAnswer 0.5s ease-in;}" , 2);
        console.log("hideAnswer, rule2 added, Safari/Chrome");
    }
    else
    { 
        sheet.insertRule("@keyframes hideAnswer{0% {left: 0px;} 100% {left: 700px;}}", 1);
        console.log("hideAnswer, rule1 added, NonS/C");   
        sheet.insertRule("#answerContainer {animation: hideAnswer 0.5s ease-in;}" , 2);
    }
    //sheet.insertRule("#answerContainer {-webkit-animation: hideAnswer 0.5s ease-in; animation: hideAnswer 0.5s ease-in;}" , 2);
    //var answerGlide = document.getElementById("answerContainer")
    //answerGlide.style.left = "700px";
    //sheet.insertRule("body {}", 3);
    hideAnimationDone(); 

  
    guessT = 0;
    

}

//reset button handler
function reset_button_click_event_handler(){
    document.getElementById("answer2").innerHTML = "Please select an answer.";
}


//answer generator:

function getAnswer(radgroup){
    console.log(radgroup);
    for (var i=0; i<radgroup.length; i++)
    {
        if(radgroup[i].checked === true)
            {
                console.log(radgroup[i].value);
                var guess = radgroup[i].value;
                console.log("getAnswer");
                console.log(guess);
                return checkAnswer(guess);
                break;
            }
    }
}

function checkAnswer(guess){
    if (guess === "Canada" || guess=== "France"){
        console.log("country");
        document.getElementById("answer2").innerHTML = "Incorrect.";
        return true;
    }
    else if (guess === "LV"){
        console.log("LV");
        document.getElementById("answer2").innerHTML = "Close. (No pun intended.)";
        return true;
    }
    else if (guess === "GCNP"){
        document.getElementById("answer2").innerHTML = "Nope.";
        return true;
        
    }
    else if (guess === "CA"){
        document.getElementById("answer2").innerHTML = "Correct! Home sweet home!";
        return true;
        
    }
    else if (guess === "Taiwan"){
        document.getElementById("answer2").innerHTML = "The food there is good, but nope...";
        return true;
        
    }
    else if (guess === "Venice"){
        document.getElementById("answer2").innerHTML = "Haven't been there yet! Try again.";
        return true;
        
    }
    else if (guess === "TS"){
        document.getElementById("answer2").innerHTML = "Haven't been there yet! Try again.";
        return true;
        
    }
    else if (guess === "Mars"){
        document.getElementById("answer2").innerHTML = "Oops! I'm not an alien. Try again.";
        return true;
        
    }

}

//popup answer handler
/*function submitb_element_click_event_handler(){
    var radgroup = document.forms["guess_places"];
    console.log("dipslay");
    if (getAnswer(radgroup) === true){
        console.log("true");
        document.getElementById("answerChoice").style.display="block";
        document.getElementById("BG2").style.display="block";
        return false;
    }
    else {
            console.log("select answer");
            document.getElementById("answer2").innerHTML = "Please select an answer.";
        document.getElementById("answerChoice").style.display="block";
        document.getElementById("BG2").style.display="block";
        return false;
        }
}*/

//popup-answer close button or BG clicking
/*function close_button_click_event_handler(){
document.getElementById("answerChoice").style.display="none";
    document.getElementById("BG2").style.display="none";
}

function BG_button_click_event_handler(){
document.getElementById("answerChoice").style.display="none";
    document.getElementById("BG2").style.display="none";
}
*/



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

