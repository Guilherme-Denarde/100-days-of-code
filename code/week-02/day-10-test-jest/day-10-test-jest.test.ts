import { blockRequest } from '../day-09-adblock/background';
import { expect } from 'jest';

const mockRequestDetails = {
  url: 'http://www.zedo.com/somepath',
};

describe('AdBlock Extension Tests', () => {
  it('should block a URL in the defaultFilters list', () => {
    expect(blockRequest(mockRequestDetails)).toEqual({ cancel: true });
  });

  it('should not block a URL not in the defaultFilters list', () => {
    const mockRequestDetails = {
      url: 'http://www.example.com/',
    };
    expect(blockRequest(mockRequestDetails)).toEqual({ cancel: false });
  });
});
