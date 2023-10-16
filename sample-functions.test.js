import myFunctions from "./sample-functions";
import sp from "./stock_portfolio";
let p;
beforeEach(() => {
  // Create a new Portfolio instance before each test
  p = new sp.Portfolio();
});

test("Testing mySum -- success", () => {
  const expected = 30;
  const result = myFunctions.mySum(12, 18);
  expect(expected).toBe(result);
});


test("isEmptyTrue -- success", () => {
  expect(p.isEmpty()).toBe(true);
});

test("isEmptyFalse -- success", () => {
  p.addShare({symbol: 'ABG', shares: 40});
  expect(p.isEmpty()).toBe(false);
});

test("countUniqueShares -- success", () => {
  p.addShare({symbol: 'ABC', shares: 50});
  p.addShare({symbol: 'ABG', shares: 20});
  expect(p.countUniqueShares()).toBe(2);
});

test("countUniqueShares -- success", () => {
  p.addShare({symbol: 'ABC', shares: 50});
  p.addShare({symbol: 'ABG', shares: 20});
  expect(p.countUniqueShares()).toBe(2);
});

test("loseShares -- success", () => {
  p.addShare({symbol: 'ABG', shares: 20});
  p.addShare({symbol: 'GOOGL', shares: 40});
  p.subtractShares('ABG', 20);
  expect(p.countUniqueShares()).toBe(1);
});

test("getSharesFromSymbol -- success", () => {
  p.addShare({symbol: 'ABG', shares: 20});
  p.addShare({symbol: 'GOOGL', shares: 40});
  p.subtractShares('ABG', 20);
  expect(p.countUniqueShares()).toBe(1);
});

test("getSharesFromSymbol -- success", () => {
  p.addShare({symbol: 'ABG', shares: 40});
  p.addShare({symbol: 'GOOGL', shares: 40});
  p.subtractShares('ABG', 20);

  expect(p.getSharesBySymbol('ABG')).toBe(20);
});

 test('subtracting more shares than available throws an error', () => {
        p.addShare({symbol: 'ABG', shares: 100});
        expect(() => {
            p.subtractShares('ABG', 150);
        }).toThrow('Attempted to subtract 150 shares, but only 100 shares are available.');
    });

