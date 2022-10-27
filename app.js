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
        const text = col.querySelector('h2')
        const button = col.querySelector('button')

        const color = generateRandomeColor()

        text.textContent = color
        col.style.background = generateRandomeColor()

        setTextColor(text, color)
        setTextColor(button, color)
    })
}

function setTextColor(text, color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColors()