import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'header',
	templateUrl:"header.component.html",
	styleUrls: ["header.component.css"]
})
export class HeaderComponent implements OnInit {
	addNewItems:boolean;
	inputEcho:string;

	constructor() {
		this.addNewItems = Math.random() > 0.5 ? true : false;
		this.inputEcho = "I'm the input echo!!!!"
	 }

	ngOnInit() {

	}

	onAddNewItems(){
		alert("Add Button was clicked");
	}

	onInput(e){
		this.inputEcho = e.target.value;
	}
}
