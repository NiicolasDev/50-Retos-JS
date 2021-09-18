const textEl = document.getElementById('text')
let idx = 1
const text = "We love programing"
const speedEl = document.getElementById('speed')
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value )
console.log(speedEl)