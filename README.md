# Passos para a instalação do projeto

### Configuração do ambiente

* Clone o projeto para um repositório local usando <code>git clone https://github.com/P4ul1t0s/nlwStupProject.git</code>

* Na pasta server, rode <code>npm i</code>, para instalar as dependencias do backend

* Na pasta web, rode <code>npm i</code>, para instalar as dependencias do frontend

### Para iniciar o backend

* Dentro da pasta server, entre com <code>npm run dev</code> para iniciar o ambiente de desenvolvimento

* Acesse **http://localhost:3003/** para ter acesso à aplicação

### Para iniciar o backend

* Dentro da pasta web, entre com <code>npm run dev</code> para iniciar o ambiente de desenvolvimento

* Acesse **http://localhost:5173/** para ter acesso à aplicação

### Ferramentas de desenvolvimento

1. Na pasta server, rode <code>npx prisma migrate dev</code> para atualizar o BD em relação as alterações feitas no arquivo schema.prisma

2. Na pasta server, rode <code>npx prisma studio</code> para visualizar o BD acessando **http://localhost:5555/**