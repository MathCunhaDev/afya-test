# Afya Test

Olá! Nessa documentação você vai saber mais sobre esse aplicativo, como rodar, o que usa e etc.

## Tecnologias

Esse teste foi construído principalmente com React e TypeScript utilizando Function Components com Hooks e o Vite para o build do projeto.
A lib de UI utilizada é o Ant Design, acredito que ele trabalha muito bem com o React e não provê somente estilos mas também uma maneira muito simples de trabalhar com os estados na aplicação.
Axios para todas as requisições.
Styled Components para estilização.
Jest, React Testing Library e Cypress para os testes.
Eslint e Prettier para correção de erros e formatação.

## Patterns

Utilizei o pattern **Custom Provider** para prover os hooks customizados com os dados e as funções para os componentes. Também segui as regras de **Clean Code** na nomeação de variáveis e arquivos, convenção de comentários e etc.
Também usei o padrão **Conventional commits** nos meus commits, assim tornando mais fácil de entender oque cada um possui de conteúdo.

## Arquitetura

Nesse teste decidi utilizar uma arquitetura inspirada no **MVC (Model, View, Controller)**.
Certo, mas por quê? Mesmo no front-end é necessário ter um padrão de arquitetura a ser seguido, para que as responsabilidades de cada parte do projeto não sejam misturadas e tenhamos problemas com manutenção, escalabilidade, componentização, desacoplamento e outros no futuro. A aplicação dessa arquitetura na organização das pastas tem o objetivo de evitar tais problemas.

## Pastas

#### Assets

Pasta onde ficam todos os arquivos estáticos da aplicação, imagens, svgs, fontes e etc.

#### Components

Essa pasta possui todos os componentes visuais do projeto e foi dividida em Atoms e Molecules, seguindo as diretrizes da metodologia **Atomic Design**.

#### Constants

Essa pasta contém os arquivos que são constantes do projeto como arrays com nomes dos headers das tabelas e etc.

#### Hooks

Onde estão os hooks customizados necessários para a aplicação, como os hooks das context apis, por exemplo.

#### Models

Aqui ficam todas as tipagens necessárias dos componentes, contexts, mappers, requisições e etc.

#### Pages

Uma das pastas da arquitetura do projeto, ela representa a **View** ela recebe os componentes necessários para construir as páginas e também as propriedades e funções para fazer com que os componentes funcionem.

#### Store

Essa pasta representa a **Model** do MVC, ela contém todas as requisições para API's externas, regras de negócios, ContextAPI's, estados e dados, os providers necessários e os mappers.

#### Contexts

A pasta com todas as ContextApi's e é uma das pastas da arquitetura MVC, ela serve como a **controller**. Os arquivos dentro da pasta são responsáveis por prover para as **Pages** os dados e funções necessários para que os componentes funcionem corretamente, dessa forma criando uma camada com os dados necessários ao redor de cada página, ela também interage com os hooks customizados dos componentes.

#### Mappers

É a pasta aonde ficam as funções que mapeiam os dados retornados das api's e devolvem já formatados de acordo com a necessidade do componente.

#### Services

Pasta onde estão as funções que executam serviços, como fazer uma requisição numa api e retornar os dados ou, buscar dados no local storage, por exemplo.

#### Styles

Contém todos os arquivos necessários para o tema como tamanhos de fontes, cores, reset css e etc.

#### Utils

Aqui estão as funções que podem ser usadas em componentes ou em outras funções no projeto, como uma função que formata um número de telefone, por exemplo.

### Setup

Pasta onde ficam as configurações do projeto, rotas, configurações de biblioteocas e etc.

## Como rodar

Após baixar o projeto execute `npm install` para instalar as dependencias.
Depois `npm run test` para executar os testes e `npm run dev` para rodar o projeto localmente.

## Links úteis

- [Atomic Design](https://medium.com/pretux/atomic-design-o-que-%C3%A9-como-surgiu-e-sua-import%C3%A2ncia-para-a-cria%C3%A7%C3%A3o-do-design-system-e3ac7b5aca2c)
- [Vite](https://vitejs.dev/)
- [MVC](https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308)
- [Styled Components](https://styled-components.com/docs)
- [Conventional Commits](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657)
- [Conventional Commits](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657)
