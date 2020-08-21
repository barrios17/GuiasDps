
class Empleado {
    nombre: string;
    salario: number;
    salariofinal:number; 
    ISSS:number;
    AFP:number;
    
    constructor(_nombre: string, _salario: number) {
       this.nombre = _nombre;
       this.salario = _salario;
        this.salariofinal = 0;
        this.ISSS= 0.03;
        this.AFP= 0.072;
    }  
   
    salarioTotal(){
       this.salariofinal = this.salario - (this.salario*this.ISSS) - (this.salario *this.AFP);
       return console.log("Tu salario es: $" + this.salario + " y tu salario neto es: $" + this.salariofinal);
    }
   
   }
   
   let empleado1 = new Empleado("Oscar Barrios",1000);
   
   empleado1.salarioTotal();