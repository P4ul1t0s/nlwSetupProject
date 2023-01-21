# nlwSetupMobileProject - Web & Mobile

### Configuração do ambiente

* Clone o projeto para um repositório local usando <code>git clone https://github.com/P4ul1t0s/nlwStupProject.git</code>

* Na pasta _server_, rode <code>npm i</code>, para instalar as dependencias do backend

* Na pasta _web_, rode <code>npm i</code>, para instalar as dependencias do frontend

* Na pasta _mobile_, rode <code>npm i</code>, para instalar as dependencias da aplicação mobile

#
### Para iniciar o backend (./server)

* Dentro da pasta _server_, entre com <code>npm run dev</code> para iniciar o ambiente de desenvolvimento

* Acesse **http://localhost:3003/** para ter acesso à aplicação

#
### Para iniciar o frontend (./web)

* Dentro da pasta _web_, entre com <code>npm run dev</code> para iniciar o ambiente de desenvolvimento

* Acesse **http://localhost:5173/** para ter acesso à aplicação

#
### Para iniciar a aplicação mobile (./mobile)

##### 1. Utilizando aparelho físico (iOS & Android)

* Instale o app **Expo Go** em seu dispositivo

* Certifique-se de conectar seu dispositivo na mesma rede do computador emulando a aplicação

* Na pasta _mobile_, execute o comando: <code>npx expo start</code>

* Leia o QR Code gerado com seu aparelho

##### 2. Utilizando aparelho emulado (iOS & Android)

* Certifique-se de que seu emulador está em atividade

* Na pasta _mobile_, execute o comando: <code>npx expo start</code>

* Siga as instruções exibidas para escolher o emudalor onde deseja que a aplicação seja instalada

#
### Ferramentas de desenvolvimento

* Na pasta _server_, rode <code>npx prisma migrate dev</code> para atualizar o BD em relação as alterações feitas no arquivo schema.prisma

* Na pasta _server_, rode <code>npx prisma studio</code> para visualizar a interface gráfica do BD acessando **http://localhost:5555/**

#
### Rotas do Projeto
##### Buscando hábito:

[GET] http://localhost:3003/day?date=:query

##### Buscando resumo do hábito:

[GET] http://localhost:3003/summary

##### Completando/Descompletando hábito:

[PATCH] http://localhost:3003/habits/:id/toggle

##### Criando hábito:

[POST] http://localhost:3003/habits <br/>
JSON body: { "title": "Exemplo de Hábito",	"weekDays": [0, 1, 2] }

_Nota: o backend deve estar sendo executado na porta 3003 para que as rotas funcionem como nos exemplos acima. Caso não esteja, nenhuma rota funcionará, afetando diretamente o funcionamento as interfaces web e mobile_