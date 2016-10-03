import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<div class="jumbotron">
			<h1>Welcome to Our Angular App!</h1>
		</div>
	`,
	styles: [`
		.jumbotron { box-shadow: 0 2px rgba(0, 0, 0, 0.2); }
	`]

})

export class AppComponent{}