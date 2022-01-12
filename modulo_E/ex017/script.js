function calc() {
    const number = document.getElementById('number')
    const table = document.getElementById('tab')
    const result = document.getElementById('result')
    if (number.value.length == 0) {
        alert('Insert a number')
    } else {
        num = Number(number.value)
        table.innerHTML = ''
        for(x = 0; x <= 10; x++) {
            let item = document.createElement('option')
            item.text = `${num} x ${x} = ${num*x}`
            table.appendChild(item)
        }
    }
}