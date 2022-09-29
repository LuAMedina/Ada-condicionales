function avanzarSemaforo(colorActual) {
    if(colorActual === 'verde') {
        return console.log('amarillo')
    } else if(colorActual ==='amarillo') {
        return console.log('rojo')
    } else {
        return console.log('verde')
    }
}

avanzarSemaforo('verde')     // 'amarillo'
avanzarSemaforo('amarillo')  // 'rojo'
avanzarSemaforo('rojo')      // 'verde'