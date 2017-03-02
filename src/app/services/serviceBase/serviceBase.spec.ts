import { ServiceBase } from './serviceBase';

describe('', () => {
  let error: any;
  let component: ServiceBase;

  beforeEach(() => {
    error = 'error';
    component = new ServiceBase();
  });

  describe('handleError', () => {
    it('should send the corresponding error', () => {
      component.handleError(error);
    });
  });

})