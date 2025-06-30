//Canais e vídeos organizados em um objeto
// Substituição de watch?v= por embed/ nos links, assim o vídeo pode ser mostrado direto no <iframe>
const canais = {
    'Pri Leite Yoga': [ 
        'https://www.youtube.com//embed/eeczFEmfpU0',
        'https://www.youtube.com//embed/kxfQD9Q56xE',
        'https://www.youtube.com//embed/otBwPxfRlwI'
    ],
    'Longevidade Yoga': [
        'https://www.youtube.com/embed/Z6c-lDXLwec',
        'https://www.youtube.com/embed/ic9dZkGFTGc'
    ],
    'Fernanda Yoga': [
        'https://www.youtube.com/embed/_AhqTyMXT64',
        'https://www.youtube.com/embed/3dOsYXRpMXw'
    ]
};
//Seleção aleatória frase - Exibição: Tela 1
const frases = [
    "Respire. Sinta. Conecte-se.",
    "Cada prática é um recomeço.",
    "Seja gentil com seu corpo hoje.",
    "O agora é o momento mais importante.",
    "Silencie e ouça sua respiração."
];
const fraseElemento = document.getElementById("frase-do-dia");
const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
fraseElemento.innerText = fraseAleatoria;

//Seleção vídeo aula 
let canalAtual = "";
function escolherCanal(nome) {
    canalAtual = nome;
    filaDeVideos = embaralhar([...canais[canalAtual]]);
    mostrarVideoAleatorio();
}
let filaDeVideos = [];
function embaralhar(array) {
  return array.sort(() => Math.random() - 0.5);
}
function mostrarVideoAleatorio() {
    if (filaDeVideos.length === 0) {
        filaDeVideos = embaralhar([...canais[canalAtual]]);
    }
    
    const video = filaDeVideos.shift(); //remove o primeiro vídeo da fila

    document.getElementById("tela-inicial").classList.add("hidden");
    document.getElementById("tela-video").classList.remove("hidden");

    document.getElementById("nome-canal").innerText = canalAtual;
    document.getElementById("video-yoga").src = video;
}
//Botão Trocar aula
function trocarAula() {
    mostrarVideoAleatorio();
}
//Botão Voltar
function voltar() {
    document.getElementById("tela-video").classList.add("hidden");
    document.getElementById("tela-inicial").classList.remove("hidden");
    document.getElementById("video-yoga").src = ""; //limpar vídeo
}