"use strict";
var protractor_1 = require('protractor');
var IndexPage = (function () {
    function IndexPage() {
    }
    IndexPage.openPage = function () {
        protractor_1.browser.get('https://www.epam.com/');
    };
    IndexPage.title = 'Angular 2 Protractor Jasmine TypeScript Seed';
    return IndexPage;
}());
exports.IndexPage = IndexPage;
//# sourceMappingURL=index.page.js.map