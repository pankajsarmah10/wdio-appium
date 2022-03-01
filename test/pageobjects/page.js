/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    async goToElement(element) {
        await element.click();
        return this;
    }

    async isChecked(element) {
        return await element.isSelected(element);
    }

    async checkCheckBox(element) {
        await element.click();
        if(await isChecked(element)){
            return true;
        } else {
            return false;
        }

    }


}
