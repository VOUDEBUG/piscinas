document.getElementById('orcamentoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    fetch('backend.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('resultado').innerText = 'Custo do Orçamento: R$ ' + data;
    })
    .catch(error => console.error('Erro:', error));
});
