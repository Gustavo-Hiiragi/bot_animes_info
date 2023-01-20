const otaku = prompt("Olá\nVocê é otaku?\nReponda com sim ou não").toLocaleUpperCase();
if(otaku=="SIM"){
    const msg = `
    Qual seu gênero favorito de animes?\n
    Digite o número correspondente ao genêro.\n
    (1)Seinen (2)Shoujo (3)Shounen (4)Terror (5)comédia (6)Ecchi\n
    `;
    const quest1 = parseInt(prompt(msg));
    switch (quest1) {
        case 1:
            const opcao1 = prompt("Quais desses você prefere?\n"+obj.animes[0].titulo+"(1)"+obj.animes[1].titulo+"(2)");
            if (opcao1 == 1) {
                alert("Título: "+obj.animes[0].titulo+"\nDescrição: "+obj.animes[0].sin);
            } else if (opcao1 == 2) {
                alert("Título: "+obj.animes[1].titulo+"\nDescrição: "+obj.animes[1].sin);
            } else {
                alert("Opção inválida");
            }
            break;
        case 2:
            const opcao2 = prompt("Quais desses você prefere?\n"+obj.animes[2].titulo+"(1)"+obj.animes[3].titulo+"(2)");
            if (opcao2 == 1) {
                alert("Título: "+obj.animes[2].titulo+"\nDescrição: "+obj.animes[2].sin);
            } else if (opcao2 == 2) {
                alert("Título: "+obj.animes[3].titulo+"\nDescrição: "+obj.animes[3].sin);
            } else {
                alert("Opção inválida");
            }
            break;
        case 3:
            const opcao3 = prompt("Quais desses você prefere?\n"+obj.animes[4].titulo+"(1)"+obj.animes[5].titulo+"(2)");
            if (opcao3 == 1) {
                alert("Título: "+obj.animes[4].titulo+"\nDescrição: "+obj.animes[4].sin);
            } else if (opcao3 == 2) {
                alert("Título: "+obj.animes[5].titulo+"\nDescrição: "+obj.animes[5].sin);
            } else {
                alert("Opção inválida");
            }
            break;
        case 4:
            const opcao4 = prompt("Quais desses você prefere?\n"+obj.animes[6].titulo+"(1)"+obj.animes[7].titulo+"(2)");
            if (opcao4 == 1) {
                alert("Título: "+obj.animes[6].titulo+"\nDescrição: "+obj.animes[6].sin);
            } else if (opcao4 == 2) {
                alert("Título: "+obj.animes[7].titulo+"\nDescrição: "+obj.animes[7].sin);
            } else {
                alert("Opção inválida");
            }
            break;
        case 5:
            const opcao5 = prompt("Quais desses você prefere?\n"+obj.animes[8].titulo+"(1)"+obj.animes[9].titulo+"(2)");
            if (opcao5 == 1) {
                alert("Título: "+obj.animes[8].titulo+"\nDescrição: "+obj.animes[8].sin);
            } else if (opcao5 == 2) {
                alert("Título: "+obj.animes[9].titulo+"\nDescrição: "+obj.animes[9].sin);
            } else {
                alert("Opção inválida");
            }
            break;
        case 6:
            const opcao6 = prompt("Quais desses você prefere?\n"+obj.animes[10].titulo+"(1)"+obj.animes[11].titulo+"(2)");
            if (opcao6 == 1) {
                alert("Título: "+obj.animes[10].titulo+"\nDescrição: "+obj.animes[10].sin);
            } else if (opcao6 == 2) {
                alert("Título: "+obj.animes[11].titulo+"\nDescrição: "+obj.animes[11].sin);
            } else {
                alert("Opção inválida");
            }
            break;
        default:
            alert(quest1+"<--- não é uma escolha válida");
    }

} else {
    const msg = `
    Saia daqui escória da humanidade!!!!!!!!!!!
    JÁÁÁÁÁÁÁÁÁÁ!!!!!!!!!!
    `;
    const quest1 = alert(msg);
}

