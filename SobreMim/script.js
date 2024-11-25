// Seleciona os elementos
const moreInfoBtn = document.getElementById('more-info-btn');
const extraInfo = document.getElementById('extra-info');

// Adiciona interatividade ao botão
moreInfoBtn.addEventListener('click', () => {
    if (extraInfo.classList.contains('hidden')) {
        extraInfo.classList.remove('hidden');
        moreInfoBtn.textContent = 'Ver Menos';
    } else {
        extraInfo.classList.add('hidden');
        moreInfoBtn.textContent = 'Saiba Mais';
    }
});
