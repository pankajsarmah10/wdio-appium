const Page = require('./page');
const expect = require('chai').expect;
const { ACCESSIBILITY1 } = require('../constants');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Accessiblity1 extends Page {
    
    get accessibilityNodeProvider() {
        return $(`~${ACCESSIBILITY1.ACCESSIBILITY_NODE_PROVIDER}`);
    }

    get accessibilityNodeQuerying() {
        return $(`~${ACCESSIBILITY1.ACCESSIBILITY_NODE_QUERYING}`);
    }

    get accesibilityService() {
        return $(`~${ACCESSIBILITY1.ACCESSIBILITY_SERVICE}`);
    }

    get customView() {
        return $(`~${ACCESSIBILITY1.CUSTOM_VIEW}`);
    }

    async assertAccessiblity1PageisLoaded() {
        await expect(await this.accessibilityNodeProvider.isDisplayed()).to.equal(true);
    }

    async gotToAccessibilityNodeProvider() {
        await super.goToElement(this.accessibilityNodeProvider)
    }

    async gotToAccessibilityNodeQuerying() {
        await super.goToElement(this.accessibilityNodeQuerying)
    }
    
    async gotToAccessibilityService() {
        await super.goToElement(this.accesibilityService)
    }

    async gotToCustomView() {
        await super.goToElement(this.customView)
    }


}

module.exports = new Accessiblity1();
