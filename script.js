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
  ];

  let indexAtual = 0;
  
  function displayAlien(index) {
      const alienCard = document.getElementById("alien-card");
      const alien = aliens[index];
  
      alienCard.innerHTML = `
          <img src="${alien.image}" alt="${alien.name}">
          <h2>${alien.name}</h2>
          <p>${alien.description}</p>
          <div class="button-container">
              <button id="prev-button">Anterior</button>
              <button id="next-button">Próximo</button>
          </div>
      `;
  
      const prevButton = document.getElementById("prev-button");
      const nextButton = document.getElementById("next-button");
  
      prevButton.addEventListener("click", () => showPrevAlien());
      nextButton.addEventListener("click", (
      
      ) => showNextAlien());
  }
  
  function showPrevAlien() {
      indexAtual = (indexAtual - 1 + aliens.length) % aliens.length;
      displayAlien(indexAtual);
  }
  
  function showNextAlien() {
      indexAtual = (indexAtual + 1) % aliens.length;
      displayAlien(indexAtual);
  }
  
  displayAlien(0);