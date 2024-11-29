import { Carro } from "../04/carro.mjs"

export class CarroComPlaca extends Carro {
    #_placa
    constructor(umaPlaca) {
        super(55)
        this.#_placa = umaPlaca
    }

    get placa() {
        return this.#_placa
    }
}