const form = document.getElementById("form")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');
    let frase = document.getElementById('frase');
    let carregando = `<p>Carregando...</p>`
    let feito = `<p>E-mail cadastrado!</p>`

    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = feito;
        frase.innerHTML = "";
    }, 1000);
})