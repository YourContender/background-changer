const button = document.getElementById('btn');
const color = document.getElementById('color');

function changeBgColor() {
    let randomColor = color.textContent = '#' + (Math.random().toString(16) + '000000')
        .split('')
        .slice(2, 8)
        .join('')
        .toUpperCase()
    
    document.body.style.backgroundColor = randomColor    
    
    return randomColor;
}

button.addEventListener('click', changeBgColor);

