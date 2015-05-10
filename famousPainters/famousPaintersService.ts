/// <reference path="../typings/jquery/jquery.d.ts" />

export class FamousPaintersService {

    getPainters() {
        return new Promise(function (resolve) {
            $.getJSON('famousPainters/JSON/famousPainters.json', (data) => {
                resolve(data.famousPainters.map(i => i.name));
            });
        });
    }
}