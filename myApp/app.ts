/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {FamousPaintersService} from './famousPaintersService';

// Annotation section
@Component({
    selector: 'my-app',
    injectables: [FamousPaintersService]
})
@View({
    templateUrl: 'myApp/myApp.html',
    directives: [For, If]
})
// Component controller
class MyAppComponent {
    name:string;
    names:Array<string>;
    time:string;

    constructor(famousPaintersService:FamousPaintersService) {
        this.name = 'Alice';
        this.names = famousPaintersService.names;
    }
}

bootstrap(MyAppComponent);