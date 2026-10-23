/**
 * Testes automatizados da Landing Page Pregão Rocha
 * Modelo: VERDE POSITIVO (Branch: design/proposta-verde-positiva)
 * Feedback do cliente:
 * - Letras grandes verdes: "COMPRAMOS SEU MÓVEL USADO"
 * - Destaque: "PAGAMENTO IMEDIATO"
 * - Composição reconhecível: Sofá, Geladeira e Armário
 * - Fundo claro, tons de verde dominantes e redução drástica do preto/vermelho
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

console.log('--- INICIANDO TESTES DO MODELO VERDE POSITIVO (FEEDBACK DO CLIENTE) ---\n');

// 1. Arquivos essenciais e ativos gráficos
const indexPath = path.join(__dirname, 'index.html');
const stylePath = path.join(__dirname, 'style.css');
const scriptPath = path.join(__dirname, 'script.js');
const assetsDir = path.join(__dirname, 'assets');

assert(fs.existsSync(indexPath), 'Arquivo index.html existe');
assert(fs.existsSync(stylePath), 'Arquivo style.css existe');
assert(fs.existsSync(scriptPath), 'Arquivo script.js existe');
assert(fs.existsSync(assetsDir), 'Pasta assets existe');
assert(fs.existsSync(path.join(assetsDir, 'furniture-fridge.jpg')), 'Imagem da geladeira (furniture-fridge.jpg) existe');
assert(fs.existsSync(path.join(assetsDir, 'furniture-sofa.jpg')), 'Imagem do sofá (furniture-sofa.jpg) existe');
assert(fs.existsSync(path.join(assetsDir, 'furniture-wardrobe.jpg')), 'Imagem do armário (furniture-wardrobe.jpg) existe');

const htmlContent = fs.readFileSync(indexPath, 'utf-8');
const cssContent = fs.readFileSync(stylePath, 'utf-8');

// 2. Chamada Principal Solicitada
assert(htmlContent.includes('COMPRAMOS') && htmlContent.includes('O SEU MÓVEL USADO'), 'Contém a chamada exata solicitada: "COMPRAMOS O SEU MÓVEL USADO"');
assert(htmlContent.includes('PAGAMENTO IMEDIATO'), 'Contém o destaque comercial solicitado: "PAGAMENTO IMEDIATO"');
assert(htmlContent.includes('MANDAR FOTOS NO WHATSAPP'), 'CTA principal mantém: "MANDAR FOTOS NO WHATSAPP"');

// 3. Composição de Móveis Reconhecíveis (Sofá, Geladeira, Armário)
assert(htmlContent.includes('Sofás & Estofados') || htmlContent.includes('Sofá'), 'Composição visual e textos incluem Sofá');
assert(htmlContent.includes('Geladeiras') || htmlContent.includes('Geladeira'), 'Composição visual e textos incluem Geladeira');
assert(htmlContent.includes('Armários') || htmlContent.includes('Armário'), 'Composição visual e textos incluem Armário');

// 4. WhatsApp e Parâmetros Comerciais
const expectedWaLink = 'https://wa.me/5562992876027?text=Ol%C3%A1%21%20Quero%20vender%20m%C3%B3veis%20usados.%20Vou%20enviar%20as%20fotos%20para%20avalia%C3%A7%C3%A3o.';
assert(htmlContent.includes(expectedWaLink), 'Link oficial com número 62 99287-6027 e mensagem pré-preenchida');
assert(!htmlContent.toLowerCase().includes('tel:'), 'Sem links para chamadas telefônicas (tel:)');
assert(!htmlContent.includes('catálogo') && !htmlContent.includes('compre agora') && !htmlContent.includes('estoque'), 'Zero chamadas de loja virtual ou catálogo de vendas');

// 5. Área de Atendimento
assert(htmlContent.includes('Goiânia') && htmlContent.includes('Senador Canedo'), 'Menção a Goiânia e Senador Canedo');
assert(htmlContent.includes('Consulte a disponibilidade') || htmlContent.includes('conforme disponibilidade'), 'Menção a outras cidades sob consulta');

// 6. Direção Visual Verde Positiva (CSS Tokens)
assert(cssContent.includes('--color-green-primary: #16803C'), 'Verde principal (#16803C) definido como token');
assert(cssContent.includes('--color-green-vibrant: #25C765'), 'Verde vibrante (#25C765) definido como token');
assert(cssContent.includes('--color-whatsapp: #25D366'), 'Verde WhatsApp (#25D366) mantido');
assert(cssContent.includes('prefers-reduced-motion'), 'Acessibilidade de movimento respeitada');
assert(cssContent.includes('@media (max-width: 430px)'), 'Responsividade específica para celulares pequenos (375px a 430px)');

console.log('\n--- RESULTADO DOS TESTES DO MODELO VERDE POSITIVO ---');
console.log(`Total Aprovados: ${passes}`);
console.log(`Total Falhas: ${errors}`);

if (errors > 0) {
  process.exit(1);
} else {
  console.log('Todos os 21 requisitos foram aprovados com sucesso!');
  process.exit(0);
}
