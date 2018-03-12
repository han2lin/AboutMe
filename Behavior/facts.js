addLoadListener(initialize_events);

function initialize_events(){    
    
    var glideClose = document.getElementById("closeAnswer");
    var reset_button = document.getElementById("resetb");
    
    var user_button = document.getElementById("hover");
    
    
    
    var A1 = document.getElementById("A1");
    var A2 = document.getElementById("A2");
    var A3 = document.getElementById("A3");
    var B1 = document.getElementById("B1");
    var B2 = document.getElementById("B2");
    var B3 = document.getElementById("B3");
    var C1 = document.getElementById("C1");
    var C2 = document.getElementById("C2");
    var C3 = document.getElementById("C3");
    
    attachEventListener(A1, "click", A1_click_event_handler, false);
    attachEventListener(A2, "click", A2_click_event_handler, false);
    attachEventListener(A3, "click", A3_click_event_handler, false);
    attachEventListener(B1, "click", B1_click_event_handler, false);
    attachEventListener(B2, "click", B2_click_event_handler, false);
    attachEventListener(B3, "click", B3_click_event_handler, false);
    attachEventListener(C1, "click", C1_click_event_handler, false);
    attachEventListener(C2, "click", C2_click_event_handler, false);
    attachEventListener(C3, "click", C3_click_event_handler, false);


    attachEventListener(glideClose, "click", glideClose_click_event_handler, false);
    attachEventListener(reset_button, "click", reset_button_click_event_handler, false);
    attachEventListener(user_button, "click", user_button_click_event_handler, false);
    
};

var guessT = 0;
var previous ="";
var resetT = 0;
var change1 = 0;
var hidden = 0;

function highlight(id){
    var sheet = document.styleSheets[2];
    if (previous !== id) {
    if (guessT == 1 && resetT == 0 || hidden == 1 && resetT == 0){
        sheet.deleteRule(4);
        change1 = 1;
    }
    
    previous = id;
    sheet.insertRule("#" + id + "{ background-color: rgba(143, 95, 245, 0.5) !important;}", 4);
    resetT = 0;
    return;
    }
}



function A1_click_event_handler(){
    document.getElementById("answer2").innerHTML = "You don't believe that?";
    highlight("A1");
    displayAnswer();
}
function A2_click_event_handler(){
    document.getElementById("answer2").innerHTML = "Ask my sister. I think she'll say it's true.";
    highlight("A2");
    displayAnswer();

}
function A3_click_event_handler(){
    document.getElementById("answer2").innerHTML = "Yes, this is the one that is false. I don't know why this website is so blue and purple&hellip;";
    highlight("A3");
    displayAnswer();

}
function B1_click_event_handler(){
    document.getElementById("answer2").innerHTML = "That's true.";
    highlight("B1");
    displayAnswer();
}
function B2_click_event_handler(){
    document.getElementById("answer2").innerHTML = "Ask Rapunzel. I think she'll raise the \"3.5 ounces\" to at least 100 pounds.";
    highlight("B2");
    displayAnswer();
}
function B3_click_event_handler(){
    document.getElementById("answer2").innerHTML = "That should be true&mdash;unless you are the President of Antarctica or the King of Pillows.";
    highlight("B3");
    displayAnswer();
}
function C1_click_event_handler(){
    document.getElementById("answer2").innerHTML = "Sorry, it wasn't taken by you. Rober Cornelius beat you to it.";
    highlight("C1");
    displayAnswer();
}
function C2_click_event_handler(){
    document.getElementById("answer2").innerHTML = "Ask any pig (just not Babe, Wilbur, Piglet, or Napoleon). I think it'll need to check the dictionary for \"sky.\"";
    highlight("C2");
    displayAnswer();
}
function C3_click_event_handler(){
    document.getElementById("answer2").innerHTML = "Bubble wrap was supposed to be a 3D plastic wallpaper.";
    highlight("C3");
    displayAnswer();
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
        sheet.insertRule("@-webkit-keyframes showAnswer{0%  {left: 700px;} 100% {left: 0px;}}", 7);
    }
    else
    { 
        sheet.insertRule("@keyframes showAnswer{0% {left: 700px;} 100% {left: 0px;}}", 7);
    }
    sheet.insertRule("#answerContainer {-webkit-animation: showAnswer 0.5s ease-in; animation: showAnswer 0.5s ease-in;}" , 6);
    var answerGlide = document.getElementById("answerContainer")
    answerGlide.style.left = "0px";
    glideAnimationDone();

    //displayRun = 1;
    guessT = 1;
    hidden = 0;
    return;
    }
}


function glideAnimationDone() {
    setTimeout(function() {
        var sheet = document.styleSheets[2]
        sheet.deleteRule(6);
       
        var answerGlide = document.getElementById("answerContainer")
        answerGlide.style.left = "0px";
       }, 500);
}
function hideAnimationDone() {
    setTimeout(function() {
        var sheet = document.styleSheets[2]
        console.log(sheet);
        sheet.deleteRule(6);
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
        sheet.insertRule("@-webkit-keyframes hideAnswer{0%  {left: 0px;} 100% {left: 700px;}}", 7);
        sheet.insertRule("#answerContainer {-webkit-animation: hideAnswer 0.5s ease-in;}" , 6);
    }
    else
    { 
        sheet.insertRule("@keyframes hideAnswer{0% {left: 0px;} 100% {left: 700px;}}", 7);
        sheet.insertRule("#answerContainer {animation: hideAnswer 0.5s ease-in;}" , 6);
    }
    hideAnimationDone(); 
  
    guessT = 0;
    hidden = 1;
}






//reset button handler
function reset_button_click_event_handler(){
    document.getElementById("answer2").innerHTML = "Please select an answer.";
    
    var sheet = document.styleSheets[2];
    sheet.deleteRule(4);
    
    resetT = 1;
    guessT = 1;
    previous = "";
    return;

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

