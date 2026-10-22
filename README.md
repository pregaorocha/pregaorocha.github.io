# Pregão Rocha — Landing Page (Compra de Móveis Usados)

Landing Page profissional de alta conversão para o estabelecimento **Pregão Rocha**, com foco exclusivo na captação de ofertas de pessoas que desejam vender móveis usados.

---

## 🎯 Objetivo Comercial

Atrair pessoas que possuem móveis usados em **Goiânia**, **Senador Canedo** e região circunvizinha, conduzindo o visitante diretamente para o WhatsApp comercial `(62) 99287-6027` com fotos dos itens para avaliação e negociação.

> **Importante:** Esta Landing Page **não** é loja virtual, não possui catálogo de itens à venda e **não** recebe chamadas telefônicas. O canal oficial e exclusivo de negociação é o WhatsApp.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** estruturação acessível com tags semânticas (`header`, `main`, `section`, `footer`), suporte a leitores de tela (`aria-label`, `aria-hidden`, skip links) e metadados SEO/Open Graph completos.
- **CSS3 Moderno:** variáveis CSS (Design Tokens), Flexbox, CSS Grid, media queries responsivas (Mobile First, 375px, 430px, 768px, 1024px+), animações sutis de microinteração e contraste visual elevado.
- **JavaScript Vanilla:** controle leve do botão flutuante inferior para mobile via `IntersectionObserver` (zero dependências externas e peso ultraleve).
- **Node.js:** suíte de testes de integridade e requisitos técnicos (`test.js`).

---

## 🎨 Paleta de Cores

- **Azul-escuro institucional:** `#27364A`
- **Verde de apoio da marca:** `#7AAE47`
- **Vermelho de destaque:** `#ED1C24`
- **Verde oficial WhatsApp:** `#25D366` (Hover: `#1EBE5D`)
- **Preto:** `#050505`
- **Branco:** `#FFFFFF`
- **Cinza-claro de fundo:** `#F1F2F2` / `#F8F9FA`

---

## 🚀 Como Executar Localmente

### Opção 1: Via Node.js / npx serve (ou http-server)
```bash
npx serve -l 3000 .
```
Ou simplesmente:
```bash
npm start
```
Acesse no navegador: `http://localhost:3000`

### Opção 2: Via Python
```bash
python -m http.server 3000
```
Acesse no navegador: `http://localhost:3000`

### Opção 3: Abertura direta
Abra o arquivo `index.html` em qualquer navegador web moderno.

---

## 🧪 Testes Automatizados

Para executar os testes de conformidade com os requisitos comerciais e técnicos:

```bash
npm test
# ou
node test.js
```
Todos os 22 testes de integridade, links de WhatsApp, regras de conteúdo e ausência de chamadas indevidas serão validados.
