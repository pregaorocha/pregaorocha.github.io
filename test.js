/**
 * Testes automatizados do Pregão Rocha Landing Page
 * Validação de conformidade com os requisitos comerciais e nova direção de arte
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

console.log('--- INICIANDO TESTES DO REDESIGN DA LANDING PAGE PREGÃO ROCHA ---\n');

// 1. Arquivos essenciais e ativos gráficos
const indexPath = path.join(__dirname, 'index.html');
const stylePath = path.join(__dirname, 'style.css');
const scriptPath = path.join(__dirname, 'script.js');
const assetsDir = path.join(__dirname, 'assets');

assert(fs.existsSync(indexPath), 'Arquivo index.html existe');
assert(fs.existsSync(stylePath), 'Arquivo style.css existe');
assert(fs.existsSync(scriptPath), 'Arquivo script.js existe');
assert(fs.existsSync(assetsDir), 'Pasta assets existe com imagens fotográficas');
assert(fs.existsSync(path.join(assetsDir, 'hero-furniture.jpg')), 'Imagem hero-furniture.jpg existe');

const htmlContent = fs.readFileSync(indexPath, 'utf-8');
const cssContent = fs.readFileSync(stylePath, 'utf-8');

// 2. Validação da Nova Direção de Arte e Headline de Alto Impacto
assert(htmlContent.includes('TEM MÓVEIS USADOS PARA VENDER?'), 'Hero contém headline provocativa: "TEM MÓVEIS USADOS PARA VENDER?"');
assert(htmlContent.includes('A GENTE COMPRA!'), 'Hero contém resposta comercial: "A GENTE COMPRA!"');
assert(htmlContent.includes('COMPRAMOS MÓVEIS USADOS'), 'Hero preserva a promessa oficial "COMPRAMOS MÓVEIS USADOS"');
assert(htmlContent.includes('Fotografe seus móveis, envie pelo WhatsApp e entre em contato para avaliação e negociação'), 'Texto de apoio com o fluxo de envio e negociação');

// 3. Validação das Etapas Redesenhadas (01, 02, 03)
assert(htmlContent.includes('01') && htmlContent.includes('Fotografe'), 'Etapa 01 - Fotografe presente');
assert(htmlContent.includes('02') && htmlContent.includes('Envie pelo WhatsApp'), 'Etapa 02 - Envie pelo WhatsApp com destaque');
assert(htmlContent.includes('03') && htmlContent.includes('Negocie'), 'Etapa 03 - Negocie presente');

// 4. Seção Visualmente Distinta: Área de Atendimento
assert(htmlContent.includes('Área de Atendimento Regional'), 'Bloco de Área de Atendimento presente');
assert(htmlContent.includes('Goiânia') && htmlContent.includes('Senador Canedo'), 'Menção a Goiânia e Senador Canedo');
assert(htmlContent.includes('Consulte a disponibilidade'), 'Instrução para consultar outras cidades pelo WhatsApp');

// 5. WhatsApp Comercial e Restrições
const expectedWaLink = 'https://wa.me/5562992876027?text=Ol%C3%A1%21%20Quero%20vender%20m%C3%B3veis%20usados.%20Vou%20enviar%20as%20fotos%20para%20avalia%C3%A7%C3%A3o.';
assert(htmlContent.includes(expectedWaLink), 'Link oficial com número 62 99287-6027 e texto pré-formatado');
assert(!htmlContent.toLowerCase().includes('tel:'), 'Proibição de chamadas telefônicas (tel:) respeitada');
assert(!htmlContent.includes('catálogo') && !htmlContent.includes('compre agora') && !htmlContent.includes('estoque'), 'Zero catálogo de vendas ou chamada para comprar móveis');
assert(!htmlContent.includes('<form'), 'Zero formulários burocráticos');

// 6. Motion Design, Acessibilidade e CSS Tokens
assert(cssContent.includes('prefers-reduced-motion'), 'Suporte obrigatório a prefers-reduced-motion implementado');
assert(cssContent.includes('#ED1C24') || cssContent.includes('--color-red'), 'Vermelho de destaque (#ED1C24) presente no CSS');
assert(cssContent.includes('#25D366') || cssContent.includes('--color-whatsapp'), 'Verde do WhatsApp (#25D366) presente');
assert(cssContent.includes('#182332') || cssContent.includes('#27364A') || cssContent.includes('--color-navy'), 'Azul-marinho noturno presente para alto contraste');
assert(cssContent.includes('@media (max-width: 430px)'), 'Responsividade para telas de celulares de 375px e 430px');

console.log('\n--- RESULTADO DOS TESTES DO REDESIGN ---');
console.log(`Total Aprovados: ${passes}`);
console.log(`Total Falhas: ${errors}`);

if (errors > 0) {
  process.exit(1);
} else {
  console.log('Todos os requisitos do Redesign foram validados e aprovados!');
  process.exit(0);
}
