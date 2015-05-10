/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {FamousPaintersComponent} from '../famousPainters/famousPaintersComponent';

// Annotation section
@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'myApp/myApp.html',
    directives: [FamousPaintersComponent]
})
// Component controller
class MyAppComponent {
    constructor() {
    }
}

bootstrap(MyAppComponent);