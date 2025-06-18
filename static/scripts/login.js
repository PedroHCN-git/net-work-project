const loginForm = document.forms.loginForm;
const submitButton = document.querySelector('#submit')

const userAuth = {};

loginForm.addEventListener("change", getValues);
submitButton.addEventListener("click", getValues);

function actualizeValues(inpName, value){
    switch(inpName){
        case 'userNameOrEmail':
            userAuth.userNameOrEmail = value;
            break
        case 'pswd':
            userAuth.pswd = value;
            break
    }
}

function getValues(event){
    const target = event.target
    let inpName = target.getAttribute('name');
    let value = target.value;
    actualizeValues(inpName, value);
}