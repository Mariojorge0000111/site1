# site1 · Fretes e Mudanças Curitiba (decoradissimo.com.br)

Site de aluguel (rank and rent) do Mário Jorge. Ranqueia no Google para fretes e mudanças em Curitiba. Os leads vão para o WhatsApp dele e ele mesmo os repassa. Quando o site for alugado, troca-se só o `src/config.ts`.

## Stack e publicação
- Astro + @astrojs/sitemap, Node 22 (`.node-version`). `trailingSlash: 'always'`.
- Cloudflare Pages: cada push na `main` publica sozinho em cerca de 1 minuto (build `npm run build`, saída `dist`).
- Domínio: https://decoradissimo.com.br (antes era um blog de decoração; foi substituído).
- Sitemap já enviado ao Search Console: `/sitemap-index.xml`.
- Antes de mexer: `git pull` (as tarefas agendadas fazem commits na `main`).
- Commits: autor `Mário Jorge <mariojorgefx@gmail.com>`, mensagem em português.

## Onde fica cada coisa
- `src/config.ts`: nome, WhatsApp (5555991438702), horário, cidades da região metropolitana.
- `src/data/servicos.ts` e `src/data/servicos-extra/`: serviços (`/servicos/<slug>/`).
- `src/data/bairros/*.json`: 18 bairros, cada um com texto único (`/bairros/<slug>/`).
- `src/pages/blog/*.md`: artigos com layout `Post.astro` e frontmatter `titulo`, `descricao`, `data`, `imagem`, `imagemAlt`, `palavraChave`.
- `src/data/pexels-usados.json`: IDs de fotos do Pexels já usados nos sites 1 e 2. Nunca repetir uma foto.
- Páginas fixas: index, quem-somos, equipe, contato, 404, llms.txt, robots.txt.

## Regras de conteúdo
- Título até 58 caracteres, com a palavra-chave no início. Descrição entre 130 e 155 caracteres.
- Links internos só para páginas que existem. Links externos só para fontes oficiais.
- Honestidade: não inventar anos de experiência, frota, clientes, depoimentos, seguro, CNPJ nem preços da empresa. Preço só como referência de mercado, com a fonte.
- Sem clichês de IA. Frases curtas e diretas. O texto não pode repetir o do site2 (Passo Fundo).
- A chave do Pexels fica só na memória do Mário (`/topics/apis.md`), nunca no repositório.

## Rotinas agendadas que mexem neste site
- **Artigo quinzenal fretes** (dias 1 e 15, 9h38): publica 1 artigo novo aqui e 1 no site2.
- **Backlink semanal 8links** (segundas, 9h39): plano de 8 backlinks para este site, um por semana. Nunca comprar nem recarregar créditos na 8links. Nunca digitar senhas.

## Combinados com o Mário
- Quando precisar de uma confirmação dele, mandar notificação no celular.
- Responder em português.
