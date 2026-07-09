import type { SpreadMessages } from '../types';

export const spreadMessages: Record<string, SpreadMessages> = {
  'yes-no': {
    title: 'Resposta sim/não',
    description: 'Faça uma pergunta e receba uma resposta clara do destino — sim ou não.',
    positions: ['Resposta'],
    about: [
      'A tiragem sim/não é uma das formas mais antigas e diretas de consultar a sabedoria do Tarot. Foi criada para momentos em que a alma busca clareza: aceitar, avançar, deixar ir ou esperar.',
      'Nesta tiragem, uma única carta é retirada e torna-se a voz do universo em resposta à sua pergunta. Uma carta na posição vertical indica «sim» ou um desfecho favorável; uma carta invertida indica «não», um obstáculo ou a necessidade de reconsiderar a situação.',
      'As cartas do Tarot não proferem veredictos rígidos — refletem a energia do momento e ajudam a revelar as forças ocultas que influenciam a sua escolha. Confie na sua intuição e deixe os símbolos falarem consigo.',
    ],
    promptHint:
      'Formule uma pergunta que possa ser respondida com «sim» ou «não». Por exemplo: «Devo aceitar esta proposta?»',
  },
  'card-of-day': {
    title: 'Carta do dia',
    description: 'Descubra qual carta o guiará hoje e o que ela simboliza.',
    positions: ['Carta do dia'],
    about: [
      'A tiragem Carta do dia é uma companheira suave e sábia para cada manhã. Uma única carta revela o tema principal, o ambiente e a lição que o Universo preparou para si neste dia.',
      'Esta tiragem não exige perguntas complexas — basta sintonizar-se com o dia e permitir que o baralho escolha o símbolo que será o seu guia. A carta pode alertar para desafios, apontar oportunidades ou lembrar a sua força interior.',
      'A posição vertical revela o significado aberto e ativo do arcano. A posição invertida revela a sombra da carta: o que requer atenção, paciência ou trabalho interior. Juntas, criam uma imagem completa do seu dia.',
    ],
    promptHint:
      'Descreva o que o preocupa hoje, ou faça uma pergunta sobre o dia que se avizinha. Por exemplo: «Que energia devo cultivar hoje?»',
  },
  'three-cards': {
    title: 'Três cartas',
    description: 'Passado, presente e futuro — a linha temporal da sua situação.',
    positions: ['Passado', 'Presente', 'Futuro'],
    about: [
      'A tiragem clássica de três cartas revela uma linha temporal: de onde veio, onde está agora e para onde se dirige.',
      'A primeira carta mostra as raízes da situação e a experiência passada. A segunda revela a energia atual e as forças principais do momento. A terceira mostra o desenvolvimento provável dos acontecimentos se o rumo atual se mantiver.',
      'Esta tiragem é adequada para qualquer pergunta sobre como uma situação se desenvolve ao longo do tempo.',
    ],
    promptHint:
      'Faça uma pergunta sobre como a sua situação está a evoluir. Por exemplo: «Como se desenvolverá a minha carreira?»',
  },
  'celtic-cross': {
    title: 'Cruz celta',
    description: 'Uma análise aprofundada da situação — dez cartas para a imagem completa.',
    positions: [
      'Essência da situação',
      'Obstáculo',
      'Objetivo / Consciente',
      'Base / Subconsciente',
      'Passado',
      'Futuro próximo',
      'Você',
      'Ambiente',
      'Esperanças e medos',
      'Resultado',
    ],
    about: [
      'A Cruz celta é uma das tiragens de Tarot mais profundas e antigas. Dez cartas revelam a situação sob todos os ângulos: visível e oculto, passado e futuro, interior e exterior.',
      'A cruz central mostra a essência e a dinâmica da situação, enquanto a coluna à direita revela a sua atitude, o ambiente e o prognóstico final.',
      'Use esta tiragem quando precisar de uma análise abrangente de uma situação de vida complexa.',
    ],
    promptHint:
      'Descreva a situação que deseja explorar em profundidade. Por exemplo: «O que preciso saber sobre a minha relação com...?»',
  },
  horseshoe: {
    title: 'Ferradura',
    description: 'Sete cartas — um prognóstico para o futuro próximo.',
    positions: [
      'Passado',
      'Presente',
      'Futuro próximo',
      'A sua abordagem',
      'Influências externas',
      'Obstáculos',
      'Resultado final',
    ],
    about: [
      'A tiragem da Ferradura é disposta em forma de ferradura e oferece uma visão ampla de como a situação se desenvolverá a curto prazo.',
      'Sete posições revelam sucessivamente o caminho do passado ao resultado, mostrando as forças que ajudam ou dificultam.',
      'Ideal para perguntas sobre acontecimentos próximos e tomada de decisões.',
    ],
    promptHint:
      'Pergunte sobre o que o espera num futuro próximo. Por exemplo: «Como se desenrolará a minha viagem na próxima semana?»',
  },
  'relationship-pyramid': {
    title: 'Pirâmide de relacionamentos',
    description: 'Seis cartas — uma análise da relação entre duas pessoas.',
    positions: [
      'Você',
      'Parceiro',
      'Ligação entre vocês',
      'Pontos fortes',
      'Pontos fracos',
      'Perspetiva',
    ],
    about: [
      'A Pirâmide de relacionamentos explora a dinâmica entre duas pessoas — parceiros românticos, amigos, colegas ou familiares.',
      'A tiragem revela a energia de cada um, a natureza da ligação, os pontos fortes e fracos da relação, bem como o seu possível desenvolvimento.',
      'Faça uma pergunta sobre a relação específica que o preocupa.',
    ],
    promptHint:
      'Descreva a relação que deseja explorar. Por exemplo: «Quais são as perspetivas da minha relação com...?»',
  },
  star: {
    title: 'A Estrela',
    description: 'Seis cartas — caminho espiritual e crescimento pessoal.',
    positions: [
      'Passado',
      'Presente',
      'Futuro próximo',
      'Conselho',
      'Influências externas',
      'Resultado',
    ],
    about: [
      'A tiragem A Estrela está orientada para o crescimento espiritual e o autoconhecimento. Seis cartas são dispostas em forma de estrela e iluminam o seu caminho interior.',
      'Ajuda a ver de onde veio, onde se encontra no seu caminho de desenvolvimento e que conselho as cartas oferecem para o seu crescimento.',
      'Use esta tiragem para perguntas sobre autodesenvolvimento, propósito e caminho espiritual.',
    ],
    promptHint:
      'Pergunte sobre o seu caminho espiritual ou crescimento pessoal. Por exemplo: «O que preciso desenvolver em mim agora?»',
  },
  'tree-of-life': {
    title: 'Árvore da vida',
    description: 'Dez cartas — uma tiragem cabalística sobre todas as esferas da vida.',
    positions: [
      'Kether — Espiritualidade',
      'Chokmah — Sabedoria',
      'Binah — Compreensão',
      'Chesed — Misericórdia',
      'Geburah — Força',
      'Tiphereth — Harmonia',
      'Netzach — Vitória',
      'Hod — Esplendor',
      'Yesod — Fundamento',
      'Malkuth — Mundo material',
    ],
    about: [
      'A Árvore da vida é uma tiragem cabalística baseada nas dez sefirot. Cada carta corresponde a uma esfera da existência e revela um aspeto específico da sua vida.',
      'Da espiritualidade mais elevada (Kether) ao mundo material (Malkuth) — a tiragem oferece uma imagem holística de todos os níveis do seu ser.',
      'Adequada para uma profunda autoanálise e para encontrar equilíbrio entre as diferentes esferas da vida.',
    ],
    promptHint:
      'Faça uma pergunta sobre equilíbrio e harmonia na sua vida. Por exemplo: «Que esferas da minha vida precisam de atenção?»',
  },
  year: {
    title: 'Tiragem do ano',
    description: 'Doze cartas — uma para cada mês do ano.',
    positions: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    about: [
      'A tiragem do ano revela a energia de cada um dos doze meses. Cada carta é uma chave para compreender os temas principais, os desafios e as oportunidades desse período.',
      'As cartas são dispostas em círculo, como os meses num mostrador, criando um mapa completo do seu ano.',
      'Faça uma pergunta sobre o ano que se avizinha, ou simplesmente deixe as cartas revelar a imagem geral.',
    ],
    promptHint:
      'Pergunte sobre o ano que se avizinha. Por exemplo: «Como será este ano para mim?» ou «Em que devo focar-me nos próximos meses?»',
  },
  situation: {
    title: 'Tiragem de situação',
    description: 'Três cartas — uma análise da situação atual.',
    positions: ['Essência da situação', 'Influência oculta', 'Conselho / Desenvolvimento'],
    about: [
      'Uma tiragem compacta de três cartas para uma análise rápida mas profunda da situação atual.',
      'A primeira carta mostra a essência do que está a acontecer, a segunda revela as forças e fatores ocultos, e a terceira oferece o conselho das cartas e o desenvolvimento provável.',
      'Ideal quando precisa de compreender rapidamente uma situação concreta.',
    ],
    promptHint:
      'Descreva a situação que deseja analisar. Por exemplo: «O que está a acontecer na minha situação profissional?»',
  },
};
