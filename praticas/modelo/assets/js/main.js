const form = document.querySelector('#formulario')

form.addEventListener ('submit', function (e) {
    e.preventDefault();
    const inputpeso = e.target.querySelector('#input-texto');
    const peso = Number(inputpeso.value)
    

});

