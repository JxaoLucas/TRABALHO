let leftSelected = false;
let rightSelected = false;

document.getElementById('btn-esq').addEventListener('click', () => {
    leftSelected = true;
    rightSelected = false;
    document.getElementById('ImagemEscolha').src = 'img/escolha_lado-basquete.png'; // Substitua pelo caminho da imagem esquerda
});

document.getElementById('btn-dir').addEventListener('click', () => {
    rightSelected = true;
    leftSelected = false;
    document.getElementById('ImagemEscolha').src = 'img/escolha_lado-futebol.png'; // Substitua pelo caminho da imagem direita
});

document.getElementById('btn-escolher').addEventListener('click', () => {
    const mensagem = document.getElementById('mensagem');
    if (leftSelected) {
        mensagem.textContent = 'Abrindo tela de Login...';
        // Aqui você pode redirecionar para a tela de login
        // window.location.href = 'login.html';
    } else if (rightSelected) {
        mensagem.textContent = 'Abrindo tela de Registro...';
        // Aqui você pode redirecionar para a tela de registro
        // window.location.href = 'registro.html';
    } else {
        mensagem.textContent = 'Por favor, escolha uma opção!';
    }
});