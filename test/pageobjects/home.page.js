

const Page = require('./page');
const expect = require('chai').expect;
const Accessiblity1 = require('./accessibility1.page');
const { HOME } = require('../constants');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    
    get accessibility1() {
        return $(`~${HOME.ACCESSIBILITY1}`);
    }

    get accessibility() {
        return $(`~${HOME.ACCESSIBILITY}`);
    }

    get animation() {
        return $(`~${HOME.ANIMATION}`);
    }

    get app() {
        return $(`~${HOME.APP}`);
    }

    get content() {
        return $(`~${HOME.CONTENT}`);
    }

    get graphics() {
        return $(`~${HOME.GRAPHICS}`);
    }

    get media() {
        return $(`~${HOME.MEDIA}`);
    }

    get nfc() {
        return $(`~${HOME.NFC}`);
    }

    get os() {
        return $(`~${HOME.OS}`);
    }

    get text() {
        return $(`~${HOME.TEXT}`);
    }

    get views() {
        return $(`~${HOME.VIEWS}`);
    }

    get preference() {
        return $(`~${HOME.PREFERENCE}`);
    }
    async assertHomePageLoaded() {
        await expect(await this.accessibility1.isDisplayed()).to.equal(true);
    }

    async gotToAccessibility1() {
        await super.goToElement(this.accessibility1);
    }

    async gotToAccessibility() {
        await super.goToElement(this.accessibility);
    }

    async goToAnimation() {
        await super.goToElement(this.animation);
    }

    async goToApp() {
        await super.goToElement(this.app);
    }

    async goToContent() {
        await super.goToElement(this.content);
    }

    async goToGraphics() {
        await super.goToElement(this.graphics);
    }

    async goToMedia() {
        await super.goToElement(this.media);
    }

    async goToNfc() {
        await super.goToElement(this.nfc);
    }

    async goToOS() {
        await super.goToElement(this.os);
    }

    async goToPreference() {
        await super.goToElement(this.preference);
    }

    async goToText() {
        await super.goToElement(this.text);
    }

    async goToViews() {
        await super.goToElement(this.views);
    }

}

module.exports = new HomePage();
