export const situations = [
  {
    id: 1,
    text: "Vai prestar ENEM ou algum vestibular e sente que sua redação ainda não está no nível ideal?",
  },
  {
    id: 2,
    text: "Quer gabaritar as questões de literatura, incluindo as obras obrigatórias da Fuvest, Unicamp, UFPR e outros?",
  },
  {
    id: 3,
    text: "️Precisa dominar a gramática para passar em concursos públicos?",
  },
];

export const classes = [
  {
    title: "Redação",
    description: "Enem e Vestibulares",
    itens: [
      "Técnicas para argumentação nota 1000",
      "Como estruturar uma redação do zero",
      "Correções personalizadas com foco nos critérios do ENEM",
    ],
    menor: true,
    color: "var(--yellow)",
    icon: "/images/icons/pencil.svg",
  },
  {
    title: "Literatura",
    description: "e Obras Obrigatórias",
    itens: [
      "Aprofundamento em estilos literários e autores",
      "Estudo detalhado das obras obrigatórias (com resumos e análises)",
      "Dicas para interpretar e responder questões literárias",
    ],
    color: "var(--primary)",
    icon: "/images/icons/book.svg",
  },
  {
    title: "Gramática",
    description: "para Concursos Públicos",
    itens: [
      "Domine as regras gramaticais que mais caem",
      "Aprenda com mapas mentais, exercícios e resumos visuais",
      "Simulados com correção e comentários",
    ],
    menor: true,
    color: "var(--green)",
    icon: "/images/icons/abc.svg",
  },
];