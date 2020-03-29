# OmniStack11_NodeJS_React

Projeto completo de um Site de Cadastro de Ongs e Casos, onde uma ONG pode se cadastrar e inserir casos que ela esta cuidando,
dando uma explicação sobre o caso e o custo. Pode também incluir seu e-mail e whatsapp para que as pessoas lendo o caso que a
ONG esta cuidando queira ajudar de alguma maneira, entre em contato.

Teremos então um frontend para WEB com as funcionalidades de criação das ONGs e dos casos por elas tratados e um aplicativo
mobile onde será possivel ter o acesso aos casos e as ONGs através do celular.

Para isso, sub-dividimos o projeto conforme abaixo, bem como as tecnologias utilizadas

---------------
BACK-END
---------------
  - NodeJs: tecnologia utilizada para montagem do backend, onde teremos as rotas (end-points) REST-Json, regras de negocio, 
    e comunicação com banco de dados.
    - Modulo express: Para exposição das rotas REST
    - Modulo CORS: Para proteção da autenticação
    
  - SQLite 3: como banco de dados para gravação dos dados
       - Modulo Knex: Como Query Builder para nossas comunicações com o BD
                      e para trabalhar com o Migrate (especies de versionamento do banco)

---------------
FRONT-END (web)
---------------
   - React: Para criação do Front-end WEB


--------------------------
FRONT-END (App - Mobile )
--------------------------
   - React-Native : Para criação da aplicação Mobile, tanto para Android como IOS.
     - Modulo Expo: Modulo responsável por "expor" as funcionalidades do mobile de forma simples, 
                    sem que seja preciso instalar os pacotes para acesso a funcionalidades tanto para 
                    android como para IOS, que são muito pesados. 
                    ps: expo é instalado no mobile para trabalhar em conjunto como nossa aplicação



Outras tecnologias envolvidas para suporte ao desenvolvimento
------------------------------------------------------------- 
   - Nodemom : Atualizador automatico do server Node em tempo de desenvolvimento.
   - Insomnia: Aplicativo client-REST para teste das chamadas REST ao backend (get, post, put, delete)
   - Github  : Repositorio para nosso projeto
   - VS Code : Editor de código, se integra com praticamente todas as tecnologias através de seus plugins
   

ps.: Este projeto é parte da Semana OmniStack elaborada pelo pessoal da RocketSeat com o intuito de apresentar 
e ensinar o uso das tecnologias citadas com o objetivo de criar um projeto completo.
   
