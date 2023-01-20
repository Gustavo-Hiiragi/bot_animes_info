const texto = `
{
    "animes":[
        { "titulo":"Kara no Kyoukai" , "sin":"A série se passa na cidade japonesa Mifune no ano de 1998. Onde uma série de suicídios sem razão aparente abala a cidade e somente uma jovem chamada Ryougi Shiki pode ajudar. Isso porque Shiki possui uma habilidade sobrenatural de enxergar 'linhas de morte' em seres vivos e coisas inanimadas, Chokushi no Magan (直死の魔眼 Mystic Eyes of Death Perception?, lit. Olhos Místicos de Percepção de Morte). Para poder discernir entre o que deve ou não ser visto, a garota conta com a ajuda de dois grandes amigos: Kokutou Mikiya, amigo de Shiki, sensível e perspicaz e, Aozaki Tohko, detetive, maga, exorcista e mentora dos dois. Juntos, o trio leva uma vida 'nada normal' tratando de casos paranormais e assassinatos que ocorrem na cidade." },
        { "titulo":"Elfen Lied" , "sin":"Diclonius, a nova evolução humana… mutantes, ditos, escolhidos por Deus para serem os aniquiladores da humanidade. Possuem dois chifres em suas cabeças e uma estranha habilidade similar a telecinese sob forma de braços. Extremamente perigosos e cientes de sua 'missão', foram subjugados pelo governo que os mantém confinados em laboratórios. Lucy é uma Diclonios cuja jovem e bela aparência escondem uma personalidade psicótica e ela, após matar dezenas de guardas, escapa de seu confinamento, porém é alvejada por um tiro na cabeça e cai no mar… Ela é encontrada por Kouta e Yuka na praia, mas com uma personalidade totalmente diferente, infantil e inocente, sem memórias e a única coisa que fala é nyuu. Os dois levam-na para casa e decidem cuidar dela, batizando-a de Nyuu. Entretanto, parece que a Lucy ainda não está morta e nem se esqueceu de seu passado." },
        { "titulo":"Go Toubun no Hanayome" , "sin":"Um dia, um segundo ano de escola secundária pobre chamado Fuutarou Uesugi se depara com um show particular de tutoria com bom salário. Mas seus alunos são seus colegas de classe! E eles são quíntuplos !! São todas garotas lindas, mas são desordeiras que odeiam estudar e estão à beira de serem reprovadas. E sua primeira tarefa é simplesmente ganhar a confiança das irmãs ?! Todo dia é uma festa! A cortina está subindo na comédia romântica peculiar dos Quíntuplos Nakano com cinco vezes a fofura !!" },
        { "titulo":"Kaguya-Sama" , "sin":"Considerado um gênio devido a ter as notas mais altas do país, Miyuki Shirogane lidera o prestigioso conselho estudantil da Academia Shuchiin como seu presidente, trabalhando ao lado do belo e rico vice-presidente Kaguya Shinomiya. Os dois são frequentemente considerados como o casal perfeito pelos alunos, apesar de não terem qualquer tipo de relacionamento romântico. No entanto, a verdade é que depois de passar tanto tempo juntos, os dois desenvolveram sentimentos um pelo outro; infelizmente, nenhum deles está disposto a confessar, pois isso seria um sinal de fraqueza. Com seu orgulho como estudantes de elite na linha, Miyuki e Kaguya embarcam em uma missão para fazer o que for necessário para obter uma confissão do outro. Através de suas travessuras diárias, a batalha do amor começa!" },
        { "titulo":"Dragon Ball Z", "sin":"Dragon Ball Z é a continuação de Dragon Ball, cinco anos após Goku ter derrotado Piccolo. Goku está mais velho e se casou com Chichi, como havia prometido no ultimo Tenkaichi Budokai de Dragon Ball. Em Dragon Ball Z as histórias não são mais tão humorísticas e começam a ter mais ação." },
        { "titulo":"One Piece", "sin":"Houve um homem que conquistou tudo aquilo que o mundo tinha a oferecer, o lendário Rei dos Piratas, Gold Roger. Capturado e condenado à execução pelo Governo Mundial, suas últimas palavras lançaram legiões aos mares. 'Meu tesouro? Se quiserem, podem pegá-lo. Procurem-no! Ele contém tudo que este mundo pode oferecer!'. Foi a revelação do maior tesouro, o One Piece, cobiçado por homens de todo o mundo, sonhando com fama e riqueza imensuráveis… Assim começou a Grande Era dos Piratas!" },
        { "titulo":"Another", "sin":"Há 26 anos, em uma classe do terceiro colegial, uma estudante chamada Misaki, era a mais popular e adorada do colégio, por causa de sua beleza e sua qualidade nos esportes. Porém, um dia, Misaki acaba por vir a falecer e como homenagem, seus amigos decidem 'fingir' que ela está viva com eles até o dia da formatura. Anos depois, em uma primavera de 1998, um garoto chamado Sakakibara Kouichi, se muda para a cidade e começa a estudar na mesma escola do ocorrido. Lá ele encontra todos os alunos rodeados por uma estranha atmosfera, principalmente uma bela estudante chamada Mei Misaki. O que Kouichi não esperava é que a Misaki, de sua sala, tivesse mais relações do que o esperado com a história do passado do colégio." },
        { "titulo":"Blood C", "sin":"Saya Kisaragi tem a missão de caçar e matar seres conhecidos como furukimono, cujo objetivo é alimentar-se dos seres humanos. Ela precisará proteger sua cidade e sua escola contra esta ameaça." },
        { "titulo":"Kono Suba", "sin":"A vida de Satou Kazuma, um hikikomori que gosta de jogos, subitamente chega a um fim devido a um acidente de trânsito… Era para ser assim, mas quando ele acordou, uma linda garota que dizia ser uma deusa estava diante dele. Ela então o convida para um outro mundo para o qual ele só pode levar uma coisa que escolher. A partir daí a grande aventura para derrotar o Rei Demônio começa para o Kazuma reencarnado… Ou é o que você pensaria, mas é a luta para conseguir comida, roupa e abrigo que começa! Apesar de Kazuma querer viver em paz, a deusa continua causando problemas um atrás do outro e eles acabam atraindo a atenção do exército do Rei Demônio!" },
        { "titulo":"Blend S", "sin":"Sakura Nomiya é, por natureza, uma pessoa com má sorte e sempre entra em problemas, mas conhece Dino, que gerencia uma cafeteria. No entanto, não é uma cafeteria qualquer, e as garçonetes têm de agir de acordo com os seus atributos" },
        { "titulo":"High School DxD", "sin":"O protagonista da história é o estudante burro e tarado, Hyoudou Issei, que conseguiu finalmente arranjar sua primeira namorada. Mas, sua felicidade dura pouco, pois logo no primeiro dia de encontro é assassinado por ela. A sorte dele é que foi revivido a tempo pela garota mais bonita do colégio, Rias Gremory, só que Issei não foi simplesmente ressuscitado, foi na verdade reencarnado como o demônio de Rias e agora passará a ser seu subordinado." },
        { "titulo":"No game no Life", "sin":"A história de 'No Game, No Life' se passa ao redor de Sora e Shiro, irmãos cuja reputação é a de serem NEETs brilhantes. Esses dois gamers até mesmo consideram o mundo real um 'jogo com péssimos gráficos'. Certo dia, eles são evocados por um garoto chamado 'Deus' para um mundo alternativo. Lá, Deus proibiu a guerra e declarou este um mundo onde 'tudo é decidido com jogos', até fronteiras de países. A humanidade foi conduzida de volta à única cidade restante pelas outras raças. Serão Sora e Shiro os 'Salvadores da Humanidade' neste mundo alternativo? Que os jogos comecem!" }
    ]
}
`

const obj = JSON.parse(texto);