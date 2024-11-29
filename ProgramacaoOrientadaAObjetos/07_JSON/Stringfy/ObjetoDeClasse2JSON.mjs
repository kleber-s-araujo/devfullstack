import { UmaClasse } from "../../06_Desestruturacao/UmaClasse.mjs"

let umObjetoDeClasse = new UmaClasse("um valor")
let json = JSON.stringify(umObjetoDeClasse);
console.log(json);