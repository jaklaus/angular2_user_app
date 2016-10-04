"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var AppComponent = (function () {
    function AppComponent() {
        this.users = [
            { id: 25, name: 'Claire', username: 'claireGlove' },
            { id: 26, name: 'Joel', username: 'JoelKla' },
            { id: 27, name: 'Josh', username: 'Joshua' }
        ];
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<header>\n\t\t\t<nav class=\"navbar navbar-inverse\">\n\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t<a href=\"/\" class=\"navbar-brand\">My Angular 2 App</a>\n\t\t\t\t</div>\n\t\t\t</nav>\t\n\t\t</header>\n\n\t\t<main>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div *ngIf=\"users\">\n\t\t\t\t\t<ul class=\"list-group users-list\" >\n\t\t\t\t\t\t<li class=\"list-group-item\"\n\t\t\t\t\t\t*ngFor=\"let user of users\"\n\t\t\t\t\t\t(click)=\"selectUser(user)\"\n\t\t\t\t\t\t[class.active]=\"user === activeUser\">\n\t\t\t\t\t\t{{ user.name }}, ({{user.username}})</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t<div class=\"jumbotron\" *ngIf=\"activeUser\">\n\t\t\t\t\t\t<h2><strong>{{ activeUser.username }}</strong><small>({{ activeUser.name }})</small></h2>\n\t\t\t\t\t\t<p>User Info</p>\t\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"jumbotron\" *ngIf=\"!activeUser\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-hand-left\"></span>\n\t\t\t\t\t\t<h2>Choose a User</h2>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</main>\n\n\t\t<footer class=\"text-center\">\n\t\t\tCopyright &copy; 2016\n\t\t</footer>\n\t",
            styles: ["\n\t\t.users-list li{ cursor: pointer }\n\t\t.jumbotron .glyphicon { font-size: 60px;}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map