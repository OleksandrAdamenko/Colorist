const cols = document.querySelectorAll('.col')

function generateRandomeColor() {
    // Red = FF0000
    // Green = 00FF00
    // Blue = 0000FF
    
    const hexCods = '0123456789ABCDEF'

    let color = ''

    for (let i = 0; i < 6; i++) {
        color += hexCods[Math.floor(Math.random() * hexCods.length)]
    }

    return '#' + color
}

function setRandomColors() {
    cols.forEach(col => {
        col.style.background = generateRandomeColor()
    })
}

setRandomColors()