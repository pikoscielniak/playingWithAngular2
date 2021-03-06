if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var famousPaintersService_1 = require('../famousPainters/famousPaintersService');
var FamousPaintersComponent = (function () {
    function FamousPaintersComponent(famousPaintersService) {
        var _this = this;
        famousPaintersService.getPainters().then(function (painters) {
            _this.painters = painters;
            _this.selectedPainter = _this.painters[0];
        });
    }
    FamousPaintersComponent.prototype.selectedPainterChanged = function (name) {
        var painter = this.painters.filter(function (p) { return p.name === name; })[0];
        this.selectedPainter = painter;
    };
    FamousPaintersComponent = __decorate([
        angular2_1.Component({
            selector: 'famous-painters',
            injectables: [famousPaintersService_1.FamousPaintersService]
        }),
        angular2_1.View({
            templateUrl: 'famousPainters/famousPainters.html',
            directives: [angular2_1.For, angular2_1.If]
        }), 
        __metadata('design:paramtypes', [famousPaintersService_1.FamousPaintersService])
    ], FamousPaintersComponent);
    return FamousPaintersComponent;
})();
exports.FamousPaintersComponent = FamousPaintersComponent;
