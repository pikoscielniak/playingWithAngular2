import {Component, View, For, If} from 'angular2/angular2';
import {FamousPaintersService} from '../famousPainters/famousPaintersService';

@Component({
    selector: 'famous-painters',
    injectables: [FamousPaintersService]
})
@View({
    templateUrl: 'famousPainters/famousPainters.html',
    directives: [For, If]
})
// Component controller
export class FamousPaintersComponent {
    names:Array<string>;
    selectedPainter:string;

    constructor(famousPaintersService:FamousPaintersService) {
        famousPaintersService.getPainters().then((names)=> {
            this.names = names
            this.selectedPainter = this.names[0];
        });
    }

    selectedPainterChanged(name) {
        this.selectedPainter = name;
    }
}