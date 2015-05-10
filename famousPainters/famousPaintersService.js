/// <reference path="../typings/jquery/jquery.d.ts" />
var FamousPaintersService = (function () {
    function FamousPaintersService() {
    }
    FamousPaintersService.prototype.getPainters = function () {
        return new Promise(function (resolve) {
            $.getJSON('famousPainters/JSON/famousPainters.json', function (data) {
                resolve(data.famousPainters.map(function (i) { return i.name; }));
            });
        });
    };
    return FamousPaintersService;
})();
exports.FamousPaintersService = FamousPaintersService;
