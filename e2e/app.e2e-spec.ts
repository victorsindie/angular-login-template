import { AngularLoginTemplatePage } from './app.po';

describe('angular-login-template App', function() {
  let page: AngularLoginTemplatePage;

  beforeEach(() => {
    page = new AngularLoginTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
