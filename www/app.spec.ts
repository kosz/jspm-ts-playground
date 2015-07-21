/// <reference path="../../../../typings/tsd.d.ts"/>

import {expect} from 'chai';

console.log('test ts');

describe('a typescript test', () => {
  it('should not throw erros', () => {
    expect(true).to.be.true;
  });
});
