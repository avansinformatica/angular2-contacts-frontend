import { AgularContactsAppPage } from './app.po';

describe('agular-contacts-app App', () => {
  let page: AgularContactsAppPage;

  beforeEach(() => {
    page = new AgularContactsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
