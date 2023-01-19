const button = document.getElementById('btn');
const color = document.getElementById('color');

function changeBgColor() {
    let randomColor = generationRandomColor();
    
    document.body.style.backgroundColor = randomColor    
    
    return randomColor;
}

//перший варіант
function generationRandomColor() {
    return color.textContent = '#' + (Math.random().toString(16) + '000000')
        .split('')
        .slice(2, 8)
        .join('')
        .toUpperCase()
}

//другий варіант
function generationRandomColor2() {
    return color.textContent = '#' + (Math.random().toString(16) + '000000')
        .substring(2, 8)
        .toUpperCase()
}

//третій варіант
function generationRandomColor3() {
    let randomColor = '#';
    let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    for (let i = 0; i < 6; i++) {
        randomColor += hex[Math.floor(Math.random() * hex.length)];
    }
    color.textContent = randomColor;   

    return randomColor;
}

button.addEventListener('click', changeBgColor);

