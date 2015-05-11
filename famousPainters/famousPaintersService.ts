/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/es6-promise/es6-promise.d.ts" />
import {IFamousPainter,IFamousPainterResponse} from './contracts';

export class FamousPaintersService {

    getPainters() {
        return new Promise<Array<IFamousPainter>>(function (resolve) {
            //TODO use something more native for angular 2.0 when it'll show up
            $.getJSON('famousPainters/JSON/famousPainters.json', (data:IFamousPainterResponse) => {
                var result = data.famousPainters.map(d => {
                    return {
                        name: d.name,
                        style: d['style:'],
                        examples: d['examples: ']
                    };
                });
                resolve(result);
            });
        });
    }
}