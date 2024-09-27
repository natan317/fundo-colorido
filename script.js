function mudarCor(cor){
    let body = document.body;

    switch(cor){
        case 'vermelho': body.style.backgroundColor = 'red'; break;
        case 'azul': body.style.backgroundColor = 'blue'; break;
        case 'verde': body.style.backgroundColor = 'green'; break;
        case 'amarelo': body.style.backgroundColor = 'yellow'; break;
        case 'rosa': body.style.backgroundColor = 'pink'; break;
        default: body.style.backgroundColor = 'black';
    }
}