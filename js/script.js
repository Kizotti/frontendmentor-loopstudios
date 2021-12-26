let burger = document.getElementById('burger');

console.log('burger :>> ', burger);

burger.addEventListener('click', function () {
    document.getElementById('menu').classList.add('active');
    document.body.classList.add('menu');
})

let closeMenu = document.getElementById('closeMenu');


closeMenu.addEventListener('click', function () {
    document.getElementById('menu').classList.remove('active');
    document.body.classList.remove('menu');
})