import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: './super-saiyan-four.component.html',
  styleUrls: ['./super-saiyan-four.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SuperSaiyanFourComponent implements OnInit {
	@Input() power;
	text=function(){
		if(this.power>=50000){
			return "The One";
		}else if(this.power>20000){
			return "Superlative!";
		}else if(this.power>9000){
			return "Over 9000!";
		}else{
			return null;
		}
	}
  constructor() { }

  ngOnInit() {
  }

}
