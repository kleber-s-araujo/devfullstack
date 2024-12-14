# Utlização do Redis
- Redis é mais rápido para acesso, pois é um banco em memória.
- Utlizado para cachear dados que são acessados muitas vezes. Ex: Na Amazon a busca de livros é muito mais acessada diariamente do que a tabela de pedidos.
- Operação de Full Text Search (FTS) e Agregação.


## Comandos
1. Criação de Documentos:

        > SET 63d2e4079e760c94fdd173e7 '{"_id":{"$oid":"63d2e4079e760c94fdd173e7"},"dataLancamento":{"$date":"2010-08-17T00:00:00.000Z"},"nome":"To Kill a Mockingbird","preco":99.9,"categoria":"Comédia"}'

2. Consulta:

        > DBSIZE;
        > GET 63d2e4079e760c94fdd173e7;
