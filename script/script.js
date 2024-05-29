const input = document.getElementById('input');

function buscar() {
    if (input.value.length == 0) {
        alert('Por favor, insira um valor!');
    } else {
        const ajax = new XMLHttpRequest();
        const cep = input.value;
        ajax.open('GET', `https://viacep.com.br/ws/${cep}/json/`);
        ajax.send();
        ajax.onload = () => {
            if (ajax.status == 200) {
                const response = JSON.parse(ajax.responseText);
                if (response.erro) {
                    document.getElementById('area').innerHTML = 'CEP não encontrado!';
                } else {
                    document.getElementById('area').innerHTML = `
                    <p>Logradouro: ${response.logradouro}</p>
                    <p>Bairro: ${response.bairro}</p>
                    <p>Cidade: ${response.localidade}</p>
                    <p>Estado: ${response.uf}</p>
                    

                    `;
                }
            } else {
                document.getElementById('area').innerHTML = 'Erro ao buscar o CEP!';
            }
        }
    }
}