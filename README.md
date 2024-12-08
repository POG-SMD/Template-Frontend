<table>
  <tr><th colspan=5><h1>Requisitos Da Aplicação</h1></th></tr>
  <tr>
    <td>Requisito Macro</td>
    <td>Requisitos Funcionais / Não Funcionais</td>
    <td>Departamento</td>
    <td>Detalhes</td>
    <td>Status</td>
  </tr>
  
  <tr>
    <th colspan=5><h2>Requisito Macro 01 -> Setup Geral do projeto</h2></th>
  </tr>
  
  <tr>
    <td>Criar componentes gerais do projeto.</td>
    <td>Req.F. 1.1</td>
    <td>Front-end</td>
    <td>Desenvolver os componentes básicos e reutilizáveis que serão utilizados em diferentes partes da aplicação, garantindo consistência e funcionalidade.</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Configurar rotas gerais do projeto</td>
    <td>Req.F. 1.2</td>
    <td>Front-end</td>
    <td>Implementar a estrutura de navegação da aplicação, assegurando que as páginas estejam interligadas corretamente.</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Configurar traduções de formulário gerais do projeto</td>
    <td>Req.F. 1.3</td>
    <td>Front-end</td>
    <td>Adicionar suporte de tradução de textos com foco em acessibilidade e componentização de validação para erros em formulários.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Configurar a biblioteca TailwindCSS.</td>
    <td>Req.F. 1.4</td>
    <td>Front-end</td>
    <td>Integrar a biblioteca de estilização TailwindCSS, incluindo sua configuração inicial para personalizações futuras.</td>
    <td align=center>✅</td>
  </tr>
  
  <tr></tr>
  <tr>
    <th colspan=5><h2>Requisito Macro 02 -> Registro de novos usuários</h2></th>
  </tr>
  
  <tr>
    <td>Cadastrar e-mail e senha de novos usuários.</td>
    <td>Req.F. 2.1</td>
    <td>Front-end</td>
    <td>Criar o formulário que permite ao usuário inserir e-mail e senha para cadastro na plataforma</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Implementar validação de e-mail e senha</td>
    <td>Req.F. 2.2</td>
    <td>Front-end</td>
    <td>Garantir que os campos de e-mail e senha atendam aos critérios de validação, como formato correto e segurança mínima exigida.</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Adicionar tratamento de erros em validação de novos usuários.</td>
    <td>Req.F. 2.3</td>
    <td>Front-end</td>
    <td>Implementar mensagens claras e intuitivas para erros comuns, como e-mail inválido ou senha fraca.</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Montagem da tela de Cadastro de e-mail e senha para novos usuários.</td>
    <td>Req.F. 2.4</td>
    <td>Front-end</td>
    <td>Implementar tela para cadastramento de novos usuários utilizando e-mail e senha.</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Criar endpoints para cadastro de novos usuários.</td>
    <td>Req.NF. 2.1</td>
    <td>Back-end</td>
    <td>Desenvolver os serviços necessários para receber, validar e processar os dados enviados pelo front-end.</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Cadastrar e-mail e senha de novos usuários.</td>
    <td>Req.NF. 2.2</td>
    <td>Back-end</td>
    <td>Salvar os dados de cadastro no banco de dados após validação.</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Criar modelo para usuários no banco de dados.</td>
    <td>Req.NF. 2.3</td>
    <td>Back-end</td>
    <td>Estruturar as tabelas e colunas no banco de dados para armazenar informações de usuário, incluindo hashing de senha para segurança.</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Implementar validação de e-mail e senha no back-end.</td>
    <td>Req.NF. 2.4</td>
    <td>Back-end</td>
    <td>Adicionar regras de validação para evitar cadastros inválidos e garantir a integridade dos dados recebidos.</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Integrar novos usuários ao banco de dados.</td>
    <td>Req.NF. 2.5</td>
    <td>Back-end</td>
    <td>Garantir que os dados validados sejam salvos corretamente no banco de dados.</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Adicionar tratamento de erros no cadastro de usuários.</td>
    <td>Req.NF. 2.6</td>
    <td>Back-end</td>
    <td>Desenvolver mecanismos para lidar com erros, como falhas de conexão ou duplicidade de e-mail.</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Implementar validação de e-mail e senha no back-end.</td>
    <td>Req.NF. 2.7</td>
    <td>Back-end</td>
    <td>Adicionar regras de validação para evitar cadastros inválidos e garantir a integridade dos dados recebidos.</td>
    <td align=center>❌</td>
  </tr>
  
  <tr></tr>
  <tr>
    <th colspan=5><h2>Requisito Macro 03 -> Login de usuários existentes</h2></th>
  </tr>
  
  <tr>
    <td>Adicionar recuperação de senha via e-mail.</td>
    <td>Req.F. 3.1</td>
    <td>Front-end</td>
    <td>Implementar forma de recuperar senhas esquecidas via e-mail dos colaboradores.</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Montagem da tela de Login usando e-mail e senha para usuários existentes.</td>
    <td>Req.F. 3.2</td>
    <td>Front-end</td>
    <td>Implementar tela para login de usuários existentes utilizando e-mail e senha.</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Validação de login utilizando e-mail e senha para usuários existentes.</td>
    <td>Req.F. 3.3</td>
    <td>Front-end</td>
    <td>Implementar uma validação de dados como e-mail e senha para login do usuário existente.</td>
    <td align=center>❌</td>
  </tr>
  
</table>
