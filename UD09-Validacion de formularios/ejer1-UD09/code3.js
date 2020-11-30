var validator = new FormValidator('formulario',[{
    name: 'nombre',
    display:'required',
    rules:'required'
}, {
    name:'edad',
    display:'required',
    rules:'max_length[100]|alpha_numeric'
}

], function(errors, event) {
    if (errors.length > 0) {
    }
});