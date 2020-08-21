
class Calculadora {
    num1: number;
    num2: number;
    resultado:number; 
    
    constructor(_num1: number, _num2: number) {
       this.num1 = _num1;
       this.num2 = _num2;
        this.resultado = 0;
    }  
   
    suma(){
       this.resultado = this.num1 + this.num2;
       return console.log("La suma de los números es:" + this.resultado);
    }

    resta(){
        this.resultado = this.num1 - this.num2;
        return console.log("La resta de los números es:" + this.resultado);
     }

     multiplicacion(){
        this.resultado = this.num1 * this.num2;
        return console.log("La multiplicacion de los números es:" + this.resultado);
     }
     
     division(){
        this.resultado = this.num1 / this.num2;
        return console.log("La division de los números es:" + this.resultado);
     }
   }
   
   let calculadora1 = new Calculadora(8,4);
   
   calculadora1.suma();
   calculadora1.resta();
   calculadora1.multiplicacion();
   calculadora1.division();