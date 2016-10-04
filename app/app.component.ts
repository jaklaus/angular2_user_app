import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
	selector: 'my-app',
	templateUrl:'./app/app.component.html',
	styleUrls: ['./app/app.component.css']
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

	onUserCreated(event){
		this.users.push(event.user);
	}
}