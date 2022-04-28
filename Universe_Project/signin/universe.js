const usernames = [];
const passwords = [];

//append to the lists, the name of each new account
  function newProfile(email, password){
    //assign 'email' to the email entered by the user
    email=document.getElementById("email").value.toString();
    //assign 'password' to the password entered by the user
    password=document.getElementById("pswd").value.toString();
    //append to the two lists, paired by their indeces
    usernames.push(email);
    passwords.push(password);
    console.log(usernames);
    //thank the user for signing up for a Universe account
    window.alert("You've been added to the records!\nThank you for signing up!");
    window.location.replace("home.html");
  }