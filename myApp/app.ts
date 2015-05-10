/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
// Annotation section
@Component({
    selector: 'my-app'
})
@View({
    templateUrl:'myApp/myApp.html'
})
// Component controller
class MyAppComponent {
    name: string;

    constructor() {
        this.name = 'Alice';
    }
}
bootstrap(MyAppComponent);