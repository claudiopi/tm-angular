import { expect } from '@open-wc/testing';
import ListView from './list-view.js';

describe('ListView', () => {
  it('<app-list-view> is an instance of ListView', async () => {
    const element = document.createElement('app-list-view');
    expect(element).to.be.instanceOf(ListView);
  });
});
