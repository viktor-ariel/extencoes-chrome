var cliqueGrupo = document.getElementsByClassName('_2au8k')[0]
cliqueGrupo.click()

await new Promise(r => setTimeout(r, 2000));

var verMais = document.getElementsByClassName('_3ATEk')[0]
verMais.click()



function scrollContainerSmoothly() {
     var scrollContainer = document.getElementsByClassName('g0rxnol2 g0rxnol2 thghmljt p357zi0d rjo8vgbg ggj6brxn f8m0rgwh gfz4du6o ag5g9lrv bs7a17vp')[0];
     var targetPosition = scrollContainer.scrollHeight - scrollContainer.clientHeight;
     var currentPosition = scrollContainer.scrollTop;
     var increment = 100;
     var delay = 10;

     function scrollStep() {
        if (currentPosition < targetPosition) {
             scrollContainer.scrollTop += increment;
             currentPosition += increment;
             setTimeout(scrollStep, delay);
         }
    }

    scrollStep();
}
// function scrollContainerByIncrement(increment) {
//     var scrollContainer = document.getElementsByClassName('g0rxnol2 g0rxnol2 thghmljt p357zi0d rjo8vgbg ggj6brxn f8m0rgwh gfz4du6o ag5g9lrv bs7a17vp')[0];
//     var targetPosition = scrollContainer.scrollTop + increment;

//     function scrollStep() {
//         if (scrollContainer.scrollTop < targetPosition) {
//             scrollContainer.scrollTop += 1; // Incremento pequeno
//             setTimeout(scrollStep, 10); // Tempo curto entre incrementos
//         }
//     }

//     scrollStep();
// }





var numeros = document.getElementsByClassName('Mk0Bp _30scZ');
var csvData = "numero\n"; // Cabeçalho do CSV

scrollContainerSmoothly();


for (var i = 0; i < numeros.length; i++) {
    csvData += numeros[i].innerText + "\n";
    await new Promise(r => setTimeout(r, 50));
       
}

function downloadCSV() {
    var blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    var link = document.createElement("a");

    if (link.download !== undefined) {
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "numeros.csv");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

downloadCSV();



// // Função para extrair e salvar os números em um arquivo CSV
// function extractAndSaveNumbers() {
//     var numeros = document.getElementsByClassName('_21S-L');
//     var csvData = "Número\n"; // Cabeçalho do CSV

//     for (var i = 0; i < numeros.length; i++) {
//         csvData += numeros[i].innerText + "\n";
//     }

//     downloadCSV(csvData);
// }

// // Função para baixar o arquivo CSV
// function downloadCSV(data) {
//     var blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
//     var link = document.createElement("a");

//     if (link.download !== undefined) {
//         var url = URL.createObjectURL(blob);
//         link.setAttribute("href", url);
//         link.setAttribute("download", "numeros.csv");
//         link.style.visibility = 'hidden';
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     }
// }

// // Função para observar quando os elementos estão visíveis
// function observeElements() {
//     var options = {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.5
//     };

//     var observer = new IntersectionObserver(function (entries, observer) {
//         entries.forEach(function (entry) {
//             if (entry.isIntersecting) {
//                 // Se o elemento está visível, extraia e salve os números
//                 extractAndSaveNumbers();
//                 // Desconectar o observador após a primeira execução
//                 observer.disconnect();
//             }
//         });
//     }, options);

//     // Elemento que você deseja observar (pode ser ajustado conforme necessário)
//     var target = document.querySelector('g0rxnol2 g0rxnol2 thghmljt p357zi0d rjo8vgbg ggj6brxn f8m0rgwh gfz4du6o ag5g9lrv bs7a17vp');

//     // Iniciar a observação
//     if (target) {
//         observer.observe(target);
//     }
// }

// // Chame a função para observar os elementos quando a página estiver pronta
// document.addEventListener('DOMContentLoaded', observeElements);
