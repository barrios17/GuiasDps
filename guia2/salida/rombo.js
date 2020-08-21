"use strict";
var Rombo = /** @class */ (function () {
    function Rombo(_diagonal_vertical, _diagonal_horizontal) {
        this.diagonal_vertical = _diagonal_vertical;
        this.diagonal_horizontal = _diagonal_horizontal;
        this.area = this.diagonal_vertical * this.diagonal_horizontal;
    }
    Rombo.prototype.aream = function () {
        this.area = this.diagonal_horizontal * this.diagonal_vertical;
        return console.log("El area del rombo es:" + this.area + " metros cuadrados");
    };
    return Rombo;
}());
var rombo1 = new Rombo(5, 10);
rombo1.aream();
