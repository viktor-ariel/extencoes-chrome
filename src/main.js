function adicionarCSVButton(){
    var menu = document.getElementsByClassName('_1sPvB _2XdMx')[1];
    if (menu != undefined ) {
        menu.appendChild(buttonDowload);
    } 
    
}
setInterval(adicionarCSVButton, 4000);

buttonDowload.addEventListener('click', ()=>{
    downloadCSV()    
});








