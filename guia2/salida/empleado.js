"use strict";
var Empleado = /** @class */ (function () {
    function Empleado(_nombre, _salario) {
        this.nombre = _nombre;
        this.salario = _salario;
        this.salariofinal = 0;
        this.ISSS = 0.03;
        this.AFP = 0.072;
    }
    Empleado.prototype.salarioTotal = function () {
        this.salariofinal = this.salario - (this.salario * this.ISSS) - (this.salario * this.AFP);
        return console.log("Tu salario es: $" + this.salario + " y tu salario neto es: $" + this.salariofinal);
    };
    return Empleado;
}());
var empleado1 = new Empleado("Oscar Barrios", 1000);
empleado1.salarioTotal();
