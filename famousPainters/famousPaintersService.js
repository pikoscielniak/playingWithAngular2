var FamousPaintersService = (function () {
    function FamousPaintersService() {
    }
    FamousPaintersService.prototype.getPainters = function () {
        return new Promise(function (resolve) {
            //TODO use something more native for angular 2.0 when it'll show up
            $.getJSON('famousPainters/JSON/famousPainters.json', function (data) {
                var result = data.famousPainters.map(function (d) {
                    return {
                        name: d.name,
                        style: d['style:'],
                        examples: d['examples: ']
                    };
                });
                resolve(result);
            });
        });
    };
    return FamousPaintersService;
})();
exports.FamousPaintersService = FamousPaintersService;
