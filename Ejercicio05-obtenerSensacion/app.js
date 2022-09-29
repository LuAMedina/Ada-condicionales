function obtenerSensacion(temperatura) {
    if(temperatura < 0) {
        return console.log('¡Está helando!')
    } else if(temperatura >= 0 && temperatura < 15) {
        return console.log('¡Hace frío!')
    } else if(temperatura >= 15 && temperatura < 25) {
        return console.log('Está lindo')
    } else if(temperatura >= 25 && temperatura < 30) {
        return console.log('Hace calor')
    } else {
        return console.log('¡Hace mucho calor!')
    }
}

obtenerSensacion(33) // "¡Hace mucho calor!"