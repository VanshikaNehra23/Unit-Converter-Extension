chrome.runtime.onMessage.addListener(function(message)
{
    switch (message.action) 
    {
        case "clicked_settings_icon":
            openOptionsPage();
            break;
        default:
            break;
    }
});

function openOptionsPage()
{
    chrome.runtime.openOptionsPage();
}