function adicionarCSVButton(){
    var menu = document.getElementsByClassName('_1sPvB _2XdMx')[1];
    if (menu != undefined ) {
        menu.appendChild(buttonDowload);
    }   
}
function exibirSobreposicao(){
    var pagina = document.getElementsByClassName('web')[0];
    if (pagina != undefined ) {
        pagina.appendChild(buttonDowload);
    }   
}
function deletarSobreposicao(){
    var pagina = document.getElementsByClassName('web no-scroll')[0];
    pagina.appendChild(buttonDowload);
}


setInterval(adicionarCSVButton, 4000);

buttonDowload.addEventListener('click', async () => {
    // Adiciona uma página sobreposta antes de iniciar o download
    exibirSobreposicao();

    try {
        // Executa a função de downloadCSV e aguarda sua conclusão
        await downloadCSV();
        // Remove a página sobreposta após o download bem-sucedido
    } catch (error) {
        console.error('Erro no download do CSV:', error);
        // Em caso de erro, também remove a página sobreposta
    } finally {
        deletarSobreposicao();
    }
});




// buttonDowload.addEventListener('click', ()=>{
//     //adiciona uma página sobreposta
//     downloadCSV() 
//     //remove a página sobreposta   
// });





