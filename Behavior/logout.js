add_load_listener(initialize_events);

function initialize_events()
{
    resetb_element_click_event_handler();
    var close_element = document.getElementById("close");
    var resetb_element = document.getElementById("resetb");
    var logon_form = document.forms["login_form"];
        
    // attach_event_listener(username_element, "mousedown", username_element_mousedown_event_handler, false);
    // attach_event_listener(username_element, "blur", username_element_blur_event_handler, false);
    attach_event_listener(close_element, "click", close_element_click_event_handler, false);
    attach_event_listener(resetb_element, "click", resetb_element_click_event_handler, false);
}


function resetb_element_click_event_handler(){
    document.getElementById("username").focus();
    document.forms["login_form"].reset();
}

function close_element_click_event_handler()
{
    window.location = "../index.html";
    return false;    
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