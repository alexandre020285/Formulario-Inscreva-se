const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("idPassworDconfirmation");


/*CRIADO UM EVENTO SUBMIT, NO QUAL RECEBE UM EVENTO */
/*COM O PREVENTDEFAUT , PREVINE UM EVENTO PADRÃO ,NAO ATUALIZA A PÁGINA */
form.addEventListener("submit",(event) =>{
    event.preventDefault();

    checkForm();
} )

//USADO PARA TIRAR A MSG DE ERRO AO DIGITAR "blur"
// CLICANDO FORA / FORA DE FOCO
email.addEventListener("blur", () =>{
    checkInputEmail();
})

username.addEventListener("blur", () =>{
    checkInputUserName();
})

/*COM O VALUE, SE OBTÉM O VALOR OU O QUE FOI DIGITADO PELO USUARIO*/
function checkInputUserName(){
    const usernamevalue = username.value;

    if (usernamevalue === ""){
        //MOSTRAR A MSG DE ERRO, CRIANDO UMA FUNÇAÕ FORA
        erroInput(username,"Usuário obrigatório!")
    } else {
        formItem = username.parentElement;
        formItem.className = "form-content"
    }

}

function checkInputEmail (){
    const emailValue = email.value;
    if (emailValue === ""){
        erroInput(email,"o email é obrigatório")
    } else { 
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassaword(){
    const passwordValue = password.value;

    if (passwordValue === ""){
        erroInput(password, "á senha é obrigatória")
    } else if (passwordValue.length < 8) {
        erroInput(password, "A senha precisa ter no mínimo 8 caracteres")
    } else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if (confirmationPasswordValue === ""){
        erroInput(passwordConfirmation, "A confirmação de senha é obrigatória")
    } else if (confirmationPasswordValue !== passwordValue){
        erroInput(passwordConfirmation, "As senhas não são iguais.")
    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }

}

//FUNÇÃO PARA SO ENVIAR O FORMULÁRIO SE TUDO ESTIVER OK / OU SEJA NÃO POSSUA A CLASSE FORM-CONTENT ERRO
function checkForm() {
    checkInputUserName();
    checkInputEmail ();
    checkInputPassaword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    });  

    if (isValid) {
        alert("PARABÉNS VOÇÊ CADASTRADO COM SUCESSO");
    }
}

//parentElement É USADO PARA SELECIONAR A DIV PAI
function erroInput(input, message){
    const formItem = input.parentElement;  
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content erro"
}