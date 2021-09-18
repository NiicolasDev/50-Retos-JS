const progress = document.getElementById ('progress');
const prev = document.getElementById ('prev');
const next = document.getElementById ('next');
const circles = document.querySelectorAll ('.circle');


let conter = 1;
prev.disabled = true

next.addEventListener ('click', () => {
    conter++
    if (conter > circles.length){
        conter = circles.length   
    }
    update()
})

prev.addEventListener ('click', () => {
    conter--
    if (conter < 1){
        conter = 1
    }
    update()
})


function update() {

    circles.forEach((circle, id) =>{
        if (id < conter){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.circle.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    
    if (conter === 1 ){
        prev.disabled = true
    } else if ( conter === circles.length){
        next.disabled = true
    }else {
        prev.disabled = false
        next.disabled = false
    }

}
