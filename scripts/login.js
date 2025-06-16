const loginForm = document.forms.loginForm;

const userAuth = {};

loginForm.addEventListener("change", getValues);

function actualizeValues(inpName, value){
    switch(inpName){
        case 'userName':
            userAuth.userName = value;
            break
        case 'pswd':
            userAuth.pswd = value;
            break
        case 'email':
            userAuth.email = value;
            break
    }
}

function getValues(event){
    let inpName = event.target.getAttribute('name')
    let value = event.target.value
    if(value.includes('@')){
        inpName = 'email'
    }
    actualizeValues(inpName, value)
}