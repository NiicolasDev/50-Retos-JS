const panels = document.querySelectorAll('.panel');


panels.forEach((panel) => panel.addEventListener('click', () => activeClass(panel)))

const activeClass = (panel) => {
    removeClass()
    panel.classList.toggle('active');
};

const removeClass = () => {
    panels.forEach((panel) => {
        panel.classList.contains('active') && panel.classList.remove('active')
    })
}

