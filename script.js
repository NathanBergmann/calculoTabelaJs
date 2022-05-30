function calcularColuna() {

    var valoresColuna1 = document.getElementsByClassName('col1');
    var varAux = 0;

    for (var i = 0; i < valoresColuna1.length; i++) {
        varAux = parseInt(valoresColuna1[i].value) + parseInt(varAux);
        //alert(varAux);
    }

    alert('A Soma da primeira coluna é: ' + varAux);
}

function calcularLinha() {

    varAux = 1
    for (var i = 1; i < 5; i++) {
        valorLinha = document.getElementById('a' + i)
        varAux = parseInt(valorLinha.value) * parseInt(varAux);
    };

    alert('O Resultado do Produto da primeira linha é : ' + varAux);
}

function calcularTodosValores() {
    var varAux = 0;
    for (var contadorLinha = 1; contadorLinha < 5; contadorLinha++) {
        var valoresColuna = document.getElementsByClassName('col' + contadorLinha);
        

        for (var i = 0; i < valoresColuna.length; i++) {
            varAux = parseInt(valoresColuna[i].value) + parseInt(varAux);
        }
    }
    alert('A Soma de todos os valores é: ' + varAux);
}

function calcularDiagonalPrincipal() {
    var varA1 = document.getElementById('a1');
    var varB2 = document.getElementById('b2');
    var varC3 = document.getElementById('c3');
    var varD4 = document.getElementById('d4');

    varSoma = parseInt(varA1.value) * parseInt(varB2.value) * parseInt(varC3.value) * parseInt(varD4.value);


    alert('O Resultado do Produto da Diagonal Principal é: ' + varSoma);
}