import { Selector } from 'testcafe';
import { PageIDs } from '../imports/ui/utilities/ids';

class LandingPage {
  constructor() {
    this.pageId = `#${PageIDs.landingPage}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this landingPage is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 70 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(70000).expect(this.pageSelector.exists).ok();
  }

  async isDisplayedFastKine(testController) {
    // This is first test to be run. Wait 70 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(5000).expect(this.pageSelector.exists).ok();
  }
}

export const landingPage = new LandingPage();
