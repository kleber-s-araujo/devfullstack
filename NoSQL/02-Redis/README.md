# Utlização do Redis
- Redis é mais rápido para acesso, pois é um banco em memória.
- Utlizado para cachear dados que são acessados muitas vezes. Ex: Na Amazon a busca de livros é muito mais acessada diariamente do que a tabela de pedidos.
- Operação de Full Text Search (FTS) e Agregação.


## Comandos
1. Criação de Documentos/Entradas:

        > SET 63d2e4079e760c94fdd173e7 '{"_id":{"$oid":"63d2e4079e760c94fdd173e7"},"dataLancamento":{"$date":"2010-08-17T00:00:00.000Z"},"nome":"To Kill a Mockingbird","preco":99.9,"categoria":"Comédia"}'

2. Consulta:

        > DBSIZE;
        > GET 63d2e4079e760c94fdd173e7;

3. Redis Search. FT.CREATE cria um índice em um esquema específico. Então toda criação nesse esquema e regra vai ser indexado. Quanto mais index, mais custo de memória:

        > FT.CREATE livros on json schema
        $.dataLancamento as dataLancamento numeric SORTABLE
        $.nome as nome text SORTABLE
        $.preco as preco numeric SORTABLE
        $.categoria as categoria text SORTABLE

4. Criar documentos no schema JSON indexados:

        > JSON.SET 63d2e4079e760c94fdd173e7 $ '{ "_id": { "$oid": "63d2e4079e760c94fdd173e7" }, "dataLancamento": 1282003200 , "nome": "Duna", "preco": 119.2, "categoria": "Ficcao"}';

        > JSON.SET 63d2e4079e760c94fdd173e5 $ '{ "_id": { "$oid": "63d2e4079e760c94fdd173e7" }, "dataLancamento": 1182003200 , "nome": "Senhor dos Anéis", "preco": 59, "categoria": "Ficcao"}';

        > JSON.SET 63d2e1ad9e760c94fdd173e6 $ '{ "_id": { "$oid": "63d2e4079e760c94fdd173e7" }, "dataLancamento": 1482003200 , "nome": "To Kill a Mockingbird", "preco": 99.9, "categoria": "Comedia"}';

        > JSON.SET 63d2e44c9e760c94fdd173e8 $ '{ "_id": { "$oid": "63d2e4079e760c94fdd173e7" }, "dataLancamento": 1282203200 , "nome": "O sol é para todos", "preco": 22.9, "categoria": "Drama"}';

        > JSON.SET 63d2e44c9e760c94fdd173d1 $ '{ "_id": { "$oid": "63d2e4079e760c94fdd173e7" }, "dataLancamento": 1212203200 , "nome": "Dracula", "preco": 10.9, "categoria": "Drama"}';

5. Busca em FTS. Mínimo de 3 caracteres:

        > FT.SEARCH livros "*";
        > FT.SEARCH livros "@nome:(*mock*)";
        > FT.SEARCH livros "@nome:(*dra*)";
        > FT.SEARCH livros "@nome:(mock*)";

6. Busca Exata (quando for numérico tem que ser range):

        > FT.SEARCH livros "@dataLancamento:[1212203200,1212203200]";
        > FT.SEARCH livros "@nome:(Dracula)";

7. Agregação e Sumarização de Valores por campo específico:

        Preço Total por Categoria:
        > FT.AGGREGATE livros "*" GROUPBY 1 @categoria REDUCE sum 1 @preco as precoTotal

        Quantidade de Livros por Categoria:
        > FT.AGGREGATE livros "*" GROUPBY 1 @categoria REDUCE COUNT_DISTINCT 1 @nome as quantidadeLivros 

        Preço médio por categoria de livros:
        > FT.AGGREGATE livros "*" GROUPBY 1 @categoria REDUCE sum 1 @preco as precoTotal REDUCE COUNT_DISTINCT 1 @nome as quantidadeLivros APPLY "@precoTotal/@quantidadeLivros" as precoMedio

        Preço médio por categoria de livros com ordenação descendente:
        > FT.AGGREGATE livros "*" GROUPBY 1 @categoria REDUCE sum 1 @preco as precoTotal REDUCE COUNT_DISTINCT 1 @nome as quantidadeLivros APPLY "@precoTotal/@quantidadeLivros" as precoMedio SORTBY 2 @quantidadeLivros DESC

        Retorno apenas da Categoria com maior preço médio:
        > FT.AGGREGATE livros "*" GROUPBY 1 @categoria REDUCE sum 1 @preco as precoTotal REDUCE COUNT_DISTINCT 1 @nome as quantidadeLivros APPLY "@precoTotal/@quantidadeLivros" as precoMedio SORTBY 2 @quantidadeLivros DESC LIMIT 0 1

        Agregação aplicando filtro de uma categoria específica:
        > FT.AGGREGATE livros "@categoria:(drama)" GROUPBY 1 @categoria REDUCE sum 1 @preco as precoTotal REDUCE COUNT_DISTINCT 1 @nome as quantidadeLivros APPLY "@precoTotal/@quantidadeLivros" as precoMedio SORTBY 2 @quantidadeLivros DESC LIMIT 0 1
