import type { DreamDictionaryMessages } from '../types';

export const dreamDictionaryMessages: Record<string, DreamDictionaryMessages> = {
  freudian: {
    title: 'Freudiano',
    description: 'Uma perspetiva psicanalítica sobre os símbolos do inconsciente.',
    features: 'Psicanalítico, símbolos do inconsciente',
    about: [
      'O dicionário freudiano considera o sonho um caminho para desejos reprimidos, medos e conflitos interiores. As imagens do sonho são mensagens encriptadas da psique que ocultam o que a consciência não está pronta para aceitar diretamente.',
      'Os símbolos aqui estão frequentemente ligados ao corpo, ao poder, à sexualidade, às experiências de infância e aos mecanismos de defesa. É importante observar não só o objeto do sonho, mas também os sentimentos que ele provoca.',
      'A interpretação ajuda a revelar motivos ocultos do comportamento e a compreender que processos interiores estão ativos neste momento.',
    ],
    promptHint:
      'Descreva o seu sonho com o máximo de detalhe possível: local, pessoas, objetos, emoções e o que aconteceu no final.',
  },
  jungian: {
    title: 'Junguiano',
    description: 'Arquétipos e a linguagem do inconsciente coletivo.',
    features: 'Arquétipos, inconsciente coletivo',
    about: [
      'A abordagem junguiana vê o sonho como um diálogo da alma consigo mesma. Os sonhos falam uma linguagem arquetípica — através de imagens da Sombra, da Anima, do Animus, do Sábio, do Herói e de outras figuras universais.',
      'Um sonho pode mostrar não só experiências pessoais, mas também padrões profundos pelos quais uma pessoa passa no caminho da individuação — tornar-se um ser inteiro.',
      'É dada especial atenção aos símbolos recorrentes, às transformações e à tarefa interior que o sonho convida a reconhecer.',
    ],
    promptHint:
      'Conte o seu sonho: quem apareceu, que imagens se repetiram, o que mudou e que sensação ficou ao acordar.',
  },
  miller: {
    title: 'Miller',
    description: 'Um dicionário clássico de sonhos com caráter preditivo.',
    features: 'Dicionário clássico preditivo',
    about: [
      'O dicionário de Miller é um dos intérpretes clássicos mais conhecidos. Relaciona as imagens do sonho com acontecimentos quotidianos, mudanças, encontros e avisos.',
      'Aqui o sonho é lido através de associações populares e culturais estáveis: o que se sonha pode indicar o que poderá acontecer num futuro próximo.',
      'A interpretação baseia-se numa análise sequencial dos símbolos-chave e dos seus significados tradicionais.',
    ],
    promptHint:
      'Descreva o seu sonho por ordem: o que viu, com quem interagiu e como tudo terminou.',
  },
  vanga: {
    title: 'Vanga',
    description: 'Um dicionário popular e místico de sonhos com tom preditivo.',
    features: 'Popular, místico, preditivo',
    about: [
      'O dicionário ao estilo de Vanga lê os sonhos como presságios e mensagens do destino. As imagens aqui trazem aviso, esperança ou sinal de uma viragem importante.',
      'Sonhos vívidos, inquietantes ou de luminosidade invulgar são considerados especialmente significativos.',
      'A interpretação combina sabedoria popular, intuição simbólica e atenção ao sentido espiritual do que ocorreu.',
    ],
    promptHint:
      'Descreva o seu sonho na íntegra, assinalando os detalhes mais vívidos e o que lhe pareceu significativo ou inquietante.',
  },
  nostradamus: {
    title: 'Nostradamus',
    description: 'Uma visão profética e mística das visões oníricas.',
    features: 'Profético, místico',
    about: [
      'O dicionário ao estilo de Nostradamus considera o sonho uma visão profética. Os símbolos podem apontar para mudanças vindouras, provações, revelações e leis ocultas do tempo.',
      'As imagens são frequentemente lidas alegoricamente: elementos, sinais celestes, guerras, coroas, fogo e água trazem uma mensagem sobre o destino de uma pessoa ou dos seus entes queridos.',
      'A interpretação baseia-se na procura de um sentido oculto e numa conclusão profética geral.',
    ],
    promptHint:
      'Descreva o seu sonho como uma visão: o que aconteceu, que sinais ou detalhes estranhos recorda.',
  },
  loff: {
    title: 'Loff',
    description: 'Uma abordagem psicológica moderna dos sonhos.',
    features: 'Psicológico moderno',
    about: [
      'O dicionário de Loff parte do princípio de que o significado de um símbolo depende da experiência pessoal do sonhador. A mesma imagem pode significar coisas diferentes para pessoas diferentes.',
      'Aqui são essenciais as emoções, o contexto de vida e as associações que o sonho provoca. O sonho ajuda a compreender o estado interior atual e as reações inconscientes.',
      'A interpretação liga suavemente as imagens do sonho aos processos psicológicos e à situação de vida.',
    ],
    promptHint:
      'Descreva o seu sonho e acrescente que sentimentos despertou em si e o que do que viu lhe parece pessoalmente significativo.',
  },
  esoteric: {
    title: 'Esotérico',
    description: 'Simbolismo, numerologia e elementos na interpretação de sonhos.',
    features: 'Simbolismo, numerologia, elementos',
    about: [
      'O dicionário esotérico lê os sonhos através de símbolos de elementos, números, cores e correspondências planetárias e espirituais.',
      'Cada imagem pode ser uma chave do estado energético, do equilíbrio interior e das vibrações ocultas do momento.',
      'A interpretação une simbolismo, sinais numéricos e sentido elemental do que foi visto.',
    ],
    promptHint:
      'Descreva o seu sonho, indicando cores, números e elementos (fogo, água, terra, ar) se estiveram presentes.',
  },
  islamic: {
    title: 'Islâmico',
    description: 'Interpretação tradicional islâmica dos sonhos.',
    features: 'Tradição islâmica',
    about: [
      'A tradição islâmica de interpretação de sonhos distingue visões espiritualmente significativas, sonhos perturbadores e o sono ordinário. Um sonho pode trazer bom conselho, aviso ou reflexo do estado interior.',
      'Os símbolos são lidos através de um sentido moral, espiritual e quotidiano, com respeito pela tradição do ta\'bir al-ru\'ya.',
      'A interpretação é dada com delicadeza, sem veredictos categóricos, com ênfase na sabedoria e na reflexão.',
    ],
    promptHint:
      'Descreva o seu sonho em detalhe: o que viu, os sentimentos que experimentou e o que recorda com maior clareza.',
  },
  vedic: {
    title: 'Védico',
    description: 'Interpretação de sonhos baseada na simbologia védica.',
    features: 'Baseado em textos védicos',
    about: [
      'A abordagem védica vê o sonho como reflexo do karma, do estado interior da consciência e de uma lição espiritual.',
      'As imagens podem indicar processos kármicos, purificação, bênção, provação ou a necessidade de disciplina interior.',
      'A interpretação apoia-se na simbologia védica e na procura do sentido profundo do que foi visto.',
    ],
    promptHint:
      'Descreva o seu sonho: local, ações, pessoas, animais e imagens luminosas ou escuras que viu.',
  },
  chinese: {
    title: 'Chinês',
    description: 'Simbolismo oriental tradicional nos sonhos.',
    features: 'Simbolismo oriental tradicional',
    about: [
      'O dicionário chinês lê as imagens através da simbologia oriental tradicional: animais, elementos, ciclos de fortuna, harmonia e desequilíbrio de energias.',
      'Um sonho pode indicar sinais favoráveis ou desfavoráveis, mudanças no destino, na família, nos negócios e no equilíbrio interior.',
      'A interpretação liga o que foi visto aos significados tradicionais e a uma conclusão geral sobre o sinal do sonho.',
    ],
    promptHint:
      'Descreva o seu sonho: quem e o que apareceu, que objetos, animais ou imagens naturais recorda.',
  },
};
