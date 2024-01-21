function downloadCSV() {
    var cliqueGrupo = document.getElementsByClassName('_2au8k')[0]
    cliqueGrupo.click()

    setTimeout(function() {
        var verMais = document.getElementsByClassName('_3ATEk')[0];
        verMais.click();
    }, 1000);

    setTimeout(function() {
        document.getElementsByClassName("cm280p3y p357zi0d f8m0rgwh gndfcl4n ac2vgrno ln8gz9je s4r5ooj2 lffynu9d sdfuwbjb")[0].style.cssText = "width: 100px; height: 99000px;"; 
    }, 2000);

    setTimeout(function() {
        // Obtenha os elementos e armazene no array numeros
        var elementos = document.querySelectorAll('.g0rxnol2.ggj6brxn.m0h2a7mj.r6au09pb.fd365im1.hmy10g0s')[0].querySelectorAll('._21S-L');
        
        var numeros = [];
        for (var i = 0; i < elementos.length; i++) {
            numeros.push(elementos[i].innerText);
        }
    
        console.log(numeros); // Faça o que quiser com a variável aqui
    
        var csvData = "numero\n"; // Cabeçalho do CSV
    
        for (var i = 0; i < numeros.length; i++) {
            csvData += numeros[i] + "\n";      
        }

        // Obtenha os dados e atribua a csvData
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
    }, 5000);  

    setTimeout(function() {
        var close = document.getElementsByClassName('kk3akd72 dmous0d2 fewfhwl7 ajgl1lbb ltyqj8pj')[0]
        close.click()
    }, 7000);

    setTimeout(function() {
        var close2= document.getElementsByClassName('kk3akd72 svlsagor fewfhwl7 ajgl1lbb ltyqj8pj')[0]
        close2.click()
    }, 8000);
    
}











