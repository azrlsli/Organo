# Organo

Aplicação em React para organizar colaboradores por área/times em um painel visual. O projeto permite cadastrar profissionais, definir o time ao qual pertencem e exibir esses cards em colunas coloridas, facilitando a visualização da estrutura da equipe.

## Funcionalidades

- Cadastro de novos colaboradores
- Organização por área ou time
- Cards visuais com cores personalizadas por categoria
- Estrutura simples e didática para estudo e extensão
- Interface responsiva para visualização em diferentes tamanhos de tela

## Tecnologias utilizadas

- React
- JavaScript
- CSS
- React Scripts

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- Node.js 18 ou superior
- npm

## Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/azrlsli/Organo.git
cd Organo
```

Instale as dependências:

```bash
npm install
```

## Executando o projeto

Inicie o servidor de desenvolvimento:

```bash
npm start
```

A aplicação ficará disponível em:

```bash
http://localhost:3000
```

## Build de produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos prontos para publicação serão criados na pasta `build/`.

## Estrutura do projeto

```text
src/
├── App.js
├── index.css
├── index.js
├── components/
│   ├── Banner/
│   ├── Button/
│   ├── Collaborate/
│   ├── DropDown/
│   ├── Footer/
│   ├── Form/
│   ├── TextField/
│   └── Time/
```

## Observações

Este projeto é uma aplicação frontend de apresentação e gestão visual de times, ideal para estudo, prototipagem ou evolução em projetos maiores.
