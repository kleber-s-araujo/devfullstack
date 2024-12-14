# Projeto conversão de temperatura

### Sobre o projeto
O projeto conversão de temperatura é um projeto desenvolvido em NodeJS. O projeto tem como objetivo ser um exemplo para a criação de ambiente com containers usando NodeJS.

### Observações do projeto
A aplicação é exposta usando a porta 8080

### Comandos Utilizados para Executar a Aplicação em um Container Docker
1. docker build -t kleberslvaraujo/aula-conv-temp:v1 . 
2. docker image ls
3. docker container run -d -p 8080:8080 <kleberslvaraujo/aula-conv-temp:v1>
4. docker push kleberslvaraujo/aula-conv-temp:v1
5. docker tag  kleberslvaraujo/aula-conv-temp:v1  kleberslvaraujo/aula-conv-temp:latest
6. docker push kleberslvaraujo/aula-conv-temp:latest