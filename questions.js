let questionsSelect = [] // questões selecionadas 
let prizeDraw = []     // numeros escolhidos aleatoriamente

///////////////////////
// CONHECIMENTOS GERAIS
///////////////////////
const questionsGeneral = [
    {
        question: "Quem descobriu o Brasil e em que ano?",
        option1: "Pedro Alvares Cabral em 1501",
        option2: "Pedro Cabral Amorim em 1400",
        option3: "Dom Pedro Primeiro 1500",
        option4: "Santos Dumont em 1415",
        option5: "Pedro Alares Cabral em 1500",
        answer: "39-56-42-84-65-81-25-65-87-36-44-26-71-79-62-87-25-56-41-2680-101-100-114-111-32-65-108-97-114-101-115-32-67-97-98-114-97-108-32-101-109-32-49-53-48-4893-57-77-92-59-42-41-60-77-69-86-77-32-32-73-40-37-48-90-60",
        difficult: 1
    },
    {
        question: "Em que ano ocorreu o primeiro voou do 14 bis?",
        option1: "2 de março de 1915",
        option2: "7 de setembro de 1906",
        option3: "4 de maio de 1555",
        option4: "15 de dezembro de 1906",
        option5: "9 de sembro de 1906",
        answer: "52-64-34-83-26-35-84-22-44-97-14-91-40-43-67-57-20-63-58-7555-32-100-101-32-115-101-116-101-109-98-114-111-32-100-101-32-49-57-48-5490-93-78-49-15-81-71-62-43-78-68-91-40-88-53-92-15-80-32-29",
        difficult: 2
    },
    {
        question: "Em que cidade nasceu Ariano Suassuna?",
        option1: "São Paulo",
        option2: "Rio de Janeiro",
        option3: "Recife",
        option4: "João Pessoa",
        option5: "Maceió",
        answer: "48-41-11-27-29-81-55-11-99-63-12-42-94-59-81-48-16-75-51-6174-111-227-111-32-80-101-115-115-111-9734-87-14-68-34-13-96-15-58-96-49-17-29-12-44-70-58-19-32-45",
        difficult: 1
    },
    {
        question: "Qual jogador Brasiliero é considerao o rei do gol?",
        option1: "Neymar",
        option2: "Romário",
        option3: "Rivelino",
        option4: "Garincha",
        option5: "Pelé",
        answer: "84-99-47-53-43-58-65-99-74-51-12-99-89-32-41-88-55-20-46-8082-111-109-225-114-105-11151-37-34-14-16-29-68-69-33-92-46-76-58-74-68-56-84-61-32-45",
        difficult: 2
    },
]
//////////////////
// questões de DEV
//////////////////
const questionsDev = [
    {
        question: "Qual método, converte uma string em array?",
        option1: "includes",
        option2: "slice",
        option3: "split",
        option4: "splice",
        option5: "shift",
        answer: "22-45-77-95-50-67-36-19-86-32-50-13-87-23-91-27-89-40-24-98115-112-108-105-11663-22-45-59-62-86-21-67-59-69-52-98-74-16-75-18-23-75-43-49",
        difficult: 2
    },
    {
        question: "O metódo map(), serve para?",
        option1: "Agilizar operações matemáticas e boleanas",
        option2: "Converter um objeto em uma string",
        option3: "Trabalhar com objetos",
        option4: "Percorrer arrays",
        option5: "Gerar números aleatórios",
        answer: "26-49-30-73-84-15-63-56-46-18-22-98-18-54-27-69-88-92-56-4780-101-114-99-111-114-114-101-114-32-97-114-114-97-121-11574-41-42-71-62-91-68-11-39-24-54-24-19-90-92-17-91-97-86-30",
        difficult: 2
    },
    {
        question: "Posso dizer que o git bash...",
        option1: "faz parte do javascript",
        option2: "sem ele não existe programação",
        option3: "ele facilita o trabalho na hora de codar",
        option4: "serve de na só atrapalha",
        option5: "é um terminal de trabalho git",
        answer: "32-35-39-96-33-44-30-45-96-29-68-91-18-33-74-46-43-56-31-53233-32-117-109-32-116-101-114-109-105-110-97-108-32-100-101-32-116-114-97-98-97-108-104-111-32-103-105-11658-12-48-57-56-27-94-48-75-88-55-27-14-31-55-44-34-29-33-51",
        difficult: 1
    },
    {
        question: "for of é?",
        option1: "um tipo de iterador de arrays",
        option2: "uma excelente forma de iterar objetos",
        option3: "server para receber dados dos usuários",
        option4: "converte string em números reais",
        option5: "faz o índece do array fluir",
        answer: "21-69-52-88-37-64-58-28-88-16-19-80-84-36-50-95-59-20-59-27117-109-32-116-105-112-111-32-100-101-32-105-116-101-114-97-100-111-114-32-100-101-32-97-114-114-97-121-11571-53-19-65-13-47-29-91-77-45-55-62-36-72-94-56-42-30-86-61",
        difficult: 2
    },
]


////////////////////
/// Seleção do Tema
///////////////////
function selectTheme(theme) {
    //const questionsTemp=[]  // para o filtro de nível?
    switch (theme) {
        case 1: "Gerais"
            questionsSelect = questionsGeneral
            break
        case 2: "Dev"
            questionsSelect = questionsDev
            break
        default:
            questionsSelect = questionsFull()
    }
    // junta todas questões ( misto )
    function questionsFull() {
        return [...questionsDev, ...questionsGeneral]
    }
    let count = 0
    let numberPD = 0
    prizeDraw = []
    // faz a seleção das questões aleatoriamente
    while (true) {
        numberPD = Math.floor(Math.random() * questionsSelect.length)
        if (!prizeDraw.includes(numberPD)) {
            prizeDraw.push(numberPD)
            count++
        }
        if (count === 4) break // já selecionou as 4 questões - para usar mais alterar também nextQuestion
    }
}

///////////////////////
/// Libera as perguntas
///    uma a uma
///////////////////////
function* nextQuestion() {
    for (const num in prizeDraw) yield prizeDraw[num]
}

// chamando função (teste)
selectTheme("xxx")

let reset = 0
let itc = nextQuestion()
let objIterator = null

function test() {
    if (reset === 4) {
        itc = nextQuestion()
        reset = 0
    } 
    reset++
    objIterator = itc.next().value
    const q = questionsSelect[objIterator]
    console.log(q)    
}
