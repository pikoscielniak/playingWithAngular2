import {Component, View, For, If} from 'angular2/angular2';
import {FamousPaintersService} from '../famousPainters/famousPaintersService';
import {IFamousPainter} from './contracts';

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
    selectedPainter:IFamousPainter;
    painters:Array<IFamousPainter>

    constructor(famousPaintersService:FamousPaintersService) {
        famousPaintersService.getPainters().then((painters:Array<IFamousPainter>)=> {
            this.painters = painters;
            this.selectedPainter = this.painters[0];
        });
    }

    selectedPainterChanged(name:string) {
        var painter = this.painters.filter(p => p.name === name)[0];
        this.selectedPainter = painter;
    }
}