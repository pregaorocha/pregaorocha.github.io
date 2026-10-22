/**
 * Testes automatizados do Segundo Modelo de Landing Page
 * Conceito: IMPACTO COMERCIAL (Branch: design/alternativa-impacto-comercial)
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

console.log('--- INICIANDO TESTES DO MODELO IMPACTO COMERCIAL ---\n');

// 1. Arquivos essenciais e ativos gráficos
const indexPath = path.join(__dirname, 'index.html');
const stylePath = path.join(__dirname, 'style.css');
const scriptPath = path.join(__dirname, 'script.js');
const assetsDir = path.join(__dirname, 'assets');

assert(fs.existsSync(indexPath), 'Arquivo index.html existe');
assert(fs.existsSync(stylePath), 'Arquivo style.css existe');
assert(fs.existsSync(scriptPath), 'Arquivo script.js existe');
assert(fs.existsSync(assetsDir), 'Pasta assets existe');
assert(fs.existsSync(path.join(assetsDir, 'furniture-armchair.jpg')), 'Nova imagem furniture-armchair.jpg existe');

const htmlContent = fs.readFileSync(indexPath, 'utf-8');
const cssContent = fs.readFileSync(stylePath, 'utf-8');

// 2. Validação da Nova Direção de Arte "Impacto Comercial"
assert(htmlContent.includes('TEM MÓVEIS USADOS PARA VENDER?'), 'Hero contém a pergunta inicial "TEM MÓVEIS USADOS PARA VENDER?"');
assert(htmlContent.includes('A GENTE') && htmlContent.includes('COMPRA!'), 'Hero contém a chamada principal "A GENTE COMPRA!"');
assert(htmlContent.includes('PREGÃO ROCHA — COMPRAMOS MÓVEIS USADOS') || htmlContent.includes('PREGÃO ROCHA &mdash; COMPRAMOS MÓVEIS USADOS'), 'Hero contém a assinatura "PREGÃO ROCHA — COMPRAMOS MÓVEIS USADOS"');
assert(htmlContent.includes('MANDAR FOTOS NO WHATSAPP'), 'CTA principal "MANDAR FOTOS NO WHATSAPP"');

// 3. Faixa Gráfica de Impacto (Marquee)
assert(htmlContent.includes('impact-marquee-bar'), 'Faixa gráfica de impacto implementada');
assert(htmlContent.includes('COMPRAMOS MÓVEIS USADOS') && htmlContent.includes('NEGOCIAÇÃO DIRETA'), 'Faixa contém mensagens comerciais essenciais');

// 4. Etapas Editoriais 01, 02 e 03
assert(htmlContent.includes('Fotografe'), 'Etapa 01 - Fotografe presente');
assert(htmlContent.includes('Envie pelo WhatsApp'), 'Etapa 02 - Envie pelo WhatsApp presente e destacada');
assert(htmlContent.includes('Entre em Negociação'), 'Etapa 03 - Entre em Negociação presente');

// 5. CTA Final e Fechamento
assert(htmlContent.includes('SEUS MÓVEIS ESTÃO PARADOS?'), 'CTA Final contém "SEUS MÓVEIS ESTÃO PARADOS?"');
assert(htmlContent.includes('MANDAR FOTOS AGORA'), 'Botão de fechamento "MANDAR FOTOS AGORA"');

// 6. Canal Comercial e WhatsApp
const expectedWaLink = 'https://wa.me/5562992876027?text=Ol%C3%A1%21%20Quero%20vender%20m%C3%B3veis%20usados.%20Vou%20enviar%20as%20fotos%20para%20avalia%C3%A7%C3%A3o.';
assert(htmlContent.includes(expectedWaLink), 'Link oficial com número 62 99287-6027 e texto pré-formatado');
assert(!htmlContent.toLowerCase().includes('tel:'), 'Proibição de chamadas telefônicas (tel:) rigorosamente respeitada');
assert(!htmlContent.includes('catálogo') && !htmlContent.includes('compre agora') && !htmlContent.includes('estoque'), 'Zero menção a catálogo de vendas ou compra de produtos');

// 7. Área de Atendimento
assert(htmlContent.includes('Goiânia') && htmlContent.includes('Senador Canedo'), 'Menciona Goiânia e Senador Canedo');
assert(htmlContent.includes('Consulte a disponibilidade'), 'Menciona consulta de disponibilidade pelo WhatsApp');

// 8. CSS: Fundo Claro, Vermelho Dominante, Acessibilidade
assert(cssContent.includes('--color-red: #ED1C24'), 'Vermelho comercial definido como token');
assert(cssContent.includes('--color-whatsapp: #25D366'), 'Verde WhatsApp reservado a ações de contato');
assert(cssContent.includes('prefers-reduced-motion'), 'Suporte a prefers-reduced-motion implementado');
assert(cssContent.includes('@media (max-width: 430px)'), 'Responsividade específica para 375px e 430px');

console.log('\n--- RESULTADO DOS TESTES DO SEGUNDO MODELO ---');
console.log(`Total Aprovados: ${passes}`);
console.log(`Total Falhas: ${errors}`);

if (errors > 0) {
  process.exit(1);
} else {
  console.log('Todos os requisitos do modelo IMPACTO COMERCIAL foram aprovados com sucesso!');
  process.exit(0);
}
