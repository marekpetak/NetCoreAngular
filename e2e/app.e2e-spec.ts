import { NetCoreAngularPage } from './app.po';

describe('net-core-angular App', () => {
  let page: NetCoreAngularPage;

  beforeEach(() => {
    page = new NetCoreAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
