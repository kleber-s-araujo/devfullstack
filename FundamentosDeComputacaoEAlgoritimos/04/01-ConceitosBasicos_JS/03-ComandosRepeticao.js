// [ Tipos de Comandos de Repetição ]

//FOR
//Funciona com uma estrutura para executar o bloco:
// for ( [inicialização] ; [Condição] ; [Expressão final] )
for(var i = 0 ; i < 10 ; i++)
{
    console.log('Exeucção n° ' + i + ' do comando FOR');
}

//WHILE
//Executa o bloco enquanto a condição for verdade
i = 0;
while( i < 10 )
{
    console.log('Exeucção n° ' + i + ' do comando WHILE');
    i++;
}

//DO WHILE
//Executa o bloco e executa a condição para a permanência no bloco
i = 0;
do 
{
    console.log('Exeucção n° ' + i + ' do comando DO-WHILE');
    i++;
} while ( i < 10 )