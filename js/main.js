const agendaDeContatos = () => {

    const form = document.querySelector('#form');
    const nomeContrato = document.querySelector('#name');
    const telefoneContrato = document.querySelector('#tel');
    const emailContrato = document.querySelector('#email');

    const celular = document.querySelector('#celular');
    const residencial = document.querySelector('#residencial');

    let linhas = '';

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        adicionaLista();
        atualizaTabela();
    });

    function adicionaLista() {

        if(celular.checked == true){
            let linha = '<tr>';
            linha += `<td>${nomeContrato.value}</td>`;
            linha += `<td>${emailContrato.value}</td>`;
            linha += `<td>${telefoneContrato.value}</td>`;
            linha += `<td>Celular</td>`;
            linha += '</tr>';
    
            linhas += linha;
        } else{

            let linha = '<tr>';
            linha += `<td>${nomeContrato.value}</td>`;
            linha += `<td>${emailContrato.value}</td>`;
            linha += `<td>${telefoneContrato.value}</td>`;
            linha += `<td>Residencial</td>`;
            linha += '</tr>';
    
            linhas += linha;

        }

        nomeContrato.value = '';
        emailContrato.value = '';
        telefoneContrato.value = '';
        celular.checked = '';
        residencial.checked = '';
    }

    function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }

}

agendaDeContatos();