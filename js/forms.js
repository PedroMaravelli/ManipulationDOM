const form = document.getElementById('formsRegistration')



form.addEventListener('submit', (event) => {
    const inputEmail = document.getElementById('email')
    const inputName = document.getElementById('nameCadastro')
    const inputSurname = document.getElementById('surname')
    const inputUsername = document.getElementById('username')
    const inputPassword = document.getElementById('password')
    const listErrors = document.getElementById('errors')
    const formsGroup = document.getElementById('formsGroup')
    formsGroup.innerHTML += `<input type='date' id='dateNasc' name>`

    const date = document.getElementById('dateNasc')

    let error = []

    
    if(date.value == ''){
        error.push('Inserir sua data de nascimento')
    }
    if(inputSurname.value == '') {
        error.push('Insira um sobrenome')
        

    }
    if(inputName.value == '') {
        
        error.push('Insira um nome')
    }

    if(inputEmail.value == ''){
        error.push('Insira um Email')
    }

    if(inputUsername.value == ''){
        error.push('Insira um username')
    }else if(inputUsername.value.length <2){
        error.push('Username tem que ter mais que dois caracteres')
    }

    if(inputPassword.value == ''){
        error.push('Insira uma senha ')
    }else if(inputPassword.value.length <6){
        error.push('Sua senha deve ter mais de 6 caracteres')
    }


    if(error.length >0){
        event.preventDefault()
    }


    for(let i = 0; i < error.length; i++){
        listErrors.innerHTML += '<li>' + error[i] + '</li>'
    }
    
    

    
    
})


