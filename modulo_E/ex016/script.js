function count() {
    let start = Number(document.getElementById('start').value)
    let end = Number(document.getElementById('end').value)
    let step = Number(document.getElementById('step').value)
    let result = document.getElementById('result')
    
    if (start > end) { // If end it's bigger than start
        alert('The end is more larger than the start')
    } else {
        result.innerText = ''
        if (step === 0) { // If don't have step
            result.innerHTML = `${start}`
            for(x = start + 1; x <= end; x++) {
                result.innerHTML += `&#128073; ${x}`
            }
        } else {
            result.innerHTML = `${start}` // with step
            for(x = start + step; x <= end; x+= step) {
                result.innerHTML += `&#128073; ${x}`
            }
        }
        result.innerHTML += `&#127988`
    }
}