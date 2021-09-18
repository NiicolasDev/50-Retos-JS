const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav')


openBtn.addEventListener('click', () => {
    nav.forEach(nav_elmen => nav_elmen.classList.add('visible'))

})
closeBtn.addEventListener('click', () => {
    nav.forEach(nav_elem => nav_elem.classList.remove('visible'))
})