const formulario = document.querySelector('form');
const inputname = document.querySelector('input[name="nome"]');
const inputcpf = document.querySelector('input[name="cpf"]');
const inputnascimento = document.querySelector('input[name="nascimento"]');
const inputendereco = document.querySelector('input[name="endereco"]');

const listadepessoascadastradas = document.querySelector('.lista-de-pessoas-cadastradas');


const abrirmodalbuscar = document.querySelector(".botao-buscar");
const abrirmodalremover= document.querySelector(".botao-remover");
const fecharmodal = document.querySelector("#fechar-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");


const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}
[abrirmodalbuscar, abrirmodalremover, fecharmodal, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
})

console.log(formulario);

formulario.addEventListener('submit', function controledecadastro(infoscadastradas) {
    infoscadastradas.preventDefault();
    console.log('Estamos cadastrando uma nova pessoa!');

    // Concatene os valores em uma única string para o alert. OBS: Pode apagar dps, vamos fazer um modal especifico para cada parte
    
   
    if (event.submitter) {
        if (event.submitter.classList.contains('botao-cadastrar')) {
            alert('Contato salvo com sucesso!');
        } else if (event.submitter.classList.contains('botao-buscar')) {
        } else if (event.submitter.classList.contains('botao-excluir')) {
            alert('Tem certeza de que deseja excluir este contato?');
        }
    }
    
    
    const pessoaHTML = `
         <li>
             <div class="lista">
                   <div class="container-da-lista>
                        <div class="titulo-principal-lista">
                            <h3>${inputname.value}</h3>
                        </div>
                
                        <ul class="lista-informacoes">
                            <li><strong>CPF:</strong> ${inputcpf.value}</li>
                            <li><strong>Data de nascimento:</strong> ${inputnascimento.value}</li>
                            <li><strong>Endereço:</strong> ${inputendereco.value}</li>
                        </ul>
                    </div>
             </div>        
         </li>
    `;

    if (event.submitter && event.submitter.classList.contains('botao-exibir')) {
        listadepessoascadastradas.insertAdjacentHTML('afterbegin', pessoaHTML);
    }



});


