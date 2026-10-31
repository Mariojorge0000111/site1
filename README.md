# site1 — Fretes e Mudanças Curitiba

Site em [Astro](https://astro.build) publicado na Cloudflare Pages. Cada envio para a branch `main` publica o site automaticamente.

## Onde mexer

- **Nome, WhatsApp, telefone e horário:** `src/config.ts` (é o que muda quando o site for alugado)
- **Endereço do site / domínio:** `astro.config.mjs` (`SITE_URL`)
- **Páginas de serviço:** `src/pages/*.astro`
- **Artigos do blog:** `src/pages/blog/*.md` — para publicar um novo, crie um arquivo `.md` copiando o cabeçalho de um existente

## Cloudflare Pages

- Framework: Astro
- Build command: `npm run build`
- Output directory: `dist`
