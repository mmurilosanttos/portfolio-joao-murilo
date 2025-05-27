// Validação do formulário de contato
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm")
  const nameInput = document.getElementById("name")
  const emailInput = document.getElementById("email")
  const messageInput = document.getElementById("message")

  const nameError = document.getElementById("nameError")
  const emailError = document.getElementById("emailError")
  const messageError = document.getElementById("messageError")

  // Função para validar email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Função para mostrar erro
  function showError(errorElement, message) {
    errorElement.textContent = message
    errorElement.classList.remove("hidden")
  }

  // Função para esconder erro
  function hideError(errorElement) {
    errorElement.classList.add("hidden")
  }

  // Validação em tempo real
  nameInput.addEventListener("blur", function () {
    if (this.value.trim() === "") {
      showError(nameError, "Nome é obrigatório")
      this.classList.add("border-red-500")
    } else {
      hideError(nameError)
      this.classList.remove("border-red-500")
      this.classList.add("border-green-500")
    }
  })

  emailInput.addEventListener("blur", function () {
    if (this.value.trim() === "") {
      showError(emailError, "E-mail é obrigatório")
      this.classList.add("border-red-500")
    } else if (!isValidEmail(this.value)) {
      showError(emailError, "E-mail deve ter um formato válido")
      this.classList.add("border-red-500")
    } else {
      hideError(emailError)
      this.classList.remove("border-red-500")
      this.classList.add("border-green-500")
    }
  })

  messageInput.addEventListener("blur", function () {
    if (this.value.trim() === "") {
      showError(messageError, "Mensagem é obrigatória")
      this.classList.add("border-red-500")
    } else if (this.value.trim().length < 10) {
      showError(messageError, "Mensagem deve ter pelo menos 10 caracteres")
      this.classList.add("border-red-500")
    } else {
      hideError(messageError)
      this.classList.remove("border-red-500")
      this.classList.add("border-green-500")
    }
  })

  // Validação no envio do formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    let isValid = true

    // Validar nome
    if (nameInput.value.trim() === "") {
      showError(nameError, "Nome é obrigatório")
      nameInput.classList.add("border-red-500")
      isValid = false
    }

    // Validar email
    if (emailInput.value.trim() === "") {
      showError(emailError, "E-mail é obrigatório")
      emailInput.classList.add("border-red-500")
      isValid = false
    } else if (!isValidEmail(emailInput.value)) {
      showError(emailError, "E-mail deve ter um formato válido")
      emailInput.classList.add("border-red-500")
      isValid = false
    }

    // Validar mensagem
    if (messageInput.value.trim() === "") {
      showError(messageError, "Mensagem é obrigatória")
      messageInput.classList.add("border-red-500")
      isValid = false
    } else if (messageInput.value.trim().length < 10) {
      showError(messageError, "Mensagem deve ter pelo menos 10 caracteres")
      messageInput.classList.add("border-red-500")
      isValid = false
    }

    // Se tudo estiver válido, simular envio
    if (isValid) {
      alert("Mensagem enviada com sucesso! Obrigado pelo contato.")
      form.reset()
      // Remover classes de validação
      ;[nameInput, emailInput, messageInput].forEach((input) => {
        input.classList.remove("border-red-500", "border-green-500")
      })
    }
  })
})
