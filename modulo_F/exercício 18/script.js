let list = []
const section = document.getElementById('section')
const info = document.createElement('p')

function add() {
    const number = Number(document.getElementById('number').value)
    const listTable = document.getElementById('table')
    console.log(list.length)
    if (number > 0 && number < 100) {
        if (list.indexOf(number) === -1) {
            list.push(number)
            console.log(list)
            let item = document.createElement('option')
            item.innerHTML = `Número ${number} adicionado`
            listTable.appendChild(item)

        } else {
            alert('Number already added, choose another.')
        }
    } else {
        alert('Invalid number, follow the rules.')
    }
    info.innerHTML = ''
}

function finish() {
    if (list.length === 0) {
        alert('Insert the numbers')
    } else {
        const total = list.length
        const larger = list.sort()[list.length - 1]
        const smaller = list.sort()[0]
        let sum = 0
        for(c in list) {
            sum += list[c]
        }
        const average = sum / list.length
        info.innerHTML = `Total de números ${total}</br> 
        Maior número informado ${larger}</br>
        Menor número informado ${smaller}</br>
        A soma dos valores é ${sum}</br>
        E a média é de ${average.toFixed(1)}.`
        section.appendChild(info)
    }
}
