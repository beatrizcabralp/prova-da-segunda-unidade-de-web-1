const abrirmodalbuscar = document.querySelector("#botao-buscar");
const abrirmodalremover= document.querySelector(".botao-remover");
const fecharmodal = document.querySelector("#fechar-modal");
const modal = document.querySelector("#modal-navbar");
const fade = document.querySelector("#fade");


const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}
[abrirmodalbuscar, fecharmodal, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
})