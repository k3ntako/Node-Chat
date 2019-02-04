const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = "Kentaro";
    const text = "Hey Mike, when are you free?";

    const res = generateMessage(from, text);

    expect(res).toMatchObject({ from, text });
    expect(typeof res.createdAt).toBe('number');
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = "Kentaro";
    const latitude = 1.1;
    const longitude = 2.2;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    const res = generateLocationMessage(from, latitude, longitude);

    expect(res).toMatchObject({ from, url });
    expect(typeof res.createdAt).toBe('number');
  })
})
