import { Component } from '@angular/core';
import { User } from './shared/models/user'

@Component({
	selector: 'my-app',
	template: `
		<header>
			<nav class="navbar navbar-inverse">
				<div class="navbar-header">
					<a href="/" class="navbar-brand">My Angular 2 App</a>
				</div>
			</nav>	
		</header>

		<main>
			<div class="row">
				<div class="col-sm-4">
					<div *ngIf="users">
					<ul class="list-group users-list" >
						<li class="list-group-item"
						*ngFor="let user of users"
						(click)="selectUser(user)"
						[class.active]="user === activeUser">
						{{ user.name }}, ({{user.username}})</li>
					</ul>
					</div>
				</div>
				<div class="col-sm-8">
					<div class="jumbotron" *ngIf="activeUser">
						<h2><strong>{{ activeUser.username }}</strong><small>({{ activeUser.name }})</small></h2>
						<p>User Info</p>	
					</div>

					<div class="jumbotron" *ngIf="!activeUser">
						<span class="glyphicon glyphicon-hand-left"></span>
						<h2>Choose a User</h2>
					</div>

				</div>
			</div>
		</main>

		<footer class="text-center">
			Copyright &copy; 2016
		</footer>
	`,
	styles: [`
		.users-list li{ cursor: pointer }
		.jumbotron .glyphicon { font-size: 60px;}
	`]

})

export class AppComponent{
	users: User[] = [
		{id: 25, name: 'Claire', username: 'claireGlove'},
		{id: 26, name: 'Joel', username: 'JoelKla'},
		{id: 27, name: 'Josh', username: 'Joshua'}
	];
	
	activeUser: User

	selectUser(user){
		this.activeUser = user;
	}
}