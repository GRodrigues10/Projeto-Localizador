const input = document.getElementById('input');

function buscar() {
    const cep = input.value.replace('-', ''); // Remove o traço do CEP, se houver

    if (cep.length === 0) {
        alert('Por favor, insira um valor!');
    } else if (cep.length !== 8 || isNaN(parseInt(cep))) { // Verifica se possui 8 caracteres numéricos
        document.getElementById('area').innerHTML = 'Digite um CEP válido!';
    } else {
        const ajax = new XMLHttpRequest();
        ajax.open('GET', `https://viacep.com.br/ws/${cep}/json/`);
        ajax.send();
        ajax.onload = () => {
            if (ajax.status === 200) {
                const response = JSON.parse(ajax.responseText);
                if (response.erro) {
                    document.getElementById('area').innerHTML = 'CEP não encontrado!';
                } else {
                    document.getElementById('area').innerHTML = `
                        <p class="cep-info" style="margin: 1px 0; padding: 5px; border: 1px solid #ccc; border-radius: 5px; background-color: rgba(8, 8, 8, 0.62); font-size: 0.9rem; cursor: pointer; transition: background-color 0.3s;" onclick="window.open('https://www.google.com/maps?q=${response.logradouro},${response.bairro},${response.localidade},${response.uf}', '_blank')" onmouseover="this.style.backgroundColor='rgba(8, 8, 8, 0.8)'" onmouseout="this.style.backgroundColor='rgba(8, 8, 8, 0.62)'">
                            <span style="font-weight: bold;">Logradouro:</span> ${response.logradouro}
                        </p>
                        <p class="cep-info" style="margin: 1px 0; padding: 5px; border: 1px solid #ccc; border-radius: 5px; background-color: rgba(8, 8, 8, 0.62); font-size: 0.9rem; cursor: pointer; transition: background-color 0.3s;" onclick="window.open('https://www.google.com/maps?q=${response.logradouro},${response.bairro},${response.localidade},${response.uf}', '_blank')" onmouseover="this.style.backgroundColor='rgba(8, 8, 8, 0.8)'" onmouseout="this.style.backgroundColor='rgba(8, 8, 8, 0.62)'">
                            <span style="font-weight: bold;">Bairro:</span> ${response.bairro}
                        </p>
                        <p class="cep-info" style="margin: 1px 0; padding: 5px; border: 1px solid #ccc; border-radius: 5px; background-color: rgba(8, 8, 8, 0.62); font-size: 0.9rem; cursor: pointer; transition: background-color 0.3s;" onclick="window.open('https://www.google.com/maps?q=${response.logradouro},${response.bairro},${response.localidade},${response.uf}', '_blank')" onmouseover="this.style.backgroundColor='rgba(8, 8, 8, 0.8)'" onmouseout="this.style.backgroundColor='rgba(8, 8, 8, 0.62)'">
                            <span style="font-weight: bold;">Cidade:</span> ${response.localidade}
                        </p>
                        <p class="cep-info" style="margin: 1px 0; padding: 5px; border: 1px solid #ccc; border-radius: 5px; background-color: rgba(8, 8, 8, 0.62); font-size: 0.9rem; cursor: pointer; transition: background-color 0.3s;" onclick="window.open('https://www.google.com/maps?q=${response.logradouro},${response.bairro},${response.localidade},${response.uf}', '_blank')" onmouseover="this.style.backgroundColor='rgba(8, 8, 8, 0.8)'" onmouseout="this.style.backgroundColor='rgba(8, 8, 8, 0.62)'">
                            <span style="font-weight: bold;">Estado:</span> ${response.uf}
                        </p>
                    `;
                }
            } else {
                document.getElementById('area').innerHTML = 'Erro ao buscar o CEP.';
            }
        };
    }
}