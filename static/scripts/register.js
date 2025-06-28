const registerEndpoint = '127.0.0.1:500/login'
const registerForm = document.forms.register
const warning = document.querySelectorAll('warnings')

registerForm.addEventListener('input', verifyForm)

function verifyForm(event){
    const pswd = registerForm.pswd
    const name = registerForm.name
    const email = registerForm.email
    const confpswd = registerForm.confpswd
    if(pswd.value != ""){
       hasMinimunLength(pswd)
       hasUpperCase(pswd)
    }
}

function hasMinimunLength(element) {
    const rule = registerForm.querySelector('.min-len')
    if (element.value.length < 8){
        rule.classList.add('invalid')

        const warningContainer = rule.parentElement.parentElement
        warningContainer.classList.add('active')
    }
    else if (element.value >= 8) {
        rule.classList.remove('invalid')
        rule.classList.add('valid')
    }
}

function hasUpperCase(element){
    const rule = registerForm.querySelector('.upper-case')
    if(!/[A-Z]/.test(element.value)){
        rule.classList.add('invalid')

        const warningContainer = rule.parentElement.parentElement
        warningContainer.classList.add('active')
    }
    else if (element.value >= 8) {
        rule.classList.remove('invalid')
        rule.classList.add('valid')
    }

}