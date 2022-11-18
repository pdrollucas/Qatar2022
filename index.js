
// Fazer o movimento do menu lateral

const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})


// Color Mode

document
    .querySelectorAll("input[type='radio']")
    .forEach(function(input) {
        input.onclick = function() {
            document.documentElement.classList.add(input.id)
        }
    })