const startGameButton = document.querySelector('.start-game')
const title = document.querySelector('h1')
const questionContainer = document.querySelector('.question-container')
const questionText = document.querySelector('.question')
const answersContainer = document.querySelector('.answers-container')
const nextQuestionButton = document.querySelector('.next-question')

startGameButton.addEventListener('click', startGame)
nextQuestionButton.addEventListener('click', displayNextQuestion)

let currentQuestionIndex = 0 // contador das questões
let totalCorrect = 0

function startGame() {
    startGameButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    title.classList.add('hide')
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions_page_4.length === currentQuestionIndex) {
        return finishGame()
    }

    questionText.textContent = questions_page_4[currentQuestionIndex].question
    questions_page_4[currentQuestionIndex].answer.forEach(answer => {
        const newAnswer = document.createElement('button')

        newAnswer.classList.add('button', 'answer')
        newAnswer.textContent = answer.text

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }

        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute('class')
    nextQuestionButton.classList.add('hide')
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add('correct')
        document.body.classList.remove('incorrect')
        totalCorrect++
    } else {
        document.body.classList.add('incorrect')
        document.body.classList.remove('correct')
    }

    document.querySelectorAll('.answer').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }
        button.disabled = true
    })

    nextQuestionButton.classList.remove('hide')
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions_page_4.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ''

    switch (true) {
        case (performance >= 90):
            message = 'Execelente :D'
            break
        case (performance >= 70):
            message = 'Muito Bom :)'
            break
        case (performance >= 50):
            message = 'Bom :|'
            break
        case (performance >= 30):
            message = 'Precisa Melhorar :('
            break
        default:
            message = 'Precisa Melhorar MUITO D:'
    }

    questionContainer.innerHTML =
        `
            <p class="final-message">
                Você acertou ${totalCorrect} de ${totalQuestion} questôes!
                <span>Resultado: ${message}</span>
            </p>
        
            <button onclick="window.location.reload()" class="button">Refazer teste</button>

        `
}

const questions_page_4 = [
    {
        question: 'Como você reage quando um cliente está insatisfeito com o seu pedido?',
        answer: [
            { text: 'Ignoro a situação e continuo minhas atividades.', correct: false },
            { text: 'Peço que o cliente entre em contato com o gerente.', correct: false },
            { text: 'Digo ao cliente que não há nada que possa ser feito.', correct: false },
            { text: 'Peço desculpas pelo inconveniente e busco uma solução.', correct: true },
        ]
    },
    {
        question: 'Como você reage quando um cliente faz um elogio sobre o atendimento recebido?',
        answer: [
            { text: 'Agradeço rapidamente sem mostrar emoção.', correct: false },
            { text: 'Agradeço sinceramente e expresso minha satisfação em proporcionar uma boa experiência.', correct: true },
            { text: 'Peço ao cliente que fale com o gerente sobre o elogio.', correct: false },
            { text: 'Ignoro o elogio e continuo minhas tarefas.', correct: false },
        ]
    },
    {
        question: 'Como você realiza a verificação da precisão do pedido de acordo com o monitor do drive-thru, a fim de garantir que esteja correto e completo?',
        answer: [
            { text: 'Faço a entrega sem verificar para agilizar o processo.', correct: false },
            { text: 'Verifique a precisão do pedido comparando com as informações do monitor do drive-thru e itens do pedido montado, assim teremos como garantir a sua exatidão.', correct: true },
            { text: 'Checo somente quando o cliente solicita.', correct: false },
            { text: 'Confio apenas no sistema automático sem revisão manual.', correct: false },
        ]
    },
    {
        question: 'Como você recepciona o cliente assim que ele chega ao restaurante?',
        answer: [
            { text: 'Cumprimento o cliente sem contato visual ou empatia.', correct: false },
            { text: 'Com um cumprimento amigável e um sorriso no rosto.', correct: true },
            { text: 'Ignoro o cliente até que ele chame minha atenção.', correct: false },
            { text: 'Atendo apenas quando terminar minhas outras tarefas.', correct: false },
        ]
    },
    {
        question: 'Como você se certifica de cumprimentar o cliente, garantindo que ele não espere mais do que 10 segundos?',
        answer: [
            { text: 'Cumprimento somente quando termino uma conversa com outro cliente.', correct: false },
            { text: 'Assim que eu escuto o sinal sonoro, eu imediatamente de forma gentil e amigável cumprimento o cliente.', correct: true },
            { text: 'Atendo outros clientes primeiro e depois retorno.', correct: false },
            { text: 'Aguardo o cliente chamar minha atenção antes de cumprimentar.', correct: false },
        ]
    },
    {
        question: 'Como você se comporta quando um cliente está com dificuldades para fazer seu pedido no totem de autoatendimento?',
        answer: [
            { text: 'Ofereço ajuda prontamente e explico o passo a passo.', correct: true },
            { text: 'Aguardo o cliente desistir e buscar outra forma de atendimento.', correct: false },
            { text: 'Aponto para o totem e continuo com minhas tarefas.', correct: false },
            { text: 'Indico o gerente para ajudá-lo.', correct: false },
        ]
    },
    {
        question: 'De quanto em quanto tempo devemos lavar, enxaguar, higienizar as bandejas na pia do backroom, e em seguida, deixar secar ao ar livre?',
        answer: [
            { text: 'A cada duas horas.', correct: false },
            { text: 'A cada troca de turno.', correct: false },
            { text: 'No fechamento ou pelo menos uma vez ao dia.', correct: true },
            { text: 'Somente quando estão visivelmente sujas.', correct: false },
        ]
    },
    {
        question: 'De que maneira podemos melhorar a experiência das crianças?',
        answer: [
            { text: 'Oferecer um cadeirão, entregar um brinde, falar sobre a funcionalidade dos brinquedos.', correct: true },
            { text: 'Ignorar as crianças e focar apenas nos pais.', correct: false },
            { text: 'Evitar oferecer cadeirões para não atrapalhar o fluxo.', correct: false },
            { text: 'Distribuir apenas brindes, sem interagir.', correct: false },
        ]
    },
    {
        question: 'É correto afirmar sobre o Play Place?',
        answer: [
            { text: 'Essas áreas devem ser inspecionadas frequentemente ao longo do dia.', correct: true },
            { text: 'Não é necessário inspecionar regularmente.', correct: false },
            { text: 'Somente inspeções semanais são suficientes.', correct: false },
            { text: 'É responsabilidade dos clientes manter o local limpo.', correct: false },
        ]
    },
    {
        question: 'É um objetivo da Abordagem de Vendas:',
        answer: [
            { text: 'Aumentar o Ticket Médio.', correct: true },
            { text: 'Reduzir o número de clientes para evitar filas.', correct: false },
            { text: 'Priorizar apenas produtos promocionais.', correct: false },
            { text: 'Apenas manter o fluxo operacional.', correct: false },
        ]
    },
    {
        question: 'É um procedimento operacional da pessoa da Chapas - Carnes vermelhas - 02 platens:',
        answer: [
            { text: 'Todas as alternativas estão corretas.', correct: true },
            { text: 'Somente a limpeza diária é suficiente.', correct: false },
            { text: 'Ignorar os procedimentos operacionais.', correct: false },
            { text: 'Apenas seguir as instruções do turno atual.', correct: false },
        ]
    },
    {
        question: 'Em qual pedido você deve se concentrar?',
        answer: [
            { text: 'Concentre-se no pedido a ser apresentado (o primeiro pedido na tela).', correct: true },
            { text: 'No pedido mais recente.', correct: false },
            { text: 'Apenas no pedido do Drive-Thru.', correct: false },
            { text: 'No pedido que o gerente indicar.', correct: false },
        ]
    },
    {
        question: 'Em um alimento com data de validade primária e secundária deve ser considerado a data de validade primária.',
        answer: [
            { text: 'VERDADEIRO.', correct: false },
            { text: 'FALSO.', correct: true },
        ]
    },
    {
        question: 'Em um Drive-Thru com pista dupla, qual deve a ordem de atendimento dos carros?',
        answer: [
            { text: 'Assim que um pedido for pago, a tela do POS exibirá de imediato para que possa selecionar o veículo seguinte.', correct: true },
            { text: 'Atenda os carros em ordem aleatória.', correct: false },
            { text: 'Sempre atenda o carro que estiver mais próximo.', correct: false },
            { text: 'Ignore o POS e atenda por ordem de chegada.', correct: false },
        ]
    },
    {
        question: 'Escolha a alternativa correta:',
        answer: [
            { text: 'Seguir os procedimentos para garantir a satisfação dos clientes.', correct: true },
            { text: 'Deixar o cliente se auto-servir.', correct: false },
            { text: 'Evitar contato com os clientes.', correct: false },
            { text: 'Priorizar apenas tarefas operacionais.', correct: false },
        ]
    }
];
