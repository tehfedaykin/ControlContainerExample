import { PrettyprintPipe } from './prettyprint.pipe';

describe('PrettyprintPipe', () => {
  it('create an instance', () => {
    const pipe = new PrettyprintPipe();
    expect(pipe).toBeTruthy();
  });
});
