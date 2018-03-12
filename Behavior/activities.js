addLoadListener(initialize_events);

function initialize_events(){    
    var user_button = document.getElementById("hover");
    var submitb_element = document.getElementById("submitb");
    var glideClose = document.getElementById("closeAnswer");
    var reset_button = document.getElementById("resetb");

    attachEventListener(user_button, "click", user_button_click_event_handler, false);
    attachEventListener(submitb_element, "click", submitb_element_click_event_handler, false);
    attachEventListener(glideClose, "click", glideClose_click_event_handler, false);
    attachEventListener(reset_button, "click", reset_button_click_event_handler, false);
}
    



//submit button handler

var guessT = 0;

var selected =""

function submitb_element_click_event_handler(){
    var total = 0;
    var act = document.forms[0].act;
    var i;
    for (i=0; i<act.length; i++){
        if (act[i].checked){
            total = total +1;
        }
    }
    checkAnsNum(total);
    console.log(total);

}

function checkAnsNum(total){
    if (total == 3){
        getValues();
        displayAnswer()
    }
    else if (total > 3){
        document.getElementById("answer2").innerHTML = "Please only select three.";
        displayAnswer()

    }
    else if (total < 3){
        document.getElementById("answer2").innerHTML = "Please select three.";
        displayAnswer();
    }
}

//answer generator:
function getValues(){
    var selectedStr = "";
    var act = document.forms[0].act;
    var i;
    for (i=0; i<act.length; i++){
        if (act[i].checked){
            selectedStr = selectedStr + act[i].value;
        }
    }
    enterVal(selectedStr);
}

function enterVal(selectedStr){
    if (selectedStr == 2811){
        document.getElementById("answer2").innerHTML = "That's right! Great job!";
    }
    else {
    var num = Math.floor(Math.random() * 10) + 1;
    console.log(num);
    switch (num) {
    
       case 1:
           document.getElementById("answer2").innerHTML = "Sorry, that's wrong.";
           break;
       case 2:
           document.getElementById("answer2").innerHTML = "That's not right.";
           break;
       case 3:
           document.getElementById("answer2").innerHTML = "Try again.";
           break;
       case 4:
           document.getElementById("answer2").innerHTML = "Incorrect.";
           break;
       case 5:
           document.getElementById("answer2").innerHTML = "Try a different three.";
           break;
       case 6:
           document.getElementById("answer2").innerHTML = "No, guess again.";
           break;
       case 7:
           document.getElementById("answer2").innerHTML = "Nice try, but no.";
           break;
       case 8:
           document.getElementById("answer2").innerHTML = "Incorrect.";
           break;
       case 9:
           document.getElementById("answer2").innerHTML = "Oops, that's not right.";
           break;
       case 10:
           document.getElementById("answer2").innerHTML = "Nope.";
           break;
      
       default:
           document.getElementById("answer2").innerHTML = "Error";           
           break;
    }
    }

}



//display animation:
function displayAnswer(){
    if (guessT == 1){
        return;
    }
    else {
    var answerGlide = document.getElementById("answerContainer");
    var sheet = document.styleSheets[2]
    
    var Safari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor')>0;
    var Opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var Chrome = !!window.chrome && !Opera;
 
    if (Safari == true || Chrome == true){
        sheet.insertRule("@-webkit-keyframes showAnswer{0%  {left: 700px;} 100% {left: 0px;}}", 1);
    }
    else
    { 
        sheet.insertRule("@keyframes showAnswer{0% {left: 700px;} 100% {left: 0px;}}", 1);
    }
    sheet.insertRule("#answerContainer {-webkit-animation: showAnswer 0.5s ease-in; animation: showAnswer 0.5s ease-in;}" , 2);
    var answerGlide = document.getElementById("answerContainer")
    answerGlide.style.left = "0px";

    glideAnimationDone();
    guessT = 1;
    return;
    }
}


function glideAnimationDone() {
    setTimeout(function() {
        var sheet = document.styleSheets[2]
        sheet.deleteRule(2);
       
        var answerGlide = document.getElementById("answerContainer")
        answerGlide.style.left = "0px";
       }, 500);
}
function hideAnimationDone() {
    setTimeout(function() {
        var sheet = document.styleSheets[2]
        console.log(sheet);
        sheet.deleteRule(2);
       
        var answerGlide = document.getElementById("answerContainer")
        answerGlide.style.left = "700px";
       }, 500);
}
  
    
//glide-answer close button
function glideClose_click_event_handler(){

    var answerGlide = document.getElementById("answerContainer");
    var sheet = document.styleSheets[2]
    
    var Safari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor')>0;
    var Opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var Chrome = !!window.chrome && !Opera;
 
    if (Safari == true || Chrome == true){
        sheet.insertRule("@-webkit-keyframes hideAnswer{0%  {left: 0px;} 100% {left: 700px;}}", 1);
        sheet.insertRule("#answerContainer {-webkit-animation: hideAnswer 0.5s ease-in;}" , 2);
    }
    else
    { 
        sheet.insertRule("@keyframes hideAnswer{0% {left: 0px;} 100% {left: 700px;}}", 1);
        sheet.insertRule("#answerContainer {animation: hideAnswer 0.5s ease-in;}" , 2);
    }
    hideAnimationDone(); 

  
    guessT = 0;
    

}

//reset button handler
function reset_button_click_event_handler(){
    document.getElementById("answer2").innerHTML = "Please select three.";
}












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

