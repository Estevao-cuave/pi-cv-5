let indiceAtual = 0;
      const miniaturas = document.querySelectorAll('.thumb');
      const modal = document.getElementById('modal');
      const imagemModal = document.getElementById('imagem-modal');
      
      // Função para alterar a imagem principal
      function alterarImagem(elemento) {
          const imagemPrincipal = document.getElementById('imagem-principal');
          imagemPrincipal.src = elemento.src;
          indiceAtual = Array.from(miniaturas).indexOf(elemento); // Atualiza o índice da imagem
      }
      
      // Função para abrir a imagem em tela cheia (modal)
      function abrirModal() {
          modal.style.display = 'flex'; // Exibe o modal
          imagemModal.src = document.getElementById('imagem-principal').src; // Usa a imagem principal
      }
      
      // Fecha o modal
      function fecharModal() {
          modal.style.display = 'none'; // Oculta o modal
      }
      
      // Navega entre imagens no modal
      function navegarImagem(direcao) {
          indiceAtual += direcao;
          if (indiceAtual < 0) {
              indiceAtual = miniaturas.length - 1; // Volta para a última imagem
          } else if (indiceAtual >= miniaturas.length) {
              indiceAtual = 0; // Vai para a primeira imagem
          }
          imagemModal.src = miniaturas[indiceAtual].src; // Atualiza a imagem no modal
      }
      
      // Adiciona evento para abrir o modal ao clicar na imagem principal
      const imagemPrincipal = document.getElementById('imagem-principal');
      imagemPrincipal.addEventListener('click', abrirModal);