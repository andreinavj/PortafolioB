const nombre = document.getElementById("name")
const Sobrenome = document.getElementById("sobrenome")
const correio = document.getElementById("email")
const telefono = document.getElementById("phone")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit,"
    e => {
        e.preventDefault()
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    }
    if (!regexEmail.test(email.value)) {
        warnings += `O e-mail não é valido<br>`

    })