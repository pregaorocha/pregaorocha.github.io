/**
 * Testes automatizados do Pregão Rocha Landing Page
 * Validação de conformidade com os requisitos comerciais e técnicos
 */

const fs = require('fs');
const path = require('path');

let errors = 0;
let passes = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passes++;
  } else {
    console.error(`[FAIL] ${message}`);
    errors++;
  }
}

console.log('--- INICIANDO TESTES DA LANDING PAGE PREGÃO ROCHA ---\n');

// 1. Verificar arquivos essenciais
const indexPath = path.join(__dirname, 'index.html');
const stylePath = path.join(__dirname, 'style.css');
const scriptPath = path.join(__dirname, 'script.js');

assert(fs.existsSync(indexPath), 'Arquivo index.html existe');
assert(fs.existsSync(stylePath), 'Arquivo style.css existe');
assert(fs.existsSync(scriptPath), 'Arquivo script.js existe');

const htmlContent = fs.readFileSync(indexPath, 'utf-8');
const cssContent = fs.readFileSync(stylePath, 'utf-8');

// 2. Validação de Regras Comerciais e Conteúdo
assert(htmlContent.includes('Pregão Rocha'), 'Contém o nome comercial exato "Pregão Rocha"');
assert(htmlContent.includes('COMPRAMOS') && htmlContent.includes('MÓVEIS USADOS'), 'Contém a promessa de compra "COMPRAMOS MÓVEIS USADOS"');
assert(htmlContent.includes('MANDAR FOTOS NO WHATSAPP'), 'Contém o CTA correto "MANDAR FOTOS NO WHATSAPP"');
assert(htmlContent.includes('Goiânia') && htmlContent.includes('Senador Canedo'), 'Menciona as cidades atendidas (Goiânia e Senador Canedo)');

// 3. Validação do WhatsApp e Parâmetros
const expectedWaLink = 'https://wa.me/5562992876027?text=Ol%C3%A1%21%20Quero%20vender%20m%C3%B3veis%20usados.%20Vou%20enviar%20as%20fotos%20para%20avalia%C3%A7%C3%A3o.';
assert(htmlContent.includes(expectedWaLink), 'Link do WhatsApp possui o número correto (62 99287-6027) e mensagem pré-preenchida exata');

// 4. Verificação de proibições do briefing
assert(!htmlContent.toLowerCase().includes('tel:'), 'Não contém links de chamada telefônica (tel:)');
assert(!htmlContent.includes('catálogo') && !htmlContent.includes('catálogo'.toLowerCase()), 'Não contém menção a catálogo de vendas');
assert(!htmlContent.includes('Confira nosso estoque') && !htmlContent.includes('Compre agora'), 'Não contém chamadas de venda/estoque');
assert(!htmlContent.includes('<form') && !htmlContent.includes('type="file"'), 'Não implementa upload no site nem formulários desnecessários');

// 5. Validação de Acessibilidade e SEO
assert(htmlContent.includes('lang="pt-BR"'), 'Atributo lang="pt-BR" definido');
assert(htmlContent.includes('<meta name="viewport"'), 'Viewport configurado para mobile-first');
assert(htmlContent.includes('<title>Pregão Rocha | Compramos Móveis Usados</title>'), 'Title tag configurada com precisão');
assert(htmlContent.includes('rel="noopener noreferrer"'), 'Links externos contêm segurança rel="noopener noreferrer"');

// 6. Validação de CSS e Paleta de Cores
assert(cssContent.includes('#25D366') || cssContent.includes('var(--color-whatsapp)'), 'Paleta inclui verde do WhatsApp (#25D366)');
assert(cssContent.includes('#ED1C24') || cssContent.includes('var(--color-red)'), 'Paleta inclui vermelho de destaque (#ED1C24)');
assert(cssContent.includes('#27364A') || cssContent.includes('var(--color-navy)'), 'Paleta inclui azul-escuro institucional (#27364A)');
assert(cssContent.includes('#7AAE47') || cssContent.includes('var(--color-brand-green)'), 'Paleta inclui verde de apoio (#7AAE47)');
assert(cssContent.includes('@media (max-width: 768px)'), 'Contém media queries para responsividade mobile');
assert(cssContent.includes('@media (max-width: 400px)'), 'Contém media queries para telas de 375px/pequenas');

console.log('\n--- RESULTADO DOS TESTES ---');
console.log(`Total Aprovados: ${passes}`);
console.log(`Total Falhas: ${errors}`);

if (errors > 0) {
  process.exit(1);
} else {
  console.log('Todos os requisitos e testes automatizados foram aprovados com sucesso!');
  process.exit(0);
}
