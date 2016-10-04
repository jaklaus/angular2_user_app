import { Component, Input } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
	selector: 'user-profile',
	template: `
		<div class="jumbotron" *ngIf="user">
			<h2><strong>{{ user.username }}</strong><small>({{ user.name }})</small></h2>
			<p>User Info</p>

			<input class="form-control" [(ngModel)]="user.username"/>
		</div>
	`
})

export class UserProfileComponent {
	@Input() user: User;
}