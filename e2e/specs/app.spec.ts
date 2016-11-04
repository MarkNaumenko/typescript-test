import {protractor, browser, element, by} from 'protractor';

describe('Epam header test', () => {

        beforeAll(() => {
            browser.ignoreSynchronization = true;
        });

        beforeEach(() => {
            browser.get('http://www.epam.com/');
        });

        it('should check solutions tab', () => {
            browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.xpath('(.//a[@href="/solutions"])[1]'))), 20000);
            element(by.xpath('(.//a[@href="/solutions"])[1]')).click();
            expect(browser.getTitle()).toEqual('Solutions');
        });

        it('should check industries tab', () => {
            browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.xpath('(.//a[@href="/industries"])[1]'))), 20000);
            element(by.xpath('(.//a[@href="/industries"])[1]')).click();
            expect(browser.getTitle()).toEqual('Industries');
        });

        it('should check about tab', () => {
            browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.xpath('(.//a[@href="/about"])[1]'))), 20000);
            element(by.xpath('(.//a[@href="/about"])[1]')).click();
            expect(browser.getTitle()).toEqual('About');
        });  

        it('should check careers tab', () => {
            browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.xpath('(.//a[@href="/careers"])[1]'))), 20000);
            element(by.xpath('(.//a[@href="/careers"])[1]')).click();
            expect(browser.getTitle()).toEqual('Careers');
        });

        it('should check ideas tab', () => {
            browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.xpath('(.//a[@href="/ideas"])[1]'))), 20000);
            element(by.xpath('(.//a[@href="/ideas"])[1]')).click();
            expect(browser.getTitle()).toEqual('Ideas');
        });

        it('should check contact tab', () => {
            browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css('ul.tile-menu > li:nth-child(6) > a'))), 20000);
            element(by.css('ul.tile-menu > li:nth-child(6) > a')).click();
            expect(browser.getTitle()).toEqual('Contact');
        });

});

describe('Epam job hunting', () => {

    beforeAll(() => {
        browser.ignoreSynchronization = true;
    });

    beforeEach(() => {
        browser.get('http://www.epam.com/careers');
    });

    it('check autocompl', () => {
        element(by.css('.job-search-input')).sendKeys('javas');
        var a = browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css('.autocomplete-suggestion:nth-child(3)'))), 20000);
        element(by.css('.autocomplete-suggestion:nth-child(3)')).click();
        expect(a);
    });

    it('will check results', () => {
        var b = browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css('.position-name.hot>a:nth-child(1)'))), 20000);
        expect(b);
    });

});
