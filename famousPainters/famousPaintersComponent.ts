import {Component, View, For} from 'angular2/angular2';
import {FamousPaintersService} from '../famousPainters/famousPaintersService';

@Component({
    selector: 'famous-painters',
    injectables: [FamousPaintersService]
})
@View({
    templateUrl: 'famousPainters/famousPainters.html',
    directives: [For]
})
// Component controller
export class FamousPaintersComponent {
    name:string;
    names:Array<string>;

    constructor(famousPaintersService:FamousPaintersService) {
        this.name = 'Alice';
        famousPaintersService.getPainters().then((names)=> this.names = names);
        //this.names = famousPaintersService.names;
    }
}