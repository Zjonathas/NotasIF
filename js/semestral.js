const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nota1Input = e.target.querySelector('#nota1');
    const nota2Input = e.target.querySelector('#nota2');

    const nota1 = Number(nota1Input.value);
    const nota2 = Number(nota2Input.value);

    const media = calcularMedia(nota1, nota2);

    const mediaAprovacao = 60;

    if (media >= mediaAprovacao) {
        const msg = `Parabéns! Você foi aprovado com média ${media.toFixed(0)}`;
        setResultado(msg, media);
    }
    else {
        const msg = `Você foi reprovado com média ${media.toFixed(0)}`;
        setResultado(msg, media);
    }

});

function calcularMedia(nota1, nota2) {
    return (nota1 * 2 + nota2 * 3) / 5;
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, media) {
    const resultado = document.querySelector('#result');
    resultado.innerHTML = '';

    const p = criaP();

    if (media >= 60) {
        p.classList.add('aprovado');
    }
    else {
        p.classList.add('reprovado');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);

}