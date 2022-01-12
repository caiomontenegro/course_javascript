function check() {
    const age = Number(document.getElementById('age').value)
    const result = document.getElementById('result')
    const sex = document.getElementsByName('radsex')
    let gen = ''
    if (age > 0) {
        let img = document.createElement('img')
        img.setAttribute('id', 'image')
        if (sex[0].checked) {
            gen = 'Man'
            result.innerHTML = `Appearance of ${age} years old ${gen}`
            if(age <= 1) {
                img.setAttribute('src', 'img/homemmaisvelho.jpg')
            } else if (age <= 10) {
                img.setAttribute('src', 'img/anciao.jpg')
            } else if (age <= 20) {
                img.setAttribute('src', 'img/maduro.jpg')
            } else if (age <= 35) {
                img.setAttribute('src', 'img/adulto.jpg')
            } else if (age <= 50) {
                img.setAttribute('src', 'img/homemjovem.jpg')
            } else if (age <= 60) {
                img.setAttribute('src', 'img/meninoadolescente.jpg')
            } else if (age <= 70) {
                img.setAttribute('src', 'img/meninopreadolescente.jpg')
            } else if (age <= 80) {
                img.setAttribute('src', 'img/menino.jpg')
            } else if (age <= 90) {
                img.setAttribute('src', 'img/bebemenino.jpg')
            } else if (age <= 92) {
                img.setAttribute('src', 'img/recemnascido.jpg')
            } else {
                img.setAttribute('src', 'img/espermatozoide.jpg')
            }
        } else {
            gen = 'Woman'
            result.innerHTML = `Appearance of ${age} years old ${gen}`
            if(age <= 1) {
                img.setAttribute('src', 'img/mulhermaisvelha.jpg')
            } else if (age <= 10) {
                img.setAttribute('src', 'img/ancia.jpg')
            } else if (age <= 20) {
                img.setAttribute('src', 'img/madura.jpg')
            } else if (age <= 35) {
                img.setAttribute('src', 'img/adulta.jpg')
            } else if (age <= 50) {
                img.setAttribute('src', 'img/mulherjovem.jpg')
            } else if (age <= 60) {
                img.setAttribute('src', 'img/meninaadolescente.jpg')
            } else if (age <= 70) {
                img.setAttribute('src', 'img/meninapreadolescente.jpg')
            } else if (age <= 80) {
                img.setAttribute('src', 'img/meninacrianca.jpg')
            } else if (age <= 90) {
                img.setAttribute('src', 'img/bebemenina.jpg')
            } else if (age <= 92) {
                img.setAttribute('src', 'img/recemnascido.jpg')
            } else {
                img.setAttribute('src', 'img/espermatozoide.jpg')
            }
        }
        result.appendChild(img)
    }
}