const input = document.getElementById('input');

function buscar() {
    if (input.value.length == 0) {
        alert('Por favor, insira um valor!');
    }else if(input.value.length > 8 || input.value.length < 8 ){

        document.getElementById('area').innerHTML = 'Digite um CEP válido!'


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
            } 
        }
    }
}