import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SaiyanComponent implements OnInit {
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
