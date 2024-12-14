# BD NoSQL Neo4J
- BD de Grafos com objetivo de relacionamentos
- Resolve os problemas de performance entre relacionamentos

## Comandos Utilizados na Aula
- Foi utilizado o demo do site Neo4J

## Buscar todos os Nodos 

    > MATCH (n) RETURN n LIMIT 25;

## Buscar todos os objetos do tipo Pessoa

    > MATCH (p:Person) RETURN p LIMIT 25;
    > MATCH (m:Movie)  RETURN m LIMIT 20;

## Retorna todos os filmes que o Kevin Bacon atuou

    > MATCH (:Person {name: 'Kevin Bacon'})-[:ACTED_IN]->(movie:Movie) RETURN movie;

## Retorna todos os filmes que o Tom Hanks dirigiu

    > MATCH (person {name: 'Tom Hanks'})-[:DIRECTED]->(movie:Movie) RETURN movie;
    > MATCH (person {name: 'Tom Hanks'})-[:DIRECTED|ACTED_IN]->(movie:Movie) RETURN movie;

## Retorna todos os filmes que o Tom Hanks teve algum envolvimento

    > MATCH (person {name: 'Tom Hanks'})--(movie) RETURN movie

## Retorna os Atores que atuaram no filme Hoffa

    > MATCH (hoffa:Movie {title: 'Hoffa'})<-[:ACTED_IN]-(actor) RETURN actor;
    > MATCH (hoffa {title: 'Hoffa'})<-[:ACTED_IN|DIRECTED]-(person) RETURN person.name

## Retorna as pessoas que trabalharam com mais níveis

    > MATCH (bacon {name: 'Kevin Bacon'})-[:ACTED_IN|DIRECTED*2]-(person:Person) RETURN person.name
    > MATCH (bacon {name: 'Kevin Bacon'})-[:ACTED_IN|DIRECTED*4]-(person:Person) RETURN person

## Retorna o menor caminho possível entre duas pessoas

    > MATCH
        (bacon:Person {name: 'Kevin Bacon'}),
        (tom:Person {name: 'Tom Hanks'}),
        p = shortestPath((bacon)-[*..15]-(tom))
    RETURN p

    > MATCH
        (bacon:Person {name: 'Kevin Bacon'}),
        (tom:Person {name: 'Tom Hanks'}),
        p = allShortestPaths((bacon)-[*]-(tom))
    RETURN p

    > MATCH
        (river:Person {name: 'River Phoenix'}),
        (tom:Person {name: 'Tom Hanks'}),
        p = allShortestPaths((river)-[*]-(tom))
    RETURN p