// Função para confirmar presença no formulário de cadastro
function confirmarPresenca() {
   // Pega valores dos inputs e remove espaços em branco
   const nome = document.getElementById("nome").value.trim();
   const telefone = document.getElementById("telefone").value.trim();

   // Validação - verifica se campos estão vazios
   if (nome === "" || telefone === "") {
      alert("Por favor, preencha todos os campos antes de confirmar.");
      return;  // Para a função se tiver erro
   }

   // Salva dados no localStorage (armazenamento do navegador)
   localStorage.setItem("nomeConfirmado", nome);
   localStorage.setItem("telefoneConfirmado", telefone);

   // Redireciona para página de sucesso
   window.location.href = "sucesso.html";
}

// Função para exibir dados salvos na página de confirmação
function exibirDados() {
   // Recupera dados do localStorage
   const nome = localStorage.getItem("nomeConfirmado");
   const telefone = localStorage.getItem("telefoneConfirmado");
   
   // Verifica se os elementos existem na página
   if (document.getElementById("nomeExibido")) {
      document.getElementById("nomeExibido").textContent = nome;
      document.getElementById("telefoneExibido").textContent = telefone;
   }
}

// Executa exibirDados() quando página carrega
exibirDados();