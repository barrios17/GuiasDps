
class Rombo {
    diagonal_vertical: number;
    diagonal_horizontal: number;
    area:number; 
    
    constructor(_diagonal_vertical: number, _diagonal_horizontal: number) {
       this.diagonal_vertical = _diagonal_vertical;
       this.diagonal_horizontal = _diagonal_horizontal;
       this.area = this.diagonal_vertical * this.diagonal_horizontal;
   
    }  
   
    aream(){
         
       this.area = this.diagonal_horizontal * this.diagonal_vertical;
       return console.log("El area del rombo es:" + this.area + " metros cuadrados");
    }
   
   }
   
   let rombo1 = new Rombo(5,10);
   
   rombo1.aream();