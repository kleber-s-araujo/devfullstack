# BD NoSQL Cassandra

## Criação do Serviço Docker:
1. docker network create cassandra-network
2. docker run --rm -d --name cassandra --hostname cassandra --network cassandra-network cassandra


## Conexão com o Cassandra via CQLSH SHELL:
1. docker run --rm -it --network cassandra-network nuvo/docker-cqlsh cqlsh cassandra 9042 --cqlversion='3.4.7'


## Criar Key Space
1. CREATE KEYSPACE IF NOT EXISTS loja WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' };
* Key Space = Banco de Dados
* Replication Factor = Nodos


## Criação das Tabelas
1. Utilizar o BD criado:
    
        > use loja;

2. Criar Tipo:

        > CREATE TYPE item_pedido (quantidade int,   valor_unidade double,   id_produto text);

3. Criar Tabela de Pedidos:

        > CREATE TABLE pedidos(
            id text,
            id_cliente text,
            data_emissao date,
            item_pedidos list<frozen<item_pedido>>,
            primary key(id, id_cliente)
        );

        > CREATE TABLE itens_pedido(
            id_pedido text, 
            id text,
            id_cliente text,
            data_emissao date,
            quantidade int,   
            valor_unidade double,   
            id_produto text,
            primary key(id_pedido, id_cliente, id)
        );

4. Inserção dos Dados:

        > INSERT INTO pedidos (id, id_cliente, data_emissao, item_pedidos) 
            VALUES ('63d2f6689e760c94fdd17419', '63d2f6689e760c94fdd174db', '2022-05-05', 
            [{quantidade : 2, valor_unidade : 100, id_produto: '63d2f6689e760c94fdd17417'}]
        );

        > INSERT INTO pedidos (id, id_cliente, data_emissao, item_pedidos)
        VALUES ('63d2f6689e760c94fdd17416', '63d2f6689e760c94fdd174db', '2022-08-05', [
        {quantidade : 1, valor_unidade : 22.90, id_produto: '63d2f6689e760c94fdd17415'}
        ]);

        > INSERT INTO pedidos (id, id_cliente, data_emissao, item_pedidos)
            VALUES ('63d2f6689e760c94fdd17403', '63d2f6689e760c94fdd174db', '2021-03-05', [
            {quantidade : 1, valor_unidade : 22.90, id_produto: '63d2f6689e760c94fdd174100'},  {quantidade : 2, valor_unidade : 44.90, id_produto: '63d2f6689e760c94fdd17425'}
        ]);

        > INSERT INTO itens_pedido (id, id_pedido, id_cliente, data_emissao, quantidade, valor_unidade id_produto) 
            VALUES ('123', '63d2f6689e760c94fdd17419', '63d2f6689e760c94fdd174db', '2022-05-05', 2, 100, '63d2f6689e760c94fdd17417');
        >

5. Visualizar os Dados Inseridos:

        > SELECT * FROM pedidos;
        > SELECT * FROM pedidos WHERE id = '63d2f6689e760c94fdd17416';
        > SELECT * FROM pedidos WHERE data_emissao = '2022-08-05' ALLOW FILTERING;
        > SELECT * FROM itens_pedido;
        
6. As consultas precedem a criação das tabelas. Uma Query = Uma Tabela:

        > CREATE TABLE itens_pedido_by_valor(
            id_pedido text, 
            id text,
            id_cliente text,
            data_emissao date,
            quantidade int,   
            valor_unidade double,   
            id_produto text,
            primary key(id_pedido, id_cliente, valor_unidade)
        );

        > CREATE TABLE itens_pedido_by_valor(
            id text,
            id_cliente text,
            data_emissao date,
            quantidade int,   
            valor_unidade double,   
            id_produto text,
            primary key(id, valor_unidade)
        );

        > CREATE TABLE itens_pedido_by_valor_data(
            id text,
            id_cliente text,
            data_emissao date,
            quantidade int,   
            valor_unidade double,   
            id_produto text,
            primary key(id, valor_unidade, data_emissao)
        );

        > CREATE TABLE itens_pedido_by_data(
            id text,
            id_cliente text,
            data_emissao date,
            quantidade int,   
            valor_unidade double,   
            id_produto text,
            primary key(id, data_emissao)
        );

        > CREATE TABLE itens_pedido_by_valor(
            id text,
            id_cliente text,
            data_emissao date,
            quantidade int,   
            valor_unidade double,   
            id_produto text,
            primary key(id, valor)
        );