const {formatCurrency, getCoins,} = require('../src/js/money-functions');


describe("formatCurrency", () => {
  test("0 returns as $0.00", () => {
    expect(formatCurrency(0)).toEqual("$0.00");
  });

  test("1 returns as $1.00", () => {
    expect(formatCurrency(1)).toEqual("$1.00");
  });

  test("1.5 returns as $1.50", () => {
    expect(formatCurrency(1.5)).toEqual("$1.50");
  });

  test("0.01 returns as $0.01", () => {
    expect(formatCurrency(0.01)).toEqual("$0.01");
  });

  test("527.6789 returns as $527.68", () => {
    expect(formatCurrency(527.6789)).toEqual("$527.68");
  });

  test("-1 returns as -$1.00", () => {
    expect(formatCurrency(-1)).toEqual("-$1.00");
  });

});

describe("getCoins", () => {
  test(".32 is 1 quarter, 0 dimes, 1 nickel, 2 pennies", () => {

    expect(getCoins(32)).toStrictEqual(
      {
          quarters: 1,
          dimes: 0,
          nickels: 1,
          pennies: 2,
      },
    );
  });
  

  test("10 cents is 1 dime", () => {

    expect(getCoins(10)).toStrictEqual(
      {
          quarters: 0,
          dimes: 1,
          nickels: 0,
          pennies: 0,
      },
    );
  });
  
  

  test("27 cents 1 quarter, 2 pennies", () => {

    expect(getCoins(27)).toStrictEqual(
      {
          quarters: 1,
          dimes: 0,
          nickels: 0,
          pennies: 2,
      },
    );
  });
  

  test("68 cents is 2 quarters, 1 dime, 1 nickel, 3 pennies", () => {

    expect(getCoins(68)).toStrictEqual(
      {
          quarters: 2,
          dimes: 1,
          nickels: 1,
          pennies: 3,
      },
    );
  });
  });
