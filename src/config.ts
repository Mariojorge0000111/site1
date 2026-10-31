// =====================================================================
// CONFIGURAÇÃO DO SITE — tudo que muda quando o site for alugado fica aqui
// =====================================================================

export const SITE = {
  // Nome que aparece no topo, no título das páginas e no schema do Google
  nome: 'Fretes e Mudanças Curitiba',
  // Frase curta abaixo do nome
  slogan: 'Fretes, carretos e mudanças em Curitiba e região',
  cidade: 'Curitiba',
  estado: 'PR',

  // WhatsApp com DDI + DDD + número, só números. Ex.: '5541999998888'
  // Enquanto estiver vazio, os botões levam para a página de contato.
  whatsapp: '',
  // Telefone para exibir no site. Ex.: '(41) 99999-8888'
  telefone: '',
  // Mensagem que já vem escrita quando a pessoa clica no WhatsApp
  mensagemWhatsapp: 'Olá! Vim pelo site e gostaria de um orçamento de frete/mudança.',

  horario: 'Segunda a sábado, das 7h às 19h',
};

export function linkWhatsapp(mensagem = SITE.mensagemWhatsapp): string {
  if (!SITE.whatsapp) return '/contato/';
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const SERVICOS = [
  {
    slug: 'frete-curitiba',
    titulo: 'Frete em Curitiba',
    curto: 'Transporte de móveis, eletrodomésticos e volumes avulsos pela cidade.',
    icone: '🚚',
  },
  {
    slug: 'carreto-curitiba',
    titulo: 'Carreto em Curitiba',
    curto: 'Carreto rápido para poucos itens: uma geladeira, um sofá, compras de loja.',
    icone: '📦',
  },
  {
    slug: 'mudanca-residencial-curitiba',
    titulo: 'Mudança Residencial',
    curto: 'Mudança de casa ou apartamento com embalagem, desmontagem e montagem.',
    icone: '🏠',
  },
  {
    slug: 'mudanca-comercial-curitiba',
    titulo: 'Mudança Comercial',
    curto: 'Mudança de escritórios, lojas e consultórios com o mínimo de parada.',
    icone: '🏢',
  },
];

export const BAIRROS = [
  'Centro', 'Batel', 'Água Verde', 'Bigorrilho', 'Mercês', 'Rebouças', 'Alto da XV',
  'Cristo Rei', 'Juvevê', 'Cabral', 'Bacacheri', 'Boa Vista', 'Santa Felicidade',
  'Campo Comprido', 'CIC', 'Fazendinha', 'Portão', 'Novo Mundo', 'Capão Raso',
  'Pinheirinho', 'Xaxim', 'Hauer', 'Boqueirão', 'Uberaba', 'Cajuru', 'Sítio Cercado',
  'Tatuquara', 'Bairro Alto', 'Hugo Lange', 'Ecoville',
];

export const REGIAO = [
  'São José dos Pinhais', 'Pinhais', 'Colombo', 'Araucária', 'Fazenda Rio Grande',
  'Almirante Tamandaré', 'Campo Largo', 'Piraquara', 'Quatro Barras', 'Campina Grande do Sul',
];
