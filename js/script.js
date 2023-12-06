const precoMaq = document.querySelector('.preco-maq')
const imgMaq = document.querySelector('.imgMaq')


function maqInissia(){
    precoMaq.innerHTML = `R$300,00`
    imgMaq.innerHTML = `<img src="./img/Nespresso_InissiaP.jpg" alt=""></img>`
}

function maqPiccolo(){
    precoMaq.innerHTML = `R$340,00`
    imgMaq.innerHTML = `<img src="./img/Dulce_GustoP.jpg" alt=""></img>`
}

function maqUC(){
    precoMaq.innerHTML = `R$400,00`
    imgMaq.innerHTML = `<img src="./img/Nespresso_C50P.jpg" alt=""></img>`
}

function maqHD(){
    precoMaq.innerHTML = `R$230,00`
    imgMaq.innerHTML = `<img src="./img/SenseoP.jpg" alt=""></img>`
}

function abreNovaJanelaDG()
{
	const largura = Math.min(280, window.innerWidth);
    const altura = Math.min(530, window.innerHeight);

    let janela = window.open(
        "",
        "",
        `width=${largura},height=${altura},left=${largura},top=50`
    );

    janela.document.write("<html><head><title>Capsula</title><link rel='stylesheet' type='text/css' href='style.css'></head>");

    janela.document.write('<body> <h1>Dolce Gusto</h1> <h2>Caixa 16 capsulas</h2> <img src="./img/CapsulaDulceGusto.jpg"></img>');

    janela.document.write('<ul> <li>Expresso 96g - R$24,00</li> <li>Descafeinado 96g - R$21,00</li> </ul>');

    janela.document.write('<button onclick="window.close()">Fechar</button>');
}

function abreNovaJanelaSE()
{
	const largura = Math.min(280, window.innerWidth);
    const altura = Math.min(530, window.innerHeight);

    let janela = window.open(
        "",
        "",
        `width=${largura},height=${altura},left=${largura},top=50`
    );

    janela.document.write("<html><head><title>Capsula</title><link rel='stylesheet' type='text/css' href='style.css'></head>");

    janela.document.write('<body> <h1>Senseo</h1> <h2>Caixa 18 sachês</h2> <img src="./img/Senseo_Classico.jpg"></img>');

    janela.document.write('<ul> <li>Classico 120g - R$14,00</li> <li>Intenso 120g - R$14,00</li> </ul>');

    janela.document.write('<button onclick="window.close()">Fechar</button>');
}

function abreNovaJanelaNE()
{
	const largura = Math.min(280, window.innerWidth);
    const altura = Math.min(530, window.innerHeight);

    let janela = window.open(
        "",
        "",
        `width=${largura},height=${altura},left=${largura},top=50`
    );

    janela.document.write("<html><head><title>Capsula</title><link rel='stylesheet' type='text/css' href='style.css'></head>");

    janela.document.write('<body> <h1>Nespresso</h1> <h2>Caixa 20 capsulas</h2> <img src="./img/NespressoLivanto.png"></img>');

    janela.document.write('<ul> <li>Livanto - R$35,00</li> <li>Ristretto - R$42,00</li>  <li> Vanilio - R$46,00</li> </ul>');

    janela.document.write('<button onclick="window.close()">Fechar</button>');
}
