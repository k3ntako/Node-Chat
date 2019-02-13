const expect = require('expect');
const { isRealString } = require('./validation')

describe('isRealString', () => {
  it('should reject non-string value', () => {
    const str1 = 12312312;
    const res1 = isRealString(str1);
    const str2 = null;
    const res2 = isRealString(str2);
    const str3 = false;
    const res3 = isRealString(str3);

    expect(res1).toBe(false);
    expect(res2).toBe(false);
    expect(res3).toBe(false);
  })

  it('should reject string with only spaces', () => {
    const str1 = "  ";
    const res1 = isRealString(str1);
    const str2 = "";
    const res2 = isRealString(str2);

    expect(res1).toBe(false);
    expect(res2).toBe(false);
  })

  it('should allow string with non-space characters', () => {
    const str1 = "  1";
    const res1 = isRealString(str1);
    const str2 = "123";
    const res2 = isRealString(str2);
    const str3 = "Hello Kenny";
    const res3 = isRealString(str3);

    expect(res1).toBe(true);
    expect(res2).toBe(true);
    expect(res3).toBe(true);
  })
})
