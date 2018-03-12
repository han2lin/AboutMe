addLoadListener(initialize_events);

function initialize_events(){    
    
    var user_button = document.getElementById("hover");

    attachEventListener(user_button, "click", user_button_click_event_handler, false);
};

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

