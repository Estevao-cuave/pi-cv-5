document.addEventListener('DOMContentLoaded', () => {
    let year = document.getElementById('year');
    let a_z = document.getElementById('a_z');
    let year_bx = document.getElementById('year_bx');
    let letter_bx = document.getElementById('letter_bx');
    
    // Toggle the year dropdown
    year.addEventListener('click', () => {
        year_bx.style.display = year_bx.style.display === 'none' || year_bx.style.display === '' ? 'block' : 'none';
        year.classList.toggle('show_yearl');
    });
    
    // Toggle the A-Z dropdown
    a_z.addEventListener('click', () => {
        letter_bx.style.display = letter_bx.style.display === 'none' || letter_bx.style.display === '' ? 'block' : 'none';
        a_z.classList.toggle('show_yearl');
    });

    

    let yearBtn = document.getElementById('year');
let letterBtn = document.getElementById('a_z');

yearBtn.addEventListener('click', function() {
    // Alterna a visibilidade do menu de "Ano"
    document.getElementById('year_bx').classList.toggle('show');
    // Remove a classe "show" do menu de "Marcas", se estiver visível
    document.getElementById('letter_bx').classList.remove('show');
});

letterBtn.addEventListener('click', function() {
    // Alterna a visibilidade do menu de "Marcas"
    document.getElementById('letter_bx').classList.toggle('show');
    // Remove a classe "show" do menu de "Ano", se estiver visível
    document.getElementById('year_bx').classList.remove('show');
});

document.getElementById("payment-method").addEventListener("change", function() {
    const selectedMethod = this.value;
    document.querySelectorAll(".payment-section").forEach(section => section.style.display = "none");
    if (selectedMethod === "credit-card" || selectedMethod === "debit-card") {
        document.getElementById("card-details").style.display = "block";
    } else if (selectedMethod === "bank-transfer") {
        document.getElementById("bank-details").style.display = "block";
    } else if (selectedMethod === "pix") {
        document.getElementById("pix-details").style.display = "block";
    }
});

});

document.addEventListener("DOMContentLoaded", () => {

    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    
    // Função para alternar imagens no carrossel
    function changeImage() {
        images[currentImageIndex].style.display = 'none'; // Oculta a imagem atual
        currentImageIndex = (currentImageIndex + 1) % images.length; // Avança para a próxima imagem
        images[currentImageIndex].style.display = 'block'; // Mostra a próxima imagem
    }
    
    // Troca de imagem a cada 3 segundos
    setInterval(changeImage, 3000);

    const modal = document.getElementById("carModal");
    const rentNowButton = document.querySelector(".btn"); // Botão de Rent now

    // Fecha o modal por padrão ao carregar a página
    modal.style.display = "none";

    // Abre o modal quando o botão for clicado
    rentNowButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Fecha o modal quando clicar no botão "close"
    document.querySelector(".close").addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fecha o modal ao clicar fora do modal
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });


});
