import { Component, OnInit,Input } from '@angular/core';

@Component({
	selector: 'item',
	// template: `<li>Item Name</li>`,
	template: `<li>{{item.content}}, {{item.checked}}</li>`,
	// template: `<li *ngFor="let item of items">{{item.content}} : {{item.checked}}</li>`,
	styles: []
})
export class itemComponent implements OnInit {
	title = "Item 1";

	@Input() item;

	constructor() { }

	ngOnInit() {
	}
}
