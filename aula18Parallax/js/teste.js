let forms = document.querySelector("#formulario");

$(forms).validate({
rules: {
    email: {
        required: true,
        minlength: 5
    },
    senha: {
        required: true,
        minlength: 8,

    }
},
messages: {
    email: {
        required: "Este campo é obrigatório.",
        minlength: "O email deve ter pelo menos 5 caracteres"
    },
    senha: {
        required: "Este campo é obrigatório.",
        minlength: "A senha deve ter pelo menos 8 caracteres"
    }
},

submitHandler: function(form) {
    alert("Formulario Enviado!");
    form.submit();
}
});