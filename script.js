// Função para ser executada quando o documento HTML estiver completamente carregado
document.addEventListener("DOMContentLoaded", function() {
  // Selecionando o botão pelo ID e adicionando um evento de clique
  var meuBotao = document.getElementById("meuBotao");
  if(meuBotao){
      meuBotao.onclick = function() {
        // Abrir o link do site quando o botão for clicado
        window.open("https://www.xvideos.com/", "_blank");
      };
  } else {
      console.error("Elemento com ID 'meuBotao' não encontrado.");
  }
});
