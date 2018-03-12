add_load_listener(initialize_events);

function initialize_events()
{
    time();
    
    resetb_element_click_event_handler();
    var username_element = document.getElementById("username");
    var submitb_element = document.getElementById("loginb");
    var resetb_element = document.getElementById("resetb");
    var logon_form = document.forms["login_form"];
    
    username_element = username_element.defaultValue;
    
    // attach_event_listener(username_element, "mousedown", username_element_mousedown_event_handler, false);
    // attach_event_listener(username_element, "blur", username_element_blur_event_handler, false);
    attach_event_listener(submitb_element, "click", submitb_element_click_event_handler, false);
    attach_event_listener(resetb_element, "click", resetb_element_click_event_handler, false);
}
var tryT = 0;
var userTryT = "";
var seconds_left = 300;


function user_enter(event){
    var key = event.keyCode
    if (key === 13){
        document.getElementById("password").focus();
        return;
    }
}

function pword_enter(event){
    var key = event.keyCode
    if (key === 13){
        document.getElementById("loginb").click(); 
        return;
    }
}

function resetb_element_click_event_handler(){
    document.getElementById("username").focus();
    document.forms["login_form"].reset();
    document.getElementById("status").innerHTML = "<br>";

    seconds_left = 300;
    
    return;
}



function submitb_element_click_event_handler()
{
    var username_element = document.getElementById("username")
    var password_element = document.getElementById("password")
    var status_element = document.getElementById("status")
    

    if(username_element.value == "" && password_element.value == "")
    {
        status_element.innerHTML = "*Please enter a username and a password.";
        username_element.focus();
        return false;
    }
    else if (username_element.value == "" && password_element.value !== "")
    {
        status_element.innerHTML = "*Please enter your username.";
        username_element.focus();
        return false;
    }
    else if (username_element.value !== "" && password_element.value == "")
    {
        status_element.innerHTML = "*Please enter your password";
        password_element.focus();
        return false;
    }
    else {
        tU = testUser(username_element.value);
        if (tU == true){
            if (username_element.value == "guest1" && password_element.value == "passWord1"){
                status_element.innerHTML = "*Login successful!";
                setTimeout(function() {
                window.location = "Structure/welcome.html";
                }, 1000);
            }
            else {
                status_element.innerHTML = "*Invalid username/password.";
                username_element.focus();
                return false;
            }
        }
        else if (tU == 1){
            status_element.innerHTML = "*Warning 1: locked.";
        }
        else if (tU == 2){
            status_element.innerHTML = "*Invalid username/password. Warning: You have 2 more tries.";
        }
        else if (tU == 3){
            status_element.innerHTML = "*Invalid username/password. Warning: You have 1 more try.";
        }
        else if (tU == "locked"){
            status_element.innerHTML = "*Invalid username/password.";
            lock();
        }
        else {
            status_element.innerHTML = "*Error. Please try again.";
        }
    }
    
}


function time(){
    var countdown = document.getElementById("countdown");
    var target = 0;
    seconds_left = 300;
    
    setInterval(function () {
 
        seconds_left = (seconds_left - target);
        
        var minutes = Math.floor(seconds_left / 60);
        var seconds = seconds_left % 60;
        
        countdown.innerHTML = (minutes + "min " + seconds + "s");
        
        seconds_left = seconds_left - 1;
        if (seconds_left == 0){
            endtime();
        }
    }, 1000);
    return;
}






function lock(){
    resetb_element_click_event_handler();
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("answerChoice").style.display = "block";
    document.getElementById("BG2").style.display = "block";     
   return;
}

function endtime(){
    document.getElementById("username").disabled = false;
    document.getElementById("password").disabled = false;
    document.getElementById("answerChoice").style.display = "none";
    document.getElementById("BG2").style.display = "none";  

    tryT = 0;
    userTryT = "";
    resetb_element_click_event_handler();
    return;
}

function testUser(username){
   if (userTryT == username){
    tryT = tryT + 1;
        if (tryT < 2) {
            return true;
        }
        else if (tryT < 4) {
            return tryT;
        }
        else if (tryT == 4){
            return "locked";
        }
        else {
            return false;
        }
    }
    else {
    tryT = 0;
    userTryT = username;
    return true;
    }
}

function add_load_listener(fn)
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

function attach_event_listener(target, event_type, function_reference, capture)
{
    if (typeof target.addEventListener !='undefined')
    {
        target.addEventListener (event_type, function_reference, capture);
    }
    else if (typeof target.attachEvent !='undefined')
    {
        target.attachEvent ('on' + event_type, function_reference);
    }
    else
    {
        event_type = 'on' + event_type;
        if (typeof target[event_type] == 'function')
        {
            var old_listener = target[event_type];
            target[event_type] = function()
            {
                old_listener();
                return function_reference();
            };
        }
        else
        {
            target[event_type] = function_reference;
        }
    }
}