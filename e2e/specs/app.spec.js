"use strict";
var protractor_1 = require('protractor');
describe('Epam header test', function () {
    beforeAll(function () {
        protractor_1.browser.ignoreSynchronization = true;
    });
    beforeEach(function () {
        protractor_1.browser.get('http://www.epam.com/');
    });
    it('should check solutions tab', function () {
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.by.xpath('(.//a[@href="/solutions"])[1]'))), 20000);
        protractor_1.element(protractor_1.by.xpath('(.//a[@href="/solutions"])[1]')).click();
        expect(protractor_1.browser.getTitle()).toEqual('Solutions');
    });
    it('should check industries tab', function () {
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.by.xpath('(.//a[@href="/industries"])[1]'))), 20000);
        protractor_1.element(protractor_1.by.xpath('(.//a[@href="/industries"])[1]')).click();
        expect(protractor_1.browser.getTitle()).toEqual('Industries');
    });
    it('should check about tab', function () {
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.by.xpath('(.//a[@href="/about"])[1]'))), 20000);
        protractor_1.element(protractor_1.by.xpath('(.//a[@href="/about"])[1]')).click();
        expect(protractor_1.browser.getTitle()).toEqual('About');
    });
    it('should check careers tab', function () {
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.by.xpath('(.//a[@href="/careers"])[1]'))), 20000);
        protractor_1.element(protractor_1.by.xpath('(.//a[@href="/careers"])[1]')).click();
        expect(protractor_1.browser.getTitle()).toEqual('Careers');
    });
    it('should check ideas tab', function () {
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.by.xpath('(.//a[@href="/ideas"])[1]'))), 20000);
        protractor_1.element(protractor_1.by.xpath('(.//a[@href="/ideas"])[1]')).click();
        expect(protractor_1.browser.getTitle()).toEqual('Ideas');
    });
    it('should check contact tab', function () {
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.by.css('ul.tile-menu > li:nth-child(6) > a'))), 20000);
        protractor_1.element(protractor_1.by.css('ul.tile-menu > li:nth-child(6) > a')).click();
        expect(protractor_1.browser.getTitle()).toEqual('Contact');
    });
});
describe('Epam job hunting', function () {
    beforeAll(function () {
        protractor_1.browser.ignoreSynchronization = true;
    });
    beforeEach(function () {
        protractor_1.browser.get('http://www.epam.com/careers');
    });
    it('check autocompl', function () {
        protractor_1.element(protractor_1.by.css('.job-search-input')).sendKeys('javas');
        var a = protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.by.css('.autocomplete-suggestion:nth-child(3)'))), 20000);
        protractor_1.element(protractor_1.by.css('.autocomplete-suggestion:nth-child(3)')).click();
        expect(a);
    });
    it('will check results', function () {
        var b = protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.by.css('.position-name.hot>a:nth-child(1)'))), 20000);
        expect(b);
    });
});
//# sourceMappingURL=app.spec.js.map