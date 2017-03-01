import { CsGradeschoolCourseSitePage } from './app.po';

describe('cs-gradeschool-course-site App', () => {
  let page: CsGradeschoolCourseSitePage;

  beforeEach(() => {
    page = new CsGradeschoolCourseSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
