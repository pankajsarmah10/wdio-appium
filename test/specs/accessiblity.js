const HomePage = require('../pageobjects/home.page');
const SecurePage = require('../pageobjects/secure.page');
const Accessiblity1 = require('../pageobjects/accessibility1.page');
const Accessiblity1NQ = require('../pageobjects/accessibility1.nodequerying.page');
const { ACCESSIBILITY1_NODE_QUERYING } = require('../constants');

describe('Accessiblity Flow', () => {
    const defaultSelectedArr = [ACCESSIBILITY1_NODE_QUERYING.TAKE_OUT_TRASH, 
        ACCESSIBILITY1_NODE_QUERYING.DO_LAUNDRY, 
        ACCESSIBILITY1_NODE_QUERYING.NAP];
    
    const defaultNotSelectedArr = [ACCESSIBILITY1_NODE_QUERYING.CONQUER_WORLD,
        ACCESSIBILITY1_NODE_QUERYING.DO_TAXES,
        ACCESSIBILITY1_NODE_QUERYING.ABOLISH_IRS,
        ACCESSIBILITY1_NODE_QUERYING.TEA_WITH_AUNT_SHARON];

    it('should be able to see the home page', async () => {
        await HomePage.assertHomePageLoaded();
    });

    it('should be able to go to the accessibility page', async () => {
        await HomePage.gotToAccessibility1();
        await Accessiblity1.assertAccessiblity1PageisLoaded();
    })

    it('should be able to go to the accessiblity node querying page', async() => {
        await Accessiblity1.gotToAccessibilityNodeQuerying();
        await Accessiblity1NQ.assertCheckBoxesChecked(defaultSelectedArr);
        await Accessiblity1NQ.assertCheckboxesNotChecked(defaultNotSelectedArr);
    })

    it('should be able to check unchecked items', () => {
        await Accessiblity1NQ.checkCheckBox(defaultNotSelectedArr);
    })

    it('should be able to validate all items are checked', () => {
        await Accessiblity1NQ.assertCheckBoxesChecked(Object.values(ACCESSIBILITY1_NODE_QUERYING));
    })
});


