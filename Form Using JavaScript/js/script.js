const username = document.querySelector("form input#username");
const password = document.querySelector("form input#password");

function formSubmit() {

    const usernameValue = username.value;
    const passwordValue = password.value;

    let usernameOutput = document.querySelector("form+.form-output p:first-child span");
    let passwordOutput = document.querySelector("form+.form-output p:last-child span");

    if (usernameValue && passwordValue) {
        console.log("Username :", usernameValue);
        console.log("Password :", passwordValue);
        usernameOutput.innerText = usernameValue;
        passwordOutput.innerText = passwordValue;
    }
    // else {
    //     console.log("Enter Valid Name.", usernameValue);
    //     console.log("Enter Valid Password.", passwordValue);
    // }

}
