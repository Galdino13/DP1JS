const aliens = [
    {
      name: "Chama",
      image: "chama.png",
      description: "Chama é uma forma de vida humanoide baseada em plasma. Seu corpo é constituído por um interior de magma brilhante coberta por um vermelho escuro."
    },
    {
      name: "Quatro Braços",
      image: "quatro.png",
      description: "Quatro Braços é um alienígena humanoide que é de aproximadamente 3,60 metros de altura, tem músculos avantajados, dois pares de braços de quatro dedos e pele vermelha bem desenvolvida."
    },
    {
      name: "XLR8",
      image: "xlr8.png",
      description: "XLR8 lembra um Velociraptor semi-blindado. Alienígena esbelto, com braços finos que possuem três garras em cada mão, e duas garras nos pés por cima de bolas pretas que as usa quando corre, além de dar suporte as suas longas pernas."
    },
    {
    name: "Ultra T",
    image: "ultrat.png",
    description: "Ultra T tem sua pele preta com listras verdes que se assemelham a um circuito em cima dele. O círculo verde que se localiza em sua cabeça é o seu olho, que brilha sempre que ele fala. "
    },
    {
    name: "besta",
    image: "besta.png",
    description: "Besta parece um cão grande e laranja sem olhos e cauda. Seus dentes são muito grandes e ficam fora da sua boca."
    },
    {
    name: "Aquático",
    image: "aqua.png",
    description: "Aquático é um alienígena que podemos nos referir como um tritão, sua cabeça lembra a de um peixe pescador. Ele possui uma forma humanoide que o fornece pés."
    },
    {
    name: "Diamante",
    image: "diamante.png",
    description: "O corpo de Diamante é composto por um cristal orgânico extremamente resistente, que se assemelham a tadenita, tornando-o quase invulnerável."
    },
    {
    name: "Fantasmático",
    image: "fanta.png",
    description: "Fantasmático é semelhante a um fantasma branco, com linhas pretas passando por seu corpo e seu olho é roxo."
    },{
    name: "Massa Cinzenta",
    image: "massa.png",
    description: "Massa Cinzenta é um alienígena de pele cinza, e semelhante a um sapo humanoide. Tem quinze centímetros de altura, e usa uma roupa branca com uma faixa preta passando pelo seu corpo."
    },
    {
    name: "Insectóide",
    image: "insectoide.png",
    description: "Insectóide é um inseto com quatro longas pernas, e dois braços com mãos pretas, dando uma impressão de que está usando luvas, e três dedos em cada um delas. Sua cabeça é completamente preta, e nela estão ligados quatro olhos pequenos e laranjas."
    },
    // Add more aliens here...
  ];
  
let currentIndex = 0;

const alienCard = document.getElementById("alien-card");
const alienImage = document.getElementById("alien-image");
const alienName = document.getElementById("alien-name");
const alienDescription = document.getElementById("alien-description");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function showAlien(index) {
  const alien = aliens[index];
  alienImage.src = alien.image;
  alienImage.alt = alien.name;
  alienName.textContent = alien.name;
  alienDescription.textContent = alien.description;
}

function showPrevAlien() {
  currentIndex = (currentIndex - 1 + aliens.length) % aliens.length;
  showAlien(currentIndex);
}

function showNextAlien() {
  currentIndex = (currentIndex + 1) % aliens.length;
  showAlien(currentIndex);
}

prevButton.addEventListener("click", showPrevAlien);
nextButton.addEventListener("click", showNextAlien);

showAlien(currentIndex);

const searchInput = document.getElementById('search-input');
const alienCards = document.querySelectorAll('.alien-card');

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();
  
  alienCards.forEach(function (card) {
    const alienName = card.querySelector('h2').textContent.toLowerCase();
    
    if (alienName.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});