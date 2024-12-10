document.getElementById('roll-button').addEventListener('click', function () {
    const diceContainer = document.getElementById('dice-container');
    const resultElement = document.getElementById('result');
    let diceCount = document.getElementById('dice-count').value;

    if (diceCount < 1) diceCount = 1;
    if (diceCount > 10) diceCount = 10;

    diceContainer.innerHTML = '';
    resultElement.innerText = 'Rolling...';

    for (let i = 0; i < diceCount; i++) {
        const diceElement = document.createElement('div');
        diceElement.className = 'dice rolling';
        diceContainer.appendChild(diceElement);
    }

    setTimeout(function () {
        const results = [];
        diceContainer.querySelectorAll('.dice').forEach(diceElement => {
            const result = rollDice();
            results.push(result);
            diceElement.classList.remove('rolling');
            updateDiceFace(diceElement, result);
        });
        resultElement.innerText = `You rolled: ${results.join(', ')}`;
    }, 1000);
});

document.getElementById('dice-count').addEventListener('input', function () {
    let value = this.value;
    if (value < 1) this.value = 1;
    if (value > 10) this.value = 10;
});

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateDiceFace(diceElement, result) {
    diceElement.className = 'dice';
    diceElement.innerHTML = '';

    switch (result) {
        case 1:
            diceElement.classList.add('first-face');
            diceElement.innerHTML = '<span class="dot"></span>';
            break;
        case 2:
            diceElement.classList.add('second-face');
            diceElement.innerHTML = '<span class="dot"></span><span class="dot"></span>';
            break;
        case 3:
            diceElement.classList.add('third-face');
            diceElement.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
            break;
        case 4:
            diceElement.classList.add('fourth-face');
            diceElement.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span>';
            break;
        case 5:
            diceElement.classList.add('fifth-face');
            diceElement.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span>';
            break;
        case 6:
            diceElement.classList.add('sixth-face');
            diceElement.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span>';
            break;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#000000', '#FF5733', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#00CED1', '#1E90FF', '#9370DB', '#FF1493', '#000000'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);
});