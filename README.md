# Organo

Aplicação web para organizar colaboradores por área ou time, com cards visualmente destacados e formulário de cadastro.

## Visão geral

O Organo é uma interface em React para registrar pessoas, atribuir uma função e organizar os colaboradores em seções de equipe. Cada time possui uma cor temática e os colaboradores são exibidos em cards com nome, cargo e imagem.

## Funcionalidades

- Cadastro de colaboradores por meio de formulário
- Seleção de time/área para cada colaborador
- Exibição de cards por categoria
- Organização visual por cores de cada time
- Interface responsiva e dinâmica em React

## Stack utilizada

- React
- TypeScript
- CSS
- Create React App

## Estrutura do projeto

```bash
src/
├── App.tsx
├── index.css
├── index.tsx
├── components/
│   ├── Banner/
│   ├── Button/
│   ├── Collaborate/
│   ├── DropDown/
│   ├── Footer/
│   ├── Form/
│   ├── TextField/
│   └── Time/
├── shared/
│   └── interfaces/
│       └── ICollaborator.ts
└── assets / (quando aplicável)
```

## Pré-requisitos

Antes de iniciar, verifique se você possui instalado em sua máquina:

- Node.js
- npm

## Como executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/organo.git
cd organo
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação em modo de desenvolvimento:

```bash
npm start
```

A aplicação ficará disponível em:

```bash
http://localhost:3000
```

## Como construir para produção

```bash
npm run build
```

Esse comando gera a pasta `build/` com os arquivos otimizados para deploy.

## Como contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua funcionalidade:

```bash
git checkout -b feature/nova-funcionalidade
```

3. Faça suas alterações e commit:

```bash
git commit -m "Adiciona nova funcionalidade"
```

4. Envie para o repositório remoto:

```bash
git push origin feature/nova-funcionalidade
```

5. Abra um pull request

## Licença

Este projeto está disponível sob a licença MIT.

## Autor

Ariel
