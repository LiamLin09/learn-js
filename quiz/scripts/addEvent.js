window.onload = function() {
    let x = document.getElementById('myBtn');
    x.addEventListener('mouseover', myFunction('Moused over!'));
    x.addEventListener('click', mySecondFunction('Clicked!'));
    x.addEventListener('mouseout', myThirdFunction('Moused out!'));
}

function myFunction(msg) {
    return () => document.getElementById('demo').textContent = msg;
}

function mySecondFunction(msg) {
    return () => document.getElementById('demo').textContent = msg;
}

function myThirdFunction(msg) {
    return () => document.getElementById('demo').textContent = msg;
}
