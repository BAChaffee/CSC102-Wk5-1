//Function used to check users Identification Credentials
function checkCreds() {
    //Place to store first names
    var firstName = document.getElementById("fName").value;
    //Place to store last names
    var lastName = document.getElementById("lName").value;
    //Place to store badge numbers
    var badgeNumb = document.getElementById("badgeID").value;
    //Combines the first and last names
    var fullName = firstName + " " + lastName;
    //Sets requirements for name input
    if (fullName.length > 20 || fullName.length == 1) {
        //If name is incorrect, alert indicates error
        document.getElementById("loginStatus").innerHTML = "Invalid full name!";
        //Sets requirements for badge number input
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        //If badge number is incorrect, alert indicates error
        document.getElementById("loginStatus").innerHTML = "Invalid badge number!";
        //If input satisfies all requirements, alert box indicates accepted input
    } else {
        alert("Access Granted! Welcome  " + fullName);
        //Upon successful login, user is redirected to UAT Space Program page
        location.replace("index.html");

    }
}