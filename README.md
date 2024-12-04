Documentação do Projeto - Restaurante Online
feito por Gabriel Oliveira da Slva

Introdução
Este projeto consiste em um site de restaurante desenvolvido para proporcionar aos usuários uma experiência de navegação intuitiva e agradável. A plataforma permite visualizar pratos, conhecer suas descrições e preços, além de facilitar a compra de itens e a autenticação de usuários através de uma página de login.

Estrutura do Projeto
O projeto segue uma estrutura modular e organizada em diretórios, conforme descrito abaixo:

index.html: Arquivo principal que contém a estrutura básica da página inicial, incluindo o layout e os links para os outros recursos.

styles: Diretório contendo os arquivos CSS responsáveis pelo design do site.

home.css: Estilos específicos para a página inicial, incluindo o layout e os efeitos visuais dos pratos.
styles.css: Arquivo CSS que define os estilos gerais do site, como fontes, cores e design responsivo.
login.css: Arquivo de estilo dedicado à página de login, com ajustes específicos para campos e botões de autenticação.
images: Diretório que armazena todas as imagens usadas no site. Cada imagem está nomeada de acordo com o prato que representa.

src: Diretório contendo os arquivos de código-fonte JavaScript, que controlam a interatividade e as funcionalidades do site, como o sistema de login e a lógica do carrinho de compras.

Tecnologias Utilizadas
HTML5: Estrutura e marcação semântica das páginas.
CSS3: Estilos de design, responsividade e animações.
JavaScript: Lógica interativa, como manipulação do DOM, funcionalidade do carrinho de compras e autenticação.
Font Awesome: Biblioteca de ícones para melhorar a interface do usuário com ícones visualmente atraentes.
Bootstrap: Framework CSS que facilita a criação de layouts responsivos e de fácil manutenção.
Firebase (se integrado futuramente): Para gerenciamento de dados do usuário e autenticação.
Funcionalidades
Página Inicial: Exibição de imagens e descrições detalhadas de pratos. Cada prato inclui seu nome, descrição e preço. O usuário pode adicionar os pratos ao seu carrinho de compras.

Carrinho de Compras: Seção onde os usuários podem visualizar os itens selecionados, alterar a quantidade ou remover itens.

Página de Login: Área onde os usuários podem se autenticar com suas credenciais para acessar áreas restritas ou finalizar compras. Futuramente, a autenticação pode ser expandida para incluir integração com Firebase.

Design Responsivo: O layout foi desenvolvido para ser responsivo, garantindo uma boa visualização em diferentes dispositivos, incluindo desktops, tablets e smartphones.

Correções Realizadas
Caminho das Imagens: Corrigido o caminho das imagens na página inicial, garantindo que as imagens dos pratos sejam carregadas corretamente.

Estilo da Página de Login: Ajustes no layout e na aparência da página de login, incluindo melhorias no design dos campos de entrada e botões.

Estilo Geral do Site: Refinamento no estilo geral do site, incluindo ajustes de fontes, cores e espaçamento, além de melhorias na responsividade.

Imagens
As imagens utilizadas no site estão localizadas na pasta images, organizadas de forma a refletir cada prato disponível. As imagens são nomeadas de acordo com o prato que representam, por exemplo:

prato1.jpg
prato2.jpg
Essas imagens são carregadas dinamicamente nas seções da página inicial, oferecendo uma experiência visual rica para o usuário.

Código e Organização
O código do site é organizado em arquivos HTML, CSS e JavaScript. A estrutura modular do código permite fácil manutenção e escalabilidade. O uso de CSS modular e JavaScript organizado em funções específicas facilita a leitura e o entendimento do código.

Principais Arquivos:
HTML: Responsável pela estrutura básica das páginas.
CSS: Contém estilos específicos para cada seção do site, incluindo layout, fontes, cores e efeitos visuais.
JavaScript: Lógica para o funcionamento do carrinho de compras e autenticação de usuários.
Instalação
Para rodar o site localmente ou em um servidor web, siga os passos abaixo:

Clone ou baixe o projeto para o seu diretório local.
Coloque o projeto em um servidor web ou utilize um servidor local como o Live Server no VS Code para visualização.
Acesse o projeto no navegador digitando a URL do servidor ou index.html no caso de visualização local.
Uso
O site permite visualizar os pratos, suas descrições e preços na página inicial.
O usuário pode adicionar itens ao seu carrinho e, futuramente, completar a compra (quando a funcionalidade de pagamento for implementada).
O sistema de login pode ser usado para autenticação do usuário, e será expandido para incluir funcionalidades como a criação de conta.
Limitações
Falta de Seção de Administrador: Atualmente, não existe uma seção administrativa que permita gerenciar pratos, pedidos ou visualizar dados dos usuários.

Falta de Seção de Pagamento: O site ainda não implementa uma área para processar transações de pagamento. No futuro, será necessário integrar com sistemas de pagamento como Stripe ou PayPal.

Futuras Melhorias
Implementação de uma Seção Administrativa: Permitir que administradores do site possam gerenciar pratos, categorias, preços e pedidos, melhorando a funcionalidade de backend.

Sistema de Pagamento: Implementar uma seção de pagamento para processar compras diretamente no site, com integração com gateways de pagamento seguros.

Melhorias de Responsividade: Melhorar a experiência em dispositivos móveis, otimizando a exibição do site para diferentes tamanhos de tela.

Integração com Firebase: Implementar autenticação com Firebase para facilitar o login, registro e recuperação de senhas, além de possibilitar o armazenamento de dados do usuário.

Comentários e Avaliações de Pratos: Adicionar funcionalidades para que os usuários possam comentar e avaliar os pratos, ajudando outros clientes a tomar decisões de compra.
