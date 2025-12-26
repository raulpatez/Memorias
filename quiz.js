// ===== APLICA TEMA GLOBAL =====
document.addEventListener("DOMContentLoaded", () => {
  const tema = localStorage.getItem("tema") || "light";
  document.documentElement.setAttribute("data-theme", tema);
});

// ===== DADOS =====
const uid = localStorage.getItem("uid");
if (!uid) window.location.href = "../login/login.html";

const perfis = JSON.parse(localStorage.getItem("perfis")) || {};
document.getElementById("usuario").innerText =
  `Jogador: ${perfis[uid]?.nome || "Usuário"}`;

const quizAtual = localStorage.getItem("quizAtual");

if (!quizAtual) {
    alert("Quiz não encontrado");
    window.location.href = "../index.html";
}


    // ===== BANCO DE QUIZZES (DIFERENTE PARA CADA AMIGO) =====
    const quizzes = {

        amigo1: [
            { pergunta: "Qual é a cor favorita da Ana?", respostas: ["Roxo", "Lilás", "Rosa", "Azul"], correta: 0 },
            { pergunta: "Qual das competições abaixo a Ana provavelmente ganharia?", respostas: ["Beleza", "Inteligência", "Humor", "Simpatia"], correta: 0 },
            { pergunta: "A Ana prefere pizza com ketchup?", respostas: ["Sim", "Não", "Depende"], correta: 1 },
            { pergunta: "Qual a categoria de filmes favorita de Ana?:", respostas: ["Comédia Romântica", "Terror", "Ação", "Animação"], correta: 3 },
            { pergunta: "Quantos irmãos/irmã a Ana tem?", respostas: ["1", "2", "3", "Nenhum"], correta: 1 },
            { pergunta: "Qual a profissão dos sonhos da Ana?", respostas: ["Ser Médica", "Ser Veterinária", "Ser Psicóloga", "Ser Garota de Programa"], correta: 2 },
            { pergunta: "Qual país a Ana gostaria de morar?", respostas: ["Japão", "Brasil", "Itália", "EUA"], correta: 0 },
            { pergunta: "Qual instrumento musical a Ana toca?", respostas: ["Flauta", "Piano", "Violão", "Nenhum"], correta: 3 },
            { pergunta: "Qual a categoria de música favorita de Ana?", respostas: ["Rock, Pop, Kpop", "80's, Rock, Trap", "Pop, Kpop, Trap", "Nenhuma da opções"], correta: 2 },
            { pergunta: "Qual animal Ana seria?", respostas: ["Cadela", "Gata", "Leoa", "Pinguim"], correta: 1 }
        ],

        amigo2: [
            { pergunta: "Qual das opções abaixo Daniel prefere?", respostas: ["Peixe", "Carne", "Frango", "Camarão"], correta: 1 },
            { pergunta: "Em qual rede social Daniel possui um perfil fake?", respostas: ["Instagram", "Youtube", "Tik Tok", "Nenhum"], correta: 3 },
            { pergunta: "Qual estação do ano favorita de Daniel?", respostas: ["Verão", "Primavera", "Outono", "Inverno"], correta: 2 },
            { pergunta: "Daniel é mais ativo em qual rede social?:", respostas: ["Youtube", "Snapchat", "Discord", "Pinterest"], correta: 0 },
            { pergunta: "Qual lugar o Daniel mais gosta de ir?:", respostas: ["Casa da Vó", "Parque", "Shopping", "Trabalho"], correta: 1 },
            { pergunta: "Qual palavra o Daniel mais diz?:", respostas: ["Well", "Diva", "Sim", "Puta"], correta: 2 },
            { pergunta: "Qual é o cantor/ra favorito/a de Daniel?", respostas: ["Lady Gaga", "Anitta", "Chico Buarque", "Coldplay"], correta: 2 },
            { pergunta: "Qual das competições abaixo o Daniel provavelmente ganharia?", respostas: ["Beleza", "Inteligência", "Humor", "Simpatia"], correta: 2 },
            { pergunta: "Qual a profissão dos sonhos de Daniel?", respostas: ["Bombeiro", "Professor", "Gogo Boy", "Arquiteto"], correta: 0 },
            { pergunta: "Qual é a cor favorita de Daniel?", respostas: ["Azul", "Amarelo", "Vermelho", "Roxo"], correta: 3 }
        ],

        amigo3: [ // Pessoa 3
    { pergunta: "Qual é a marca de refrigerante favorita do Felipe?", respostas: ["Guaraná Antarctica", "Coca-Cola", "Pepsi", "Fanta"], correta: 0 },
    { pergunta: "Qual categoria de música o Felipe prefere?", respostas: ["R&B", "Pop", "Rock", "Funk"], correta: 0 },
    { pergunta: "O Felipe sabe tocar algum instrumento musical?", respostas: ["Não sabe tocar", "Violão", "Piano", "Bateria"], correta: 0 },
    { pergunta: "Qual é o signo do Felipe?", respostas: ["Gêmeos", "Câncer", "Touro", "Leão"], correta: 0 },
    { pergunta: "O Felipe moraria em outro país?", respostas: ["Sim, Índia", "Não", "Sim, EUA", "Sim, Portugal"], correta: 0 },
    { pergunta: "Qual é o hobby favorito do Felipe?", respostas: ["Jogar", "Ler", "Cozinhar", "Dormir"], correta: 0 },
    { pergunta: "Qual lugar o Felipe mais gosta de ir?", respostas: ["Praia", "Shopping", "Casa", "Cinema"], correta: 0 },
    { pergunta: "O Felipe prefere pizza com ketchup?", respostas: ["Sim", "Não", "Às vezes", "Nunca"], correta: 0 },
    { pergunta: "Qual categoria de filmes o Felipe prefere?", respostas: ["Drama/Musical", "Ação", "Terror", "Comédia"], correta: 0 },
    { pergunta: "Em qual competição Felipe provavelmente ganharia?", respostas: ["Humor", "Beleza", "Inteligência", "Simpatia"], correta: 0 }
],

amigo4: [ // Pessoa 4
    { pergunta: "Qual é o hobby favorito do Gabriel?", respostas: ["Ouvir música", "Ler", "Cozinhar", "Dormir"], correta: 0 },
    { pergunta: "Qual palavra o Gabriel mais fala?", respostas: ["Não respondeu", "Mano", "Tipo", "Amigo"], correta: 0 },
    { pergunta: "Qual é o cantor favorito do Gabriel?", respostas: ["PinkPantheress", "Drake", "Taylor Swift", "The Weeknd"], correta: 0 },
    { pergunta: "Qual proteína o Gabriel prefere?", respostas: ["Frango", "Carne", "Peixe", "Nenhum"], correta: 0 },
    { pergunta: "Quantos irmãos o Gabriel tem?", respostas: ["1", "0", "2", "3"], correta: 0 },
    { pergunta: "Qual estação do ano o Gabriel prefere?", respostas: ["Outono", "Verão", "Inverno", "Primavera"], correta: 0 },
    { pergunta: "Qual animal o Gabriel seria?", respostas: ["Cisne", "Gato", "Cachorro", "Leão"], correta: 0 },
    { pergunta: "O Gabriel tem perfil fake nas redes sociais?", respostas: ["Sim", "Não", "Talvez", "Nunca pensou"], correta: 0 },
    { pergunta: "Em qual rede social o Gabriel passa mais tempo?", respostas: ["Twitter", "Instagram", "TikTok", "YouTube"], correta: 0 },
    { pergunta: "Qual é a cor favorita do Gabriel?", respostas: ["Vermelho", "Preto", "Azul", "Roxo"], correta: 0 }
],

amigo5: [ // Pessoa 5 (sem respostas definidas)
    { pergunta: "Em qual competição a pessoa 5 provavelmente ganharia?", respostas: ["Beleza", "Inteligência", "Humor", "Simpatia"], correta: 0 },
    { pergunta: "Qual lugar a pessoa 5 mais gosta de ir?", respostas: ["Praia", "Casa", "Shopping", "Cinema"], correta: 0 },
    { pergunta: "Qual profissão a pessoa 5 gostaria de ter?", respostas: ["Médico", "Engenheiro", "Designer", "Programador"], correta: 0 },
    { pergunta: "A pessoa 5 prefere pizza com ketchup?", respostas: ["Sim", "Não", "Às vezes", "Nunca"], correta: 0 },
    { pergunta: "A pessoa 5 moraria em outro país?", respostas: ["Sim", "Não", "Talvez", "Nunca pensou"], correta: 0 },
    { pergunta: "Qual categoria de música a pessoa 5 prefere?", respostas: ["Pop", "Rock", "Funk", "Rap"], correta: 0 },
    { pergunta: "Qual marca de refrigerante a pessoa 5 prefere?", respostas: ["Coca-Cola", "Guaraná", "Pepsi", "Fanta"], correta: 0 },
    { pergunta: "A pessoa 5 sabe tocar algum instrumento?", respostas: ["Sim", "Não", "Está aprendendo", "Nunca tentou"], correta: 0 },
    { pergunta: "Qual é o signo da pessoa 5?", respostas: ["Áries", "Touro", "Gêmeos", "Outro"], correta: 0 },
    { pergunta: "Qual categoria de filmes a pessoa 5 prefere?", respostas: ["Comédia", "Drama", "Ação", "Terror"], correta: 0 }
],

amigo6: [ // Pessoa 6
    { pergunta: "Qual palavra a Larissa mais fala?", respostas: ["Juroo/Maceta", "Mano", "Tipo", "Amiga"], correta: 0 },
    { pergunta: "Qual é o hobby favorito da Larissa?", respostas: ["Cozinhar", "Ler", "Dormir", "Jogar"], correta: 0 },
    { pergunta: "Quantos irmãos a Larissa tem?", respostas: ["3", "1", "2", "Nenhum"], correta: 0 },
    { pergunta: "Qual é a cor favorita da Larissa?", respostas: ["Roxo", "Preto", "Azul", "Vermelho"], correta: 0 },
    { pergunta: "Qual proteína a Larissa prefere?", respostas: ["Frango", "Carne", "Peixe", "Nenhum"], correta: 0 },
    { pergunta: "Em qual rede social a Larissa passa mais tempo?", respostas: ["Instagram", "TikTok", "Twitter", "YouTube"], correta: 0 },
    { pergunta: "Em qual competição a Larissa ganharia?", respostas: ["Humor", "Beleza", "Inteligência", "Simpatia"], correta: 0 },
    { pergunta: "A Larissa moraria em outro país?", respostas: ["Sim, Itália", "Não", "Sim, EUA", "Sim, França"], correta: 0 },
    { pergunta: "Qual lugar a Larissa mais gosta de ir?", respostas: ["Centrinho", "Shopping", "Praia", "Casa"], correta: 0 },
    { pergunta: "A Larissa gosta de pizza com ketchup?", respostas: ["Sim", "Não", "Às vezes", "Nunca"], correta: 0 }
],

amigo7: [ // Pessoa 7
    { pergunta: "Qual estação do ano a Laysa prefere?", respostas: ["Inverno", "Verão", "Outono", "Primavera"], correta: 0 },
    { pergunta: "Qual é o cantor favorito da Laysa?", respostas: ["Lana Del Rey", "Taylor Swift", "Billie Eilish", "Ariana Grande"], correta: 0 },
    { pergunta: "Qual categoria de filmes a Laysa prefere?", respostas: ["Comédia romântica", "Drama", "Terror", "Ação"], correta: 0 },
    { pergunta: "Qual é a marca de refrigerante favorita da Laysa?", respostas: ["Coca-Cola", "Guaraná", "Pepsi", "Fanta"], correta: 0 },
    { pergunta: "A Laysa tem perfil fake nas redes sociais?", respostas: ["Não", "Sim", "Talvez", "Nunca pensou"], correta: 0 },
    { pergunta: "Qual profissão a Laysa gostaria de ter?", respostas: ["Analista de dados", "Programadora", "Designer", "Engenheira"], correta: 0 },
    { pergunta: "Qual animal a Laysa seria?", respostas: ["Cavalier", "Gato", "Cachorro", "Cavalo"], correta: 0 },
    { pergunta: "A Laysa sabe tocar algum instrumento?", respostas: ["Não", "Violão", "Piano", "Bateria"], correta: 0 },
    { pergunta: "Qual proteína a Laysa prefere?", respostas: ["Frango, camarão e peixe", "Carne", "Apenas frango", "Nenhum"], correta: 0 },
    { pergunta: "Qual é a cor favorita da Laysa?", respostas: ["Rosa", "Preto", "Roxo", "Azul"], correta: 0 }
],

amigo8: [ // Pessoa 8
    { pergunta: "O Lucas prefere pizza com ketchup?", respostas: ["Não", "Sim", "Às vezes", "Nunca pensou"], correta: 0 },
    { pergunta: "Qual lugar o Lucas mais gosta de ir?", respostas: ["Igreja", "Shopping", "Praia", "Casa"], correta: 0 },
    { pergunta: "Qual categoria de música o Lucas prefere?", respostas: ["Gospel", "Pop", "Rock", "Rap"], correta: 0 },
    { pergunta: "Qual é o hobby favorito do Lucas?", respostas: ["Praticar ou assistir futebol", "Dormir", "Jogar", "Ouvir música"], correta: 0 },
    { pergunta: "O Lucas moraria em outro país?", respostas: ["Sim, Canadá ou Portugal", "Não", "Sim, EUA", "Talvez"], correta: 0 },
    { pergunta: "Quantos irmãos o Lucas tem?", respostas: ["0", "1", "2", "3"], correta: 0 },
    { pergunta: "Em qual competição o Lucas ganharia?", respostas: ["Simpatia", "Beleza", "Inteligência", "Humor"], correta: 0 },
    { pergunta: "Em qual rede social o Lucas passa mais tempo?", respostas: ["Instagram", "Twitter", "TikTok", "YouTube"], correta: 0 },
    { pergunta: "Qual palavra o Lucas mais fala?", respostas: ["Mano", "Tipo", "Amigo", "Gente"], correta: 0 },
    { pergunta: "Qual é o cantor favorito do Lucas?", respostas: ["Thalles Roberto", "Kirk Franklin", "Aline Barros", "Outro"], correta: 0 }
],

amigo9: [ // Pessoa 9 (sem respostas)
    { pergunta: "Qual estação do ano a pessoa 9 prefere?", respostas: ["Verão", "Inverno", "Outono", "Primavera"], correta: 0 },
    { pergunta: "Qual é a cor favorita da pessoa 9?", respostas: ["Azul", "Preto", "Roxo", "Vermelho"], correta: 0 },
    { pergunta: "A pessoa 9 tem perfil fake nas redes sociais?", respostas: ["Sim", "Não", "Talvez", "Nunca pensou"], correta: 0 },
    { pergunta: "Qual categoria de filmes a pessoa 9 prefere?", respostas: ["Drama", "Comédia", "Terror", "Ação"], correta: 0 },
    { pergunta: "Qual profissão a pessoa 9 gostaria de ter?", respostas: ["Engenheiro", "Médico", "Designer", "Programador"], correta: 0 },
    { pergunta: "Qual lugar a pessoa 9 mais gosta de ir?", respostas: ["Casa", "Praia", "Shopping", "Cinema"], correta: 0 },
    { pergunta: "Qual proteína a pessoa 9 prefere?", respostas: ["Frango", "Carne", "Peixe", "Nenhum"], correta: 0 },
    { pergunta: "A pessoa 9 sabe tocar algum instrumento?", respostas: ["Não", "Violão", "Piano", "Bateria"], correta: 0 },
    { pergunta: "A pessoa 9 moraria em outro país?", respostas: ["Sim", "Não", "Talvez", "Nunca pensou"], correta: 0 },
    { pergunta: "Em qual competição a pessoa 9 ganharia?", respostas: ["Inteligência", "Beleza", "Humor", "Simpatia"], correta: 0 }
],

amigo10: [ // Pessoa 10 (sem respostas)
    { pergunta: "Qual palavra o Raul mais fala?", respostas: ["Socorro", "Misericórdia", "Juro", "Puta"], correta: 2 },
    { pergunta: "Qual categoria de música o Raul prefere?", respostas: ["Pop", "Rock", "Rap", "Funk"], correta: 0 },
    { pergunta: "Qual é o cantor favorito do Raul?", respostas: ["Ariana Grande", "Drake", "The Weeknd", "Lana Del Rey"], correta: 0 },
    { pergunta: "Qual é a marca de refrigerante favorita do Raul?", respostas: ["Coca-Cola", "Guaraná", "Pepsi", "Sprite"], correta: 3 },
    { pergunta: "Qual é o hobby favorito do Raul?", respostas: ["Ouvir música", "Dormir", "Jogar", "Ler"], correta: 2 },
    { pergunta: "O Raul prefere pizza com ketchup?", respostas: ["Sim", "Não", "Às vezes", "Nunca"], correta: 0 },
    { pergunta: "Qual animal o Raul seria?", respostas: ["Gato", "Cachorro", "Leão", "Cavalo"], correta: 1 },
    { pergunta: "Quantos irmãos o Raul tem?", respostas: ["10", "7", "3", "nenhum"], correta: 0 },
    { pergunta: "Em qual rede social o Raul passa mais tempo?", respostas: ["Instagram", "TikTok", "Twitter", "YouTube"], correta:3 },
    { pergunta: "Qual é o signo do Raul?", respostas: ["Áries", "Touro", "Peixes", "Capricornio"], correta: 2 }
],

amigo11: [ // Pessoa 11
    { pergunta: "Qual é o signo da Sofia?", respostas: ["Gêmeos", "Áries", "Leão", "Virgem"], correta: 0 },
    { pergunta: "Qual lugar a Sofia mais gosta de ir?", respostas: ["Santo André", "Praia", "Casa", "Shopping"], correta: 0 },
    { pergunta: "Em qual competição a Sofia ganharia?", respostas: ["Simpatia", "Beleza", "Humor", "Inteligência"], correta: 0 },
    { pergunta: "Qual palavra a Sofia mais fala?", respostas: ["Amigos", "Mano", "Tipo", "Gente"], correta: 0 },
    { pergunta: "A Sofia prefere pizza com ketchup?", respostas: ["Não", "Sim", "Às vezes", "Nunca"], correta: 0 },
    { pergunta: "Qual categoria de filmes a Sofia prefere?", respostas: ["Drama", "Comédia", "Terror", "Ação"], correta: 0 },
    { pergunta: "A Sofia moraria em outro país?", respostas: ["Sim, Espanha", "Sim, Portugal", "Sim, França", "Nunca"], correta: 0 },
    { pergunta: "Qual é a cor favorita da Sofia?", respostas: ["Vermelho", "Preto", "Azul", "Roxo"], correta: 0 },
    { pergunta: "Qual é o cantor favorito da Sofia?", respostas: ["Tyler, Frank Ocean e Daniel Caesar", "Drake", "The Weeknd", "Outro"], correta: 0 },
    { pergunta: "Quantos irmãos a Sofia tem?", respostas: ["3", "1", "2", "0"], correta: 0 }
],

amigo12: [ // Pessoa 12
    { pergunta: "Qual é a marca de refrigerante favorita do Tiago?", respostas: ["Fanta", "Coca-Cola", "Guaraná", "Pepsi"], correta: 0 },
    { pergunta: "Qual animal o Tiago seria?", respostas: ["Cachorro", "Gato", "Leão", "Cavalo"], correta: 0 },
    { pergunta: "O Tiago tem perfil fake?", respostas: ["Não", "Sim", "Talvez", "Nunca pensou"], correta: 0 },
    { pergunta: "Qual profissão o Tiago gostaria de ter?", respostas: ["Engenheiro eletricista", "Programador", "Designer", "Professor"], correta: 0 },
    { pergunta: "Qual categoria de música o Tiago prefere?", respostas: ["City pop, bossa nova, rock, pagode e pop", "Apenas pop", "Rap", "Funk"], correta: 0 },
    { pergunta: "Em qual rede social o Tiago passa mais tempo?", respostas: ["YouTube", "Instagram", "TikTok", "Twitter"], correta: 0 },
    { pergunta: "Qual é o hobby favorito do Tiago?", respostas: ["Tocar música e jogar", "Dormir", "Cozinhar", "Ler"], correta: 0 },
    { pergunta: "Qual estação do ano o Tiago prefere?", respostas: ["Outono", "Verão", "Inverno", "Primavera"], correta: 0 },
    { pergunta: "Qual proteína o Tiago prefere?", respostas: ["Carne", "Frango", "Peixe", "Nenhum"], correta: 0 },
    { pergunta: "O Tiago sabe tocar algum instrumento?", respostas: ["Sim, piano", "Não", "Violão", "Bateria"], correta: 0 }
],

amigo13: [ // Pessoa 13
    { pergunta: "Em qual competição a Vivi ganharia?", respostas: ["Inteligência", "Beleza", "Humor", "Simpatia"], correta: 0 },
    { pergunta: "Qual lugar a Vivi mais gosta de ir?", respostas: ["Cama e praia", "Shopping", "Cinema", "Casa"], correta: 0 },
    { pergunta: "Qual é a cor favorita da Vivi?", respostas: ["Roxo", "Preto", "Azul", "Vermelho"], correta: 0 },
    { pergunta: "Qual categoria de filmes a Vivi prefere?", respostas: ["Comédia romântica", "Drama", "Ação", "Terror"], correta: 0 },
    { pergunta: "A Vivi moraria em outro país?", respostas: ["Espanha", "Não", "Portugal", "EUA"], correta: 0 },
    { pergunta: "Qual palavra a Vivi mais fala?", respostas: ["Divo/divou/divônico", "Mano", "Tipo", "Amiga"], correta: 0 },
    { pergunta: "Qual é o cantor favorito da Vivi?", respostas: ["Don Toliver", "Drake", "The Weeknd", "Outro"], correta: 0 },
    { pergunta: "A Vivi prefere pizza com ketchup?", respostas: ["Não", "Sim", "Às vezes", "Nunca"], correta: 0 },
    { pergunta: "Quantos irmãos a Vivi tem?", respostas: ["2", "1", "0", "3"], correta: 0 },
    { pergunta: "Em qual rede social a Vivi passa mais tempo?", respostas: ["Instagram", "TikTok", "Twitter", "YouTube"], correta: 0 }
],

amigo14: [ // Pessoa 14
    { pergunta: "Qual estação do ano a Vege prefere?", respostas: ["Verão", "Outono", "Inverno", "Primavera"], correta: 0 },
    { pergunta: "Qual animal a Vege seria?", respostas: ["Cavalo", "Gato", "Cachorro", "Leão"], correta: 0 },
    { pergunta: "Qual profissão a Vege gostaria de ter?", respostas: ["Pilota de avião", "Engenheira", "Médica", "Designer"], correta: 0 },
    { pergunta: "Qual proteína a Vege prefere?", respostas: ["Carne", "Frango", "Peixe", "Nenhum"], correta: 0 },
    { pergunta: "A Vege tem perfil fake?", respostas: ["Não", "Sim", "Talvez", "Nunca pensou"], correta: 0 },
    { pergunta: "Qual é a marca de refrigerante favorita da Vege?", respostas: ["Guaraná", "Coca-Cola", "Pepsi", "Fanta"], correta: 0 },
    { pergunta: "Qual é o hobby favorito da Vege?", respostas: ["Ler, ver filmes e fazer compras", "Dormir", "Cozinhar", "Jogar"], correta: 0 },
    { pergunta: "Qual categoria de música a Vege prefere?", respostas: ["Pop, MPB, R&B, samba e latinas", "Apenas pop", "Rock", "Rap"], correta: 0 },
    { pergunta: "Qual é o signo da Vege?", respostas: ["Virgem", "Leão", "Áries", "Gêmeos"], correta: 0 },
    { pergunta: "A Vege sabe tocar algum instrumento?", respostas: ["Sim, DJ", "Não", "Violão", "Piano"], correta: 0 }
],

amigo15: [ // Pessoa 15
    { pergunta: "Qual lugar a Yasmin mais gosta de ir?", respostas: ["Salvador", "Praia", "Casa", "Cinema"], correta: 0 },
    { pergunta: "Qual é a cor favorita da Yasmin?", respostas: ["Azul", "Preto", "Roxo", "Vermelho"], correta: 0 },
    { pergunta: "Em qual competição a Yasmin ganharia?", respostas: ["Inteligência", "Beleza", "Humor", "Simpatia"], correta: 0 },
    { pergunta: "Qual é o cantor favorito da Yasmin?", respostas: ["Gal Costa", "Caetano Veloso", "Maria Bethânia", "Outro"], correta: 0 },
    { pergunta: "Em qual rede social a Yasmin passa mais tempo?", respostas: ["Instagram", "Twitter", "TikTok", "YouTube"], correta: 0 },
    { pergunta: "A Yasmin prefere pizza com ketchup?", respostas: ["Não", "Sim", "Às vezes", "Nunca"], correta: 0 },
    { pergunta: "A Yasmin moraria em outro país?", respostas: ["Sim, qualquer um", "Não", "Talvez", "Nunca"], correta: 0 },
    { pergunta: "Qual categoria de filmes a Yasminprefere?", respostas: ["Drama", "Comédia", "Terror", "Ação"], correta: 0 },
    { pergunta: "Quantos irmãos a Yasmin tem?", respostas: ["1", "0", "2", "3"], correta: 0 },
    { pergunta: "Qual palavra a Yasmin mais fala?", respostas: ["Girl", "Mano", "Tipo", "Amiga"], correta: 0 }
],
};

// ===== CARREGAR QUIZ =====
const perguntas = quizzes[quizAtual];
const quizDiv = document.getElementById("quiz");
const nomesAmigos = {
  amigo1: "Ana",
  amigo2: "Daniel",
  amigo3: "Ana",
  amigo4: "Daniel",
  amigo5: "Ana",
  amigo6: "Daniel",
  amigo7: "Ana",
  amigo8: "Daniel",
  amigo9: "Ana",
  amigo10: "Daniel",
  amigo11: "Daniel",
  amigo12: "Ana",
  amigo13: "Daniel",
  amigo14: "Ana",
  amigo15: "Daniel"
};

const nomeAmigo = nomesAmigos[quizAtual] || quizAtual;

const titulo = document.getElementById("titulo-quiz");
titulo.innerText = `Quiz da(o) ${nomeAmigo}`;


titulo.innerText = `Quiz ${quizAtual.toUpperCase()}`;

perguntas.forEach((q, i) => {
    let html = `<div class="question"><p>${i + 1}. ${q.pergunta}</p>`;
    q.respostas.forEach((alt, j) => {
        html += `
            <label>
                <input type="radio" name="p${i}" value="${j}">
                ${alt}
            </label>
        `;
    });
    html += `</div>`;
    quizDiv.innerHTML += html;
});

// ===== FINALIZAR =====
function finalizarQuiz() {
    let acertos = 0;

    perguntas.forEach((q, i) => {
        const marcada = document.querySelector(`input[name=p${i}]:checked`);
        if (marcada && Number(marcada.value) === q.correta) {
            acertos++;
        }
    });

    document.getElementById("resultado").innerText =
        `Você acertou ${acertos} de 10`;

    let resultados = JSON.parse(localStorage.getItem("resultados")) || {};
if (!resultados[uid]) resultados[uid] = {};
resultados[uid][quizAtual] = acertos;
localStorage.setItem("resultados", JSON.stringify(resultados));

}

// ===== VOLTAR =====
function voltarHome() {
    window.location.href = "../index.html";
}

const temaSalvo = localStorage.getItem("tema") || "light";
document.documentElement.setAttribute("data-theme", temaSalvo);
