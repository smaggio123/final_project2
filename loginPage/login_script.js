/**
 * Displays information based on user input
 */
function login(){
    //Gets the email from the input
    var email = document.getElementById('inputUserName').value;
    //Gets the password from the input
    var pswd = document.getElementById('inputPassword').value;
    //If the email input was left empty
    if(email===''){
        //Calls method to display error
        displayError("Please enter your email.");
    }
    //If the password input was left empty
    else if(pswd===''){
        //Calls method to display error
        displayError("Please enter your password.");
    }
    //If both inputs have values
    else{
        //Alerts that the user is logged in
        alert('logged in');
        //Changes the font color to black
        setTextColor("black");
        //Displays the user's email
        document.getElementById('userNameDisplay').innerHTML = email;
    }
}
/**
 * Prints the error caused when logging in
 * @param {string} str - the string to be displayed
 */
function displayError(str){
    //Changes the font color to red
    setTextColor("red");
    //Displays the error
    document.getElementById('userNameDisplay').innerHTML = str;
}

/**
 * Changes the color of the text
 * @param {string} color - the color of the text
 */
function setTextColor(color){
    //Changes the color of the text
    document.getElementById('userNameDisplay').style.color=color;
}