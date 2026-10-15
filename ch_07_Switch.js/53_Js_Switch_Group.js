let browser = "Brave";

switch(browser){
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project");
        break;
    case Firefox :
        console.log("Mozila Project");
        break;
    case Safari :
        console.log("Apple browser - uses javascript core engine");
        break;
    default:
        console.log("Unknown browser - manual testing needed");

}