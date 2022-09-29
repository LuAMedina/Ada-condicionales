function obtenerGeneracion(anioNacimiento) {
    if(anioNacimiento >= 1949 && anioNacimiento <=1968) {
        return console.log('Baby boomer')
    } else if(anioNacimiento >= 1969 && anioNacimiento <=1980) {
        return console.log('Generación X')
    } else if(anioNacimiento >= 1981 && anioNacimiento <= 1993) {
        return console.log('Millennials')
    } else {
        return console.log('Generación Z')
    }
}

obtenerGeneracion(1965)
obtenerGeneracion(1973)
obtenerGeneracion(1990)
obtenerGeneracion(2000)