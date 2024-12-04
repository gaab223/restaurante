$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
    const sections = $('section');
    const navItems = $('.nav-item');
    
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;
    
        // Adicionando/removendo box-shadow no header
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }
    
        // Verificando qual seção está visível
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 1000;  // Ajuste dependendo da altura da sua barra de navegação
            const sectionBottom = sectionTop + section.outerHeight();
    
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false; // Sai do loop quando encontrar a seção ativa
            }
        });
    
        // Atualizando a classe 'active' no item de navegação
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    
        // Verificando se a última seção está visível
        const lastSection = sections.last();
        const lastSectionTop = lastSection.offset().top - 96;
        const lastSectionBottom = lastSectionTop + lastSection.outerHeight();
    
        // Se a última seção estiver visível
        if (scrollPosition >= lastSectionTop && scrollPosition < lastSectionBottom) {
            // Aplica o box-shadow no item de navegação 'Cadastro' (último item da lista)
            $(navItems[navItems.length - 2]).css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        } else {
            // Remove o box-shadow do item de navegação 'Cadastro' quando não estiver visível
            $(navItems[navItems.length - 2]).css('box-shadow', 'none');
        }
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    
    // Carregar tema salvo no LocalStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
    }
    
    // Alternar tema ao clicar no botão
    themeToggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
    
        // Salvar tema no LocalStorage
        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark-theme");
        } else {
            localStorage.removeItem("theme");
        }
    });
    
    const loginForm = document.getElementById('loginForm');

        // Adiciona o evento de submissão
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do formulário

            // Aqui você pode validar o login, se necessário
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Verifica se as credenciais são válidas (validação simples)
            if (username === "admin" && password === "1234") {
                alert('Login bem-sucedido!');
                // Redireciona para o index.html
                window.location.href = 'index.html';
            } else {
                alert('Usuário ou senha inválidos!');
            }
        });
  
});


