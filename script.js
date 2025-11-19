// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.

//this lets me add event listeners to the preferences form so that i can use the save button to keep the stuff in storage
let form = document.getElementById("preferences-form");
//add a listener to the submit button
form.addEventListener("submit", function(event) {
    //since its a submit button, i dont want it to send data anywhere aside from storage.
    event.preventDefault();

    //select the color pickers and save their values in variables
    let bgColor = document.getElementById('background-color');
    let bgValue = bgColor.value;
    
    //select the foreground color picker and save it's value in a variable
    let fgColor = document.getElementById('foreground-color');
    let fgValue = fgColor.value;

    //console.log(bgValue,fgValue); test just to see if i have the values actually working

    //save the values as keywords in local storage
    localStorage.setItem('localBGColor', bgValue);
    localStorage.setItem('localFGColor', fgValue);
    //this reloads the page, i had to google how to do this and i'm not sure if you want it, but its better than having to manually reload the page
    location.reload(); 
});

//when DOM is loaded, it will do a function to check if there is local storage values and set the stuff as what it's saved as.
document.addEventListener('DOMContentLoaded', (event) => {
    //get the data from local storage
    let localBG = localStorage.getItem('localBGColor');
    let localFG = localStorage.getItem('localFGColor');
    //if localBG and localFG exist, it will set the background colors and text color to what is specified 
    if (localBG && localFG) {
        document.body.style.backgroundColor = localBG;
        document.body.style.color = localFG;
    }
});
