import { ShowCaseModule } from './show-case.module';

describe('ShowCaseModule', () => {
  let showCaseModule: ShowCaseModule;

  beforeEach(() => {
    showCaseModule = new ShowCaseModule();
  });

  it('should create an instance', () => {
    expect(showCaseModule).toBeTruthy();
  });
});
