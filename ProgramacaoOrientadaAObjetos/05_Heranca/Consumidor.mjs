import { CarroComPlaca } from "./CarroComPlaca.mjs"
import { Locadora } from "./Locadora.mjs"

var locadora = new Locadora()
locadora.adicionaCarro(new CarroComPlaca("ABC-9I23"))
locadora.adicionaCarro(new CarroComPlaca("DEF-0U74"))

locadora.consultaCarros()

locadora.abasteceCarro(0, 30)
locadora.consultaCarros()

locadora.abasteceCarro(1, 30)
locadora.consultaCarros()

locadora.abasteceCarro(0, 30)
locadora.consultaCarros()