import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'items',
	templateUrl: "./items.component.html",
	styleUrls: ["items.component.css"],
	encapsulation: ViewEncapsulation.Native,
})
export class ItemsComponent  {
	title = 'ItemsComponent';

	@Input() items;

	itemClasses = {
		'red': true,
		'f2': true,
	};

	itemStyles = {
		'background': 'yellow',
		'color': "brown",
	}

	isVisible(){
		return Math.random() > 0.5 ? true: false;
	}
	constructor() {
	}

	onInput(e){
		this.items[0].content = e.target.value
	}
}
