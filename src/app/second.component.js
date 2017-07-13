"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HEROES = [
    { id: 1, name: 'ALLMIGHT' },
    { id: 2, name: 'Endevor' },
    { id: 3, name: 'Midoriya Iduki' },
    { id: 4, name: 'Ingenium' },
    { id: 5, name: 'Todoroki Shouto' },
    { id: 6, name: 'One Punch Man' },
    { id: 7, name: 'SunEater' },
    { id: 8, name: 'Froppy' },
    { id: 9, name: 'Uravity' },
    { id: 10, name: 'Tenya Iida' }
];
var SecondComponent = (function () {
    function SecondComponent() {
        this.title = 'Temp';
        this.heroes = HEROES;
    }
    SecondComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return SecondComponent;
}());
SecondComponent = __decorate([
    core_1.Component({
        selector: 'my-second-app',
        template: "",
    })
], SecondComponent);
exports.SecondComponent = SecondComponent;
//# sourceMappingURL=second.component.js.map