## O que é Docker:
    O Docker abstrai a infraestrutura das aplicações através de imagens prontas. O que
    temos com o uso do Docker, são máquinas virtuais de baixo custo rodando somente
    com a infraestrutura de aplicações.
    Ex.: Uma imagem muito utilizada no Docker é a Alpine, ela contém apenas 5MB. Essa
    imagem contém apenas o core do Sistema Operacional, no caso Linux, que executa a
    maioria das aplicações. O uso dela possibilita a adição do que é necessário para instalar
    pacotes SDK do NET, Node.js, PHP e, logo após isso, fazer um pacote. Com o pacote
    montado, pode-se enviar o pacote completo para a produção, sem risco de erros.
    
    Embora o Docker seja voltado para infraestrutura, pode-se utilizá-lo também em
    ambientes de desenvolvimento, pois atualmente trabalhamos com vários bancos de
    dados, diversas tecnologias e serviços, isso gera um acúmulo de instalações grandes.
    Para que esse acúmulo não ocorra, podemos utilizar imagens prontas de máquinas com
    SQL Server, MySQL e MongDB e executá-las quando necessário.

## Comandos Docker:
    Comando                                 | Função
    --------------------------------------- | ----------------------------------------
    docker –version                         | Verificar a versão do Docker
    docker run hello-world                  | Se a imagem hello-world não existir localmente será buscado online e executado
    docker image ls                         | Lista as imagens locais
    docker image rmi <ID_IMAGEM>            | Remove uma imagem baixada (Se não em uso)
    docker image prune                      | Remove todas as imagens não utilizadas
    docker container ls                     | Lista os Containers
    docker container ls –all                | Lista os Containers contempla os de Teste
    docker container –help                  | Lista completa do que podemos fazer com um contêiner
    docker container start <ID_CONTAINER>   | Executa um Container
    docker container stop <ID_CONTAINER>    | Finaliza um Container
    docker container rm <ID_CONTAINER>      | Remove um Container

## Docker File:
    Arquivo de instruções que o Docker utilizará para saber como publicar uma aplicação em um Contêiner, 
    bem como qual imagem utilizar.

    Comando | Funcção
    :---------  :---------
    __FROM__ <node:current-slim> | Define que estamos utilizando uma imagem como base
    __WORKDIR__ /usr/src/app | Define o caminho do arquivo, dentro da imagem, onde ficará o código fonte da aplicação
    __COPY__ package.json | Copia o arquivo Package.json que contém os pacotes necessários para executar a API
    __RUN__ npm install | Instala todos os pacotes necessários
    __EXPOSE__ <8080> | Define em qual porta está API rodará
    __CMD__ [‘npm’, ‘start’] | Execute o comando NPM START para iniciar a API
    __COPY . .__ | Copia o resto da aplicação com a imagem para o Host

## Criar Imagem Docker
    docker image build –t dockerapi:1.0 --> Na pasta raíz da aplicação 
    docker cotainer run --publish 8080:3000 --detach --name api dockerapi:1.0 --> Pega a imagem gerada e a executa como um contêiner.
        Sendo:
            --publish   --> Faz o direcionamento do tráfego para a porta onde a API está rodando
            <8080:3000> --> Roda o contêiner na porta 8080, ou seja, acessaremos a API no Browser pela URL http://localhost:8080, porém, internamente a API estará rodando na porta 3000.
            --detach    --> Executar este contêiner em background, e não trava o processo no terminal ou Visual Studio Code que está executando
            --name      --> Especifica o nome do contêiner 

