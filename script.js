// Semáforo animado no topo direito
let current = 0;
const colors = ['red', 'yellow', 'green'];
function updateSemaforoIcon() {
  document.querySelectorAll('.semaforo-icon .light').forEach((el, i) => {
    el.classList.toggle('active', i === current);
  });
  let delay = current === 0 ? 3500 : current === 1 ? 900 : 2300;
  current = (current + 1) % colors.length;
  setTimeout(updateSemaforoIcon, delay);
}
if (document.querySelector('.semaforo-icon')) updateSemaforoIcon();

// Animar FAQ (expandir/collapse)
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    this.classList.add('open');
  });
});

// Formulario de contato
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const assunto = document.getElementById('assunto').value;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const mailto = `mailto:comercialexpresstransportes@gmail.com?subject=${encodeURIComponent('Assunto: '+ assunto)}&body=Nome: ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;
    document.getElementById('form-status').textContent = "Redirecionando para seu programa de email...";
    setTimeout(() => { window.location.href = mailto; }, 900);
  });
}

// Formulario de orçamento
const orcamentoForm = document.getElementById('orcamento-form');
if (orcamentoForm) {
  orcamentoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const tipo = document.getElementById('tipo').value;
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;
    const data = document.getElementById('data').value;
    const passageiros = document.getElementById('passageiros').value;
    const detalhes = document.getElementById('detalhes').value;
    const mailto = `mailto:comercialexpresstransportes@gmail.com?subject=Orçamento Express Transportes&body=Tipo: ${tipo}%0AOrigem: ${origem}%0ADestino: ${destino}%0AData: ${data}%0APassageiros: ${passageiros}%0ADetalhes: ${detalhes}`;
    document.getElementById('orcamento-status').textContent = "Redirecionando para seu programa de email...";
    setTimeout(() => { window.location.href = mailto; }, 900);
  });
}

// Ano atual no rodapé
const anoFooter = document.getElementById('anoFooter');
if (anoFooter) anoFooter.textContent = new Date().getFullYear();
// Clique com efeito suave
document.querySelectorAll(".parceiro-card").forEach(card => {
    card.addEventListener("click", function() {
        const url = this.getAttribute("data-url");

        this.style.transform = "scale(0.95)";
        setTimeout(() => {
            this.style.transform = "";
            window.open(url, "_blank");
        }, 200);
    });
});


// Scroll Reveal Animation
const fadeSection = document.querySelector(".fade-section");

function revealOnScroll() {
    const sectionTop = fadeSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(sectionTop < windowHeight - 100) {
        fadeSection.classList.add("visible");
    }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
