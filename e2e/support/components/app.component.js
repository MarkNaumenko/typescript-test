"use strict";
var protractor_1 = require('protractor');
var AppComponent = (function () {
    function AppComponent() {
        this.heading = 'My First Angular App';
        this.h1 = protractor_1.element(protractor_1.by.css('h1'));
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map