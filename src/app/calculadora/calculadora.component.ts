import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  title = 'Calculadora'
  screen="";
  val1:any;
  sign:any;
  val2:any;
  aux1="";

  enterValue(value:string){
    if((this.sign=="+") || (this.sign=="-") || (this.sign=="*") || (this.sign=="/")){
      this.aux1 = this.aux1 + value;
      this.screen = this.screen+value;
      this.val2 = this.aux1;
    }else{
      this.screen = this.screen + value;
      this.val1 = this.screen;
    }

  }

  condition(value:string){
    this.screen = this.screen + value;
    this.sign = value;

  }

  result(){
    if(this.sign == '+'){
      this.screen = (parseInt(this.screen) + parseInt(this.val2)).toString();
    }else if (this.sign == '-'){
      this.screen = (parseInt(this.screen) - parseInt(this.val2)).toString();
    }else if (this.sign == '*'){
      this.screen = (parseInt(this.screen) * parseInt(this.val2)).toString();
    }else{
      this.screen = (parseInt(this.screen) / parseInt(this.val2)).toString();
    }
  }

  clear(){
    this.screen = "";
    this.val1 = "";
    this.val2 = "";
    this.sign = "";
    this.aux1 = "";
  }

}
