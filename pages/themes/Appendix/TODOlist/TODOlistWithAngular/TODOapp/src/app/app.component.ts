import { Component, ViewEncapsulation } from '@angular/core';
// import {} from '@angular/core' ;

@Component({
	selector: 'body',
	templateUrl: "./app.component.html",
	styleUrls: ["app.component.css"],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	title = 'TODO app';
	items =  [
		{content: 'Item1', checked: false },
		{content: 'Item2', checked: true },
		{content: 'Item3', checked: false },
	];
}
