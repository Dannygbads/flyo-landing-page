let button= document.querySelector('.get-started')
let inputField= document.querySelector('.email-input')
let errorMsg= document.querySelector('.error-msg')
let emptyError= document.querySelector('.wrong-email-msg')


var res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let email=inputField.value
 
function testEmail(inputField){
    var res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(inputField.value.match(res)){
        console.log('true')
        return true;
    }
}

button.addEventListener('click',() => {
        if(inputField.value===''){
            errorMsg.className='show-error-msg'
            emptyError.className='wrong-email-msg'
        }
        else if(testEmail(inputField)){
            console.log('true')
            errorMsg.className='error-msg'
            emptyError.className='wrong-email-msg'

        }
        else{
            emptyError.className='show-wrong-email-msg'
            errorMsg.className='error-msg'
            console.log('false')
        }
        
    })