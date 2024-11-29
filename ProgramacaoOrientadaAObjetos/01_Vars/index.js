/* Aula Abordando os conceitos básicos de Vars, Let e Const em JavaScript */

/* 
    VAR
*/
function testVarA( )
{   
    console.log("Teste VAR A -->");
    var var01="var 01"
    {
        var var02="var 02"
        console.log("01a."+var01)
        console.log("01b."+var02)
    }
    console.log("02a."+var01)
    console.log("02b."+var02)
    console.log("FIM Teste VAR A <--");
}

function testVarB(){

    console.log("Teste VAR B -->");
    var var01="var 01"
    if(1==0){
        var var02="var 02"
        console.log("01a."+var01)
        console.log("01b."+var02)
    }
    console.log("02a."+var01)
    console.log("02b."+var02)
    console.log("FIM Teste VAR B <--");
}

function testVarC(){

    console.log("Teste VAR C -->");
    var var01="var 01"
    {
        console.log("01a."+var01)
        var var01="var 02"
        console.log("02a."+var01)
    }
    var var01="var 03"
    console.log("03a."+var01)
    console.log("FIM Teste VAR C <--");
}

/* 
    LET
*/
function testLetA(){
    console.log("Teste LET A -->");
    let let01="let 01"
    {
        let let02="let 02"
        console.log("01a."+let01)
        console.log("01b."+let02)
    }
    console.log("02a."+let01)
    console.log("FIM Teste LET A <--");
}

function testLetB(){
    console.log("Teste LET B -->");
    let let01="let 01"
    {
        let let02="let 02"
        console.log("01a."+let01)
        console.log("01b."+let02)
    }
    console.log("02a."+let01)
    try {
        console.log("02b."+let02)
    } catch (error) {
        console.log("02b. let02 não existe")
    }
    
    console.log("FIM Teste LET B <--");
}

function testLetC(){
    console.log("Teste LET C -->");
    let let01="let 01";
    {
        console.log("01c."+let01)
        let let02="let 02"
        console.log("02c."+let01)
    }
    console.log("03c."+let01)
    console.log("FIM Teste LET C <--");
}

/* 
    CONST
*/
function testConstA(){
    console.log("Teste CONST A -->");
    const const01="const 01"
    {
        const const02="const 02"
        console.log("01a."+const01)
        console.log("01b."+const02)
    }
    try {
        const01 = "novo valor"
    } catch (error) {
        console.log("não é possível atribuir novo valor na const01")
    }
    
    console.log("02a."+const01)

    try {
        console.log("02b."+const02)
    } catch (error) {
        console.log("const02 undefined")
    }
    
    console.log("FIM Teste CONST A <--");
}

function testConstB(){
    console.log("Teste CONST B -->");
    const const01={propriedade: "valor"}
    console.log("01a."+const01.propriedade)

    const01.propriedade = "novo valor"
    console.log("02a."+const01.propriedade)
    console.log("FIM Teste CONST B <--");
}

function testConstC(){
    console.log("Teste CONST C -->");
    const const01={propriedade: "valor"}
    console.log("01a."+const01.propriedade)

    try {
        const01 = {propriedade: "novo valor"}
    } catch (error) {
        console.log("não é possível atribuir novo valor na const01")
    }
    
    console.log("02a."+const01.propriedade)
    console.log("FIM Teste CONST C <--");
}

/* 
    Execução
*/
console.log("Iniciando teste de Variáveis:")
testVarA()
testVarB()
testVarC()

console.log("Iniciando teste de Variáveis Let:")
testLetA()
testLetB()
testLetC()

console.log("Iniciando teste de Variáveis Const:")
testConstA()
testConstB()
testConstC()