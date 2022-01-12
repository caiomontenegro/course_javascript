
let live = setInterval(() => {time()},1000)

function time() {
    let time = document.getElementById('time')
    let img = document.getElementById('img')
    let msg = document.getElementById('msg')
    let date = new Date()
    let hour = date.getHours() // Troque as horas forçosamente para ver as imagens!
    if (hour < 10) {
        hour = '0' + hour 
    }
    let min = date.getMinutes()
    if (min < 10) {
        min = '0' + min
    }
    let sec = date.getSeconds()
    if (sec < 9) {
        sec = '0' + sec
    }
    time.innerHTML = `${hour}:${min}:${sec}`
    
    if (hour < 12) { // Período da manhã
        if (hour < 5) {
            img.src = 'img/madrugada.jpg'
            document.body.style.background = '#363636'
            msg.innerHTML = `Madrugada, cuidado por aí...`
        } else if (hour < 7) {
            img.src = 'img/nascer.jpg'
            document.body.style.background = '#87CEFA'
            msg.innerHTML = `Tenha um bom dia!`
        } else if (hour >=7 && hour < 8) {
            img.src = 'img/cafe.jpg'
            document.body.style.background = '#FA8072'
            msg.innerHTML = `Que tal um bom café da manhã?`
        } else if (hour >= 8) {
            img.src = 'img/dia.jpg'
            msg.innerHTML = `Mais um dia de oportunidades!`
            document.body.style.background = '	#F5DEB3'
        }
    } else if (hour >= 12 && hour < 18) {
        if (hour >= 12 && hour < 14) {
            img.src = 'img/almoco.jpeg'
            msg.innerHTML = 'Tenha um ótimo almoço!'
        } else if (hour >= 14 && hour < 16) {
            img.src = 'img/retorno.jpg'
            msg.innerHTML = 'Boa tarde!'
            document.body.style.background = '#A0522D'
        } else if (hour >= 16 && hour < 17) {
            img.src = 'img/pausa.jpg'
            msg.innerHTML = 'Uma pequena pausa!'
            document.body.style.background = '#A9A9A9'
        } else {
            img.src = 'img/tarde.jpg'
            document.body.style.background = '#B8860B'
            msg.innerHTML = `Um ótimo final de tarde!`
        }
    } else if (hour >= 18) {
        if (hour < 19) {
            img.src = 'img/noite.jpg'
            document.body.style.background = '#2F4F4F'
            msg.innerHTML = `Tenha uma boa noite!`
        } else if (hour >=19 && hour < 20) {
            img.src = 'img/janta.jpg'
            document.body.style.background = '#8B0000'
            msg.innerHTML = `Venha para o jantar!`
        } else {
            img.src = 'img/noite.jpg'
            document.body.style.background = '#2F4F4F'
        }
    } 
}