let nums = [1, 4, 2, 3]

console.log(`Nosso vetor é o ${nums}`)

console.log(`Substituindo o valor na chave 2: ${nums}`)

nums.push(8)

console.log(`Adcionando uma chave com o valor 8: ${nums}`)

console.log(`Consultando o tamanho do array: ${nums.length}`)

nums.sort()

console.log(`O array em ordem alfabética ou crescente é: ${nums}`)

for(c = 0; c < nums.length; c ++) {
    console.log(nums[c])
}

//ou 

for(let c in nums) { // isso é igual =  'Para cada posição c, na lista nums'
    console.log(`A posição ${c}, tem o valor ${nums[c]}`)
}

let pos = nums.indexOf(2)

if(pos !== -1) {
    console.log(`O valor 2 está na posição: ${pos}`)
} else {
    console.log('Nâo existe esse valor no array')
}

