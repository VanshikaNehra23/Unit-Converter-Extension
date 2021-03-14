document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('opt_button').addEventListener('click', sendOptionsPageMessage);
    //chrome.runtime.sendMessage({"action": "clicked_settings_icon"});

}); 

function sendOptionsPageMessage()
{
    console.log("Button Clicked")
    chrome.runtime.sendMessage({"action": "clicked_settings_icon"});

}