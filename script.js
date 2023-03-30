const body = document.querySelector('body')
const btn = document.querySelector('button');
const div = document.querySelector('div')


btn.addEventListener('click', trocar)


function trocar() {
    div.classList.add('visible')
    btn.classList.add('invisible')
}


document.onkeydown = function (event) {
    const tecla = event.key === 'Escape'

if(tecla) {
    div.classList.remove('visible')
    btn.classList.remove('invisible')
}
}