"use strict";
var Calculadora = /** @class */ (function () {
    function Calculadora(_num1, _num2) {
        this.num1 = _num1;
        this.num2 = _num2;
        this.resultado = 0;
    }
    Calculadora.prototype.suma = function () {
        this.resultado = this.num1 + this.num2;
        return console.log("La suma de los números es:" + this.resultado);
    };
    Calculadora.prototype.resta = function () {
        this.resultado = this.num1 - this.num2;
        return console.log("La resta de los números es:" + this.resultado);
    };
    Calculadora.prototype.multiplicacion = function () {
        this.resultado = this.num1 * this.num2;
        return console.log("La multiplicacion de los números es:" + this.resultado);
    };
    Calculadora.prototype.division = function () {
        this.resultado = this.num1 / this.num2;
        return console.log("La division de los números es:" + this.resultado);
    };
    return Calculadora;
}());
var calculadora1 = new Calculadora(8, 4);
calculadora1.suma();
calculadora1.resta();
calculadora1.multiplicacion();
calculadora1.division();
