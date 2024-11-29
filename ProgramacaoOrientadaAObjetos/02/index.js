/* Aula Abordando os conceitos básicos de Arrays */

/*
    Length
*/
function lengthArray() {

    console.log("\nTeste Lenght Array -->");

    var a = []
    a[0] = Math.random()
    console.log(a.length)
    for (let val in a)
        console.log(" --> " + val)

    console.log(" -=-=-=-=- ")

    a.push(Math.random())
    console.log(a.length)
    for (let val in a)
        console.log(" --> " + val)

    console.log(" -=-=-=-=- ")
    a[9] = Math.random()
    console.log(a.length)
    for (let val of a)
        console.log(" --> " + val)

    console.log(" -=-=-=-=- ")

    for (let i = 0; i < a.length; i++)
        console.log("  -->" + i + ": " + a[i])

    console.log("\nFIM Teste Lenght Array <--");
}

function loopArray() {

    console.log("\nTeste Loop Array -->");

    var a = []
    a[0] = Math.random()
    a[1] = Math.random()
    a[9] = Math.random()
    console.log(a.length)
    console.log(" -for .. in- ")
    console.log(" -=-=-=-=- ")
    for (let val in a)
        console.log(" --> " + val)

    console.log(" -=-=-=-=- \n")
    console.log(" -for .. of- ")
    console.log(" -=-=-=-=- ")
    for (let val of a)
        console.log(" --> " + val)
    console.log(" -=-=-=-=- \n")
    console.log(" -for (;;))- ")
    console.log(" -=-=-=-=- ")
    for (let i = 0; i < a.length; i++)
        console.log("  -->" + i + ": " + a[i])

    console.log("\nFIM Teste Loop Array <--");
}

lengthArray()
loopArray()