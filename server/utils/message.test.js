const expect = require('expect');
const { generateMessage } = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = "Kentaro";
    const text = "Hey Mike, when are you free?";

    const res = generateMessage(from, text);

    expect(res).toMatchObject({ from, text });
    expect(typeof res.createdAt).toBe('number');
  })
})
