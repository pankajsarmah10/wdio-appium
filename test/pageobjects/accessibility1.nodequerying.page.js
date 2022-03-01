const Page = require('./page');
const expect = require('chai').expect;


class Accessiblity1NodeQuerying extends Page {

    getSelectableItem(itemToSelect) {
        return $(`//android.widget.TextView[@content-desc="Task ${itemToSelect}"]//following-sibling::android.widget.CheckBox`);
    }

    async assertCheckBoxesChecked(itemList) {
        itemList.map(async (item) => {
            await expect(await super.isChecked(this.getSelectableItem(item))).to.equal(true);    
        })
    }
    
    async assertCheckboxesNotChecked(itemList) {
        itemList.map(async (item) => {
            await expect(await super.isChecked(this.getSelectableItem(item))).to.equal(false);    
        })
    }

    async checkCheckBoxes(itemList) {
        itemList.map(async (item) => {
            await super.checkCheckBox(this.getSelectableItem(item));
        })
    }
    

}