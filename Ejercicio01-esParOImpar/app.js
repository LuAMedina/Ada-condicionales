function esParOImpar(numero) {
    if(numero % 2 === 0) {
        return console.log('par')
    } else {
        return console.log('impar')
    }
}

esParOImpar(3)  // 'impar'
esParOImpar(10) // 'par'