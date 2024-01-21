var overlayDiv = document.createElement('div');
overlayDiv.classList.add('overlay');
overlayDiv.id = 'overlay';

// Criar imagem
// var img = document.createElement('img');
// img.src = '../image/JS_For_Dummies.png';
// img.alt = 'Aguarde';

// Criar título
var h1 = document.createElement('h1');
h1.textContent = 'Aguarde...';

// Adicionar elementos à div de sobreposição
overlayDiv.appendChild(img);
overlayDiv.appendChild(h1);

// Adicionar div de sobreposição ao corpo do documento
document.body.appendChild(overlayDiv);

// Adicionar classe para desativar rolagem
document.body.classList.add('no-scroll');
