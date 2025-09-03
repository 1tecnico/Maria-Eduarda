const perguntas = [
  { pergunta: "Qual é a capital de Minas Gerais?", opcoes: ["Belo Horizonte", "Uberlândia", "Ouro Preto", "Juiz de Fora"], correta: 0 },
  { pergunta: "Quantos estados tem o Brasil (incluindo o DF)?", opcoes: ["25", "26", "27", "28"], correta: 2 },
  { pergunta: "Qual prato é típico de Minas Gerais?", opcoes: ["Acarajé", "Tacacá", "Pão de queijo", "Moqueca"], correta: 2 },
  { pergunta: "Quem foi o jogador conhecido como Rei do Futebol?", opcoes: ["Zico", "Pelé", "Ronaldo", "Neymar"], correta: 1 },
  { pergunta: "Qual bioma cobre grande parte de MG?", opcoes: ["Cerrado", "Caatinga", "Mata Atlântica", "Pantanal"], correta: 2 },
  { pergunta: "Qual é o maior bioma brasileiro?", opcoes: ["Amazônia", "Pantanal", "Cerrado", "Mata Atlântica"], correta: 0 },
  { pergunta: "Quem escreveu 'Dom Casmurro'?", opcoes: ["Machado de Assis", "José de Alencar", "Carlos Drummond", "Clarice Lispector"], correta: 0 },
  { pergunta: "Onde fica o Cristo Redentor?", opcoes: ["São Paulo", "Brasília", "Rio de Janeiro", "Belo Horizonte"], correta: 2 },
  { pergunta: "O que é Caipirinha?", opcoes: ["Refrigerante", "Bebida alcoólica", "Sobremesa", "Salada"], correta: 1 },
  { pergunta: "Qual é o maior rio do Brasil em volume?", opcoes: ["São Francisco", "Amazonas", "Paraná", "Tietê"], correta: 1 },
  // ... você deve adicionar até completar 100 perguntas.
];

let curr = 0, score = 0;

function showQuestion() {
  const q = perguntas[curr];
  document.getElementById("question").innerText = q.pergunta;
  const opts = document.getElementById("options");
  opts.innerHTML = "";
  q.opcoes.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.innerText = op;
    btn.onclick = () => selectOption(i);
    opts.appendChild(btn);
  });
  document.getElementById("nextBtn").style.display = "none";
}

function selectOption(i) {
  const correta = perguntas[curr].correta;
  if (i === correta) {
    score++;
    alert("✅ Correto!");
  } else {
    alert(`❌ Errado! A resposta correta é: ${perguntas[curr].opcoes[correta]}`);
  }
  document.getElementById("nextBtn").style.display = "block";
  Array.from(document.getElementById("options").children).forEach(b => b.disabled = true);
}

function nextQuestion() {
  curr++;
  if (curr < perguntas.length) {
    showQuestion();
  } else {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").innerText = `Você acertou ${score} de ${perguntas.length} perguntas.`;
  }
}

function restartQuiz() {
  curr = 0; score = 0;
  document.getElementById("result").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  showQuestion();
}
let acertos = 0;
let erros = 0;
function atualizarPlacar() {
  document.getElementById("acertos").textContent = acertos;
  document.getElementById("erros").textContent = erros;
}
// Exemplo ao iniciar ou reiniciar
acertos = 0;
erros = 0;
atualizarPlacar();




window.onload = showQuestion

