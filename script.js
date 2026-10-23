// QUIZ COMPLETO E SENSÍVEL AO CONTEXTO
const perguntas = [
  {
    pergunta: "Uma funcionária do setor financeiro recebe um e-mail urgente solicitando recadastramento imediato de senha via link externo para evitar o bloqueio de conta. Qual é a postura ética e segura?",
    opcoes: [
      "Clicar no link imediatamente para evitar o bloqueio de acessos ao sistema.",
      "Ignorar completamente sem reportar a ninguém da empresa.",
      "Não clicar, não digitar dados e notificar a equipe de Segurança/TI pelo canal oficial.",
      "Encaminhar o e-mail para todos os colaboradores do setor perguntando se é verdade."
    ],
    correta: 2,
    explicacao: "Excelente! Esta é uma tentativa clássica de phishing. Comunicar os canais oficiais permite que a TI bloqueie o ataque para toda a organização."
  },
  {
    pergunta: "Para garantir a Confidencialidade dos dados de clientes em um sistema web, qual medida é indispensável?",
    opcoes: [
      "Deixar o banco de dados aberto para consulta pública.",
      "Implementar criptografia no armazenamento e no transporte dos dados (HTTPS/TLS).",
      "Manter backups semanais guardados no mesmo servidor.",
      "Desativar o uso de senhas para facilitar o login."
    ],
    correta: 1,
    explicacao: "Exato! A criptografia transforma dados legíveis em códigos cifrados, garantindo que apenas pessoas com a chave autorizada tenham acesso."
  },
  {
    pergunta: "O que é a Autenticação em Dois Fatores (2FA / MFA) e qual a sua importância?",
    opcoes: [
      "Um método que exige duas senhas iguais escritas em papéis diferentes.",
      "Uma camada adicional de segurança que exige um segundo fator (código no celular, biometria ou token) além da senha.",
      "Um programa que duplica a velocidade da conexão de internet.",
      "Um antivírus que verifica os arquivos do computador duas vezes por dia."
    ],
    correta: 1,
    explicacao: "Correto! Mesmo que sua senha seja descoberta ou vazada, o invasor não conseguirá acessar a conta sem o segundo fator."
  },
  {
    pergunta: "A regra de backup '3-2-1' é amplamente recomendada em governança de TI. O que ela orienta?",
    opcoes: [
      "Guardar 3 senhas, usar 2 computadores e 1 pendrive.",
      "Criar 3 cópias dos dados, em 2 mídias diferentes, sendo 1 mantida fora da empresa (nuvem ou offsite).",
      "Fazer backup em 3 minutos, esperar 2 horas e apagar 1 arquivo.",
      "Manter 3 antivírus instalados no mesmo computador."
    ],
    correta: 1,
    explicacao: "Muito bem! A regra 3-2-1 garante redundância e sobrevivência dos dados contra ransomware, incêndios ou falhas de hardware."
  },
  {
    pergunta: "Qual é o principal risco de conectar um computador corporativo a uma rede Wi-Fi pública e aberta sem o uso de VPN?",
    opcoes: [
      "O computador perder instantaneamente toda a memória RAM.",
      "Interceptação de tráfego (Ataque Man-in-the-Middle) e roubo de dados não criptografados.",
      "Aumento automático do consumo de energia da bateria.",
      "A rede pública apagar automaticamente todos os e-mails."
    ],
    correta: 1,
    explicacao: "Isso mesmo! Em redes públicas não protegidas, atacantes podem interceptar o tráfego de dados. A VPN criptografa toda a comunicação."
  },
  {
    pergunta: "O que caracteriza uma ameaça do tipo Ransomware?",
    opcoes: [
      "Um e-mail comercial com promoções indesejadas.",
      "Um programa malicioso que criptografa os arquivos do usuário e exige resgate em dinheiro/criptomoedas para liberação.",
      "Uma falha física no cabo de rede.",
      "Um aviso oficial de atualização do sistema operacional."
    ],
    correta: 1,
    explicacao: "Exato! O Ransomware 'sequestra' os dados do dispositivo por meio de criptografia forte, exigindo resgate."
  },
  {
    pergunta: "De acordo com a Lei Geral de Proteção de Dados (LGPD) no Brasil, qual é o papel do profissional de Segurança da Informação?",
    opcoes: [
      "Vender os dados de cadastros de usuários para empresas de publicidade.",
      "Garantir medidas técnicas e administrativas apropriadas para proteger dados pessoais contra acessos não autorizados e vazamentos.",
      "Proibir qualquer cidadão de usar a internet.",
      "Apagar o histórico da internet do celular dos colaboradores."
    ],
    correta: 1,
    explicacao: "Perfeito! O profissional estabelece controles de acesso, criptografia e políticas de privacidade alinhadas às exigências da LGPD."
  },
  {
    pergunta: "Por que manter softwares e sistemas operacionais atualizados é uma prática crítica de segurança?",
    opcoes: [
      "Apenas para mudar o design das janelas e ícones.",
      "Para corrigir vulnerabilidades e brechas de segurança recém-descobertas que poderiam ser exploradas por hackers.",
      "Para fazer o computador ocupar mais espaço no disco rígido.",
      "Para desativar a necessidade de backups."
    ],
    correta: 1,
    explicacao: "Correto! Atualizações contêm pacotes de correção (patches) para fechar brechas que invasores conhecem e tentam explorar."
  },
  {
    pergunta: "Qual é a conduta correta de um Analista de Segurança da Informação ao descobrir uma vulnerabilidade em um sistema?",
    opcoes: [
      "Publicar a falha em redes sociais para ridicularizar os desenvolvedores.",
      "Explorar a falha para obter vantagens financeiras sigilosas.",
      "Comunicar responsavelmente a equipe de desenvolvimento para que a correção seja aplicada antes de qualquer divulgação (Divulgação Responsável).",
      "Vender o código de exploração no mercado negro."
    ],
    correta: 2,
    explicacao: "Excelente! A ética profissional e o princípio da Divulgação Responsável exigem relatar a falha à equipe responsável para que a correção seja desenvolvida."
  },
  {
    pergunta: "O que diferencia a Segurança da Informação da Segurança Cibernética (Cibersegurança)?",
    opcoes: [
      "São termos opostos que não possuem nenhuma relação.",
      "Segurança da Informação protege a informação em qualquer formato (físico ou digital); Cibersegurança foca na proteção de ativos no espaço cibernético/conectado.",
      "Cibersegurança trata apenas de papéis e documentos impressos.",
      "Segurança da Informação é usada apenas em robótica."
    ],
    correta: 1,
    explicacao: "Isso mesmo! A Segurança da Informação é mais abrangente (inclui documentos em papel, políticas, treinamento), enquanto a Cibersegurança foca na infraestrutura digital e em rede."
  }
];

// ELEMENTOS DO QUIZ
const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const feedbackEl = document.getElementById("feedback");
const confirmarBtn = document.getElementById("confirmar");
const proximaBtn = document.getElementById("proxima");
const quizBox = document.getElementById("quizBox");
const resultadoEl = document.getElementById("resultado");

let indice = 0, selecionada = null, acertos = 0, respondida = false;

function mostrarPergunta() {
  const item = perguntas[indice];
  selecionada = null;
  respondida = false;
  perguntaEl.textContent = item.pergunta;
  opcoesEl.innerHTML = "";
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  confirmarBtn.disabled = true;
  confirmarBtn.hidden = false;
  proximaBtn.hidden = true;
  
  document.getElementById("progressoTexto").textContent = `Pergunta ${indice + 1} de ${perguntas.length}`;
  document.getElementById("pontuacaoParcial").textContent = `Acertos: ${acertos}`;
  document.getElementById("barraProgresso").style.width = `${((indice + 1) / perguntas.length) * 100}%`;

  item.opcoes.forEach((opcao, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "opcao";
    btn.innerHTML = `<span class="letra">${String.fromCharCode(65 + i)}</span><span></span>`;
    btn.querySelector("span:last-child").textContent = opcao;
    btn.addEventListener("click", () => {
      if (respondida) return;
      selecionada = i;
      [...opcoesEl.children].forEach((el, j) => el.classList.toggle("selecionada", i === j));
      confirmarBtn.disabled = false;
    });
    opcoesEl.appendChild(btn);
  });
}

confirmarBtn.addEventListener("click", () => {
  if (selecionada === null || respondida) return;
  respondida = true;
  const item = perguntas[indice];
  const botoes = [...opcoesEl.children];
  botoes.forEach((btn, i) => {
    btn.disabled = true;
    if (i === item.correta) btn.classList.add("correta");
    if (i === selecionada && i !== item.correta) btn.classList.add("errada");
  });

  if (selecionada === item.correta) {
    acertos++;
    feedbackEl.textContent = `✓ Correto! ${item.explicacao}`;
    feedbackEl.className = "feedback certo";
  } else {
    feedbackEl.textContent = `✕ Incorreto. ${item.explicacao}`;
    feedbackEl.className = "feedback errado";
  }

  document.getElementById("pontuacaoParcial").textContent = `Acertos: ${acertos}`;
  confirmarBtn.hidden = true;
  proximaBtn.hidden = false;
  proximaBtn.textContent = indice === perguntas.length - 1 ? "Ver resultado final →" : "Próxima pergunta →";
});

proximaBtn.addEventListener("click", () => {
  if (indice < perguntas.length - 1) {
    indice++;
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
});

function mostrarResultado() {
  quizBox.hidden = true;
  resultadoEl.hidden = false;
  document.getElementById("resultadoPontos").textContent = `${acertos}/${perguntas.length}`;
  const titulo = document.getElementById("resultadoTitulo");
  const texto = document.getElementById("resultadoTexto");

  if (acertos === perguntas.length) {
    titulo.textContent = "🏆 Desempenho Impecável!";
    texto.textContent = "Parabéns! Você acertou 100% do quiz. Você demonstrou excelente domínio das práticas e princípios da Segurança da Informação!";
  } else if (acertos >= 8) {
    titulo.textContent = "👏 Excelente resultado!";
    texto.textContent = "Muito bem! Você conhece as principais ameaças, políticas e boas práticas de cibersegurança do mercado.";
  } else if (acertos >= 5) {
    titulo.textContent = "👍 Bom trabalho!";
    texto.textContent = "Você compreende os conceitos fundamentais. Revise os pontos onde teve dúvida para aprofundar seu aprendizado.";
  } else {
    titulo.textContent = "📚 Continue praticando!";
    texto.textContent = "Segurança da Informação é um aprendizado constante. Explore as seções do site, leia os materiais e tente o quiz novamente!";
  }
  resultadoEl.scrollIntoView({ behavior: "smooth", block: "center" });
}

document.getElementById("reiniciar").addEventListener("click", () => {
  indice = 0; acertos = 0;
  resultadoEl.hidden = true;
  quizBox.hidden = false;
  mostrarPergunta();
  quizBox.scrollIntoView({ behavior: "smooth", block: "center" });
});

// SIMULAÇÃO "A PROFISSÃO NA PRÁTICA"
const opcoesSimulacao = document.querySelectorAll(".btn-simulacao");
const feedbackSimulacao = document.getElementById("feedbackSimulacao");
const feedbackSimConteudo = document.getElementById("feedbackSimConteudo");
const reiniciarSimulacao = document.getElementById("reiniciarSimulacao");

opcoesSimulacao.forEach(btn => {
  btn.addEventListener("click", () => {
    const opcao = btn.getAttribute("data-opcao");
    feedbackSimulacao.hidden = false;

    if (opcao === "B") {
      feedbackSimulacao.className = "feedback-simulacao correto";
      feedbackSimConteudo.innerHTML = `
        <h4>✓ Decisão Excelente! (Ação Adequada de Segurança)</h4>
        <p><strong>Por que está correto?</strong> Ao orientar a usuária a não fornecer dados nem clicar no link, você evitou o roubo de credenciais. Ao isolar a mensagem e analisar os logs no Gateway de E-mail, você consegue identificar se outros funcionários receberam a mensagem e bloquear o domínio malicioso preventivamente para toda a empresa.</p>
        <p><strong>Resultado do Analista:</strong> Ameaça neutralizada, 0 credenciais comprometidas e o sistema continuou operacional e protegido.</p>
      `;
    } else if (opcao === "A") {
      feedbackSimulacao.className = "feedback-simulacao incorreto";
      feedbackSimConteudo.innerHTML = `
        <h4>✕ Decisão Inadequada! (Risco Alto)</h4>
        <p><strong>Por que é incorreto?</strong> Clicar em links de e-mails suspeitos diretamente do navegador da rede corporativa expõe o dispositivo a malwares (downloads drive-by) e valida para o atacante que o e-mail está ativo.</p>
        <p><strong>Resultado do Analista:</strong> O profissional de segurança deve utilizar um ambiente isolado (Sandbox) ou ferramentas de análise de cabeçalho, e jamais clicar diretamente.</p>
      `;
    } else {
      feedbackSimulacao.className = "feedback-simulacao incorreto";
      feedbackSimConteudo.innerHTML = `
        <h4>✕ Decisão Inadequada! (Risco de Disseminação)</h4>
        <p><strong>Por que é incorreto?</strong> Encaminhar a mensagem maliciosa para todos os colaboradores multiplica o risco de alguém clicar acidentalmente no link falso.</p>
        <p><strong>Resultado do Analista:</strong> O incidente deve ser centralizado e tratado isoladamente pela equipe de TI/Segurança, transmitindo aos funcionários apenas alertas institucionais oficiais sem o link malicioso.</p>
      `;
    }
    feedbackSimulacao.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});

reiniciarSimulacao.addEventListener("click", () => {
  feedbackSimulacao.hidden = true;
});

// DEMAIS INTERAÇÕES E EXPANSÃO DE EXEMPLOS
document.querySelectorAll("[data-expand]").forEach(btn => {
  btn.addEventListener("click", () => {
    const extra = document.getElementById(btn.dataset.expand);
    const vaiAbrir = extra.hidden;
    extra.hidden = !vaiAbrir;
    btn.setAttribute("aria-expanded", String(vaiAbrir));
    btn.textContent = vaiAbrir ? "Ocultar exemplo −" : "Ver um exemplo do dia a dia +";
  });
});

// MENU RESPONSIVO
const menuToggle = document.getElementById("menuToggle");
const navegacao = document.getElementById("navegacao");
menuToggle.addEventListener("click", () => {
  const aberto = navegacao.classList.toggle("aberto");
  menuToggle.setAttribute("aria-expanded", String(aberto));
});
navegacao.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navegacao.classList.remove("aberto");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// INICIALIZAR QUIZ
mostrarPergunta();
