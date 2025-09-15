// Objeto que guarda todas as cenas do jogo e suas opções.
const gameStates = {
    // Cena inicial: A aposta na quadra
    start: {
        text: "A aposta é simples: correr três voltas na quadra do bairro. Seus amigos, Gabriel e Ana, estão na linha de largada. Você se prepara para começar.",
        choices: [
            { text: "Começar a corrida.", next: "start_race" },
            { text: "Desistir da aposta.", next: "give_up" }
        ]
    },
    // Cenário: A corrida e a captura
    start_race: {
        text: "Você corre na frente, o coração acelerado. Na segunda volta, um assobio agudo te faz parar. As luzes dos postes piscam. Uma sombra alta e esguia surge da escuridão do beco. Uma mão fria cobre sua boca, e você sente uma picada no pescoço. Sua visão escurece.",
        choices: [
            { text: "Fim da corrida. Você acorda...", next: "wake_up_in_house" }
        ]
    },
    // Cenário: Desistir da aposta
    give_up: {
        text: "Você decide que a aposta não vale a pena. Seus amigos riem e te chamam de covarde, mas você sente um alívio imenso. Ao voltar para casa, você não consegue tirar da cabeça o assobio que ouviu, parecia o som de alguém te chamando do outro lado da rua.",
        choices: [
            { text: "Fim do jogo. Recomeçar.", next: "start" }
        ]
    },
    // Cenário: Miguel acorda na casa
    wake_up_in_house: {
        text: "Você abre os olhos, a cabeça latejando. A luz fraca da manhã entra por uma janela suja. Você está deitado no chão de uma sala empoeirada, cheia de móveis cobertos por lençóis brancos. O ar cheira a mofo e a algo doce e podre. Você não está amarrado.",
        choices: [
            { text: "Tentar abrir a porta da sala.", next: "try_door" },
            { text: "Procurar uma janela para ver onde está.", next: "search_window" }
        ]
    },
    // Cenário: Tentar a porta
    try_door: {
        text: "Você gira a maçaneta, mas a porta não abre. Ela está trancada. Você ouve um arrastar de móveis no andar de cima. Uma risada de criança ecoa pelas paredes.",
        choices: [
            { text: "Gritar por ajuda.", next: "scream_help" },
            { text: "Subir as escadas para ver o que é.", next: "go_upstairs" }
        ]
    },
    // Cenário: Procurar uma janela
    search_window: {
        text: "Você se aproxima da janela suja. A visão está embaçada, mas você consegue ver que a casa está no meio de um matagal. Não há outras casas por perto. A mesma figura alta e esguia que te pegou na rua está parada de costas, do lado de fora da casa.",
        choices: [
            { text: "Fingir que não a viu e voltar para o centro da sala.", next: "pretend_not_to_see" },
            { text: "Tentar quebrar a janela para fugir.", next: "break_window" }
        ]
    },
    // Cenário: Gritar por ajuda
    scream_help: {
        text: "Seu grito ecoa na casa vazia, mas não há resposta. O som é cortado por um assobio alto e agudo, o mesmo que você ouviu na rua. De repente, uma voz de criança sussurra: 'Ele não pode te ouvir...' O assobio volta, mais perto.",
        choices: [
            { text: "Correr para a porta.", next: "try_door" },
            { text: "Ficar em silêncio e procurar um esconderijo.", next: "hide_and_wait" }
        ]
    },
    // Cenário: Subir as escadas
    go_upstairs: {
        text: "Você sobe as escadas lentamente. Elas rangem a cada passo. No andar de cima, há um corredor longo. As portas de alguns quartos estão abertas. Você ouve o som de um choro baixo vindo do quarto no final do corredor.",
        choices: [
            { text: "Ignorar o choro e entrar no primeiro quarto.", next: "first_room" },
            { text: "Entrar no quarto de onde vem o choro.", next: "crying_room" }
        ]
    },
    // Cenário: Fingir que não viu
    pretend_not_to_see: {
        text: "Você finge que não a viu e volta para o centro da sala, lentamente. O assobio do lado de fora para. Um silêncio pesado preenche o ar. Você sente um frio repentino atrás de você.",
        choices: [
            { text: "Lutar por sua vida.", next: "fight_back" },
            { text: "Congelar de medo.", next: "frozen" }
        ]
    },
    // Cenário: Quebrar a janela (Final 1 - Ruim)
    break_window: {
        text: "Você pega um vaso de flores velho e joga na janela. O vidro estilhaça e você tenta pular. Mas, a figura lá fora se vira. Seus olhos são como brasas vermelhas. Ela te agarra e você é puxado para fora, enquanto seus gritos se perdem no mato. Você é o novo brinquedo dela.",
        choices: [
            { text: "Fim do jogo. Recomeçar.", next: "start" }
        ]
    },
    // Cenário: Esconder e esperar
    hide_and_wait: {
        text: "Você se esconde atrás de um sofá rasgado. Os passos lentos e arrastados vêm do andar de cima e param bem acima de sua cabeça. Um silêncio quebra com um barulho de algo caindo. A porta da sala se abre lentamente. A figura está na porta.",
        choices: [
            { text: "Correr para fora.", next: "try_to_escape" },
            { text: "Ficar escondido e rezar para que ela não o veja.", next: "stay_hidden" }
        ]
    },
    // Cenário: Entrar no primeiro quarto
    first_room: {
        text: "Você entra no primeiro quarto, fechando a porta com cuidado. A sala está cheia de livros velhos. Uma porta no fundo do quarto está entreaberta e uma luz fraca vem de lá. Você ouve passos se aproximando no corredor.",
        choices: [
            { text: "Tentar se esconder no armário.", next: "hide_in_closet" },
            { text: "Entrar na porta que emite a luz.", next: "secret_room" }
        ]
    },
    // Cenário: Entrar no quarto que chora (Final 2 - Ruim)
    crying_room: {
        text: "Você entra no quarto. O choro para. Na cama, uma boneca velha com roupas rasgadas e olhos de vidro te olha. Você ouve a porta se fechar atrás de você. Uma voz sussurra: 'Você é tão tolo quanto ele...'. A boneca se vira sozinha, e um sussurro te atinge. Você sente a cabeça girar. Sua visão fica turva. Você é apenas uma nova alma para esta casa.",
        choices: [
            { text: "Fim do jogo. Recomeçar.", next: "start" }
        ]
    },
    // Cenário: Final de combate (Final 3 - Ruim)
    fight_back: {
        text: "Você se vira para lutar, mas não há nada. A sombra está atrás de você. Você sente uma picada no pescoço e sua visão escurece. 'Você não pode lutar contra o que você não pode ver...'. Fim de jogo. Você é a próxima vítima da casa.",
        choices: [
            { text: "Fim do jogo. Recomeçar.", next: "start" }
        ]
    },
    // Cenário: Fim por congelar (Final 4 - Ruim)
    frozen: {
        text: "Você não consegue se mover. Seu corpo congela de pavor. O ar fica mais frio. Você sente um cheiro podre e doce de flores mortas. Uma mão fria toca o seu ombro. Você sente algo frio no pescoço. O mundo se apaga. Fim de jogo.",
        choices: [
            { text: "Fim do jogo. Recomeçar.", next: "start" }
        ]
    },
    // Cenário: Tentar fugir (Final 5 - Ruim)
    try_to_escape: {
        text: "Você corre para fora, mas a porta não abre. A figura alta e esguia entra na sala. O assobio está muito perto. Você tenta gritar, mas não consegue. Sua voz se perde. 'Você é nosso agora...', diz a voz de criança. Fim de jogo. Você está preso.",
        choices: [
            { text: "Fim do jogo. Recomeçar.", next: "start" }
        ]
    },
    // Cenário: Ficar escondido (Final 6 - Bom)
    stay_hidden: {
        text: "Você fica escondido. Os passos lentos e arrastados passam pela sala e sobem as escadas. A figura não o viu. Você espera alguns minutos em silêncio e então, devagar, se move para a porta. Ela está destrancada! Você sai e corre sem olhar para trás. Você conseguiu escapar! Mas o assobio ainda ecoa na sua cabeça.",
        choices: [
            { text: "Final Bom! Recomeçar.", next: "start" }
        ]
    },
    // Cenário: Esconder-se no armário (Final 7 - Ruim)
    hide_in_closet: {
        text: "Você entra no armário e fecha a porta. Você ouve o barulho de algo se movendo na sala. De repente, a porta do armário se abre. Você vê olhos vermelhos e brilhantes. 'Te peguei...', sussurra a voz. Fim de jogo.",
        choices: [
            { text: "Fim do jogo. Recomeçar.", next: "start" }
        ]
    },
    // Cenário: Entrar na sala secreta (Final 8 - Ruim)
    secret_room: {
        text: "Você entra na sala. A luz fraca vem de uma vela no centro, iluminando um mapa do bairro. O mapa está cheio de fotos de crianças, e o rosto de Gabriel e Ana estão lá. Sua foto também. A porta se fecha atrás de você. 'Você não está mais perdido, você é um de nós...', diz a voz. Fim de jogo.",
        choices: [
            { text: "Fim do jogo. Recomeçar.", next: "start" }
        ]
    }
};

let currentState = 'start';
const storyTextElement = document.getElementById('story-text');
const choicesElement = document.getElementById('choices');

// Função principal para atualizar o jogo
function updateGame(stateName) {
    const state = gameStates[stateName];
    if (!state) return;

    storyTextElement.textContent = state.text;
    choicesElement.innerHTML = '';

    state.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => updateGame(choice.next));
        choicesElement.appendChild(button);
    });
}

// Inicia o jogo
updateGame(currentState);