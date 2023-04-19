import statement from "@/chapter1/work1/statement";
import invoice from "@/chapter1/invoices.json";
import plays from "@/chapter1/plays.json";

describe('statement', () => {
  test('calculate the total amount and volume credits for the invoice', () => {

    const result = statement(invoice[0], plays);
    expect(result).toEqual(
      'Statement for BigCo\n' +
      '  Hamlet: $650.00 (55 seats)\n' +
      '  As You Like It: $580.00 (35 seats)\n' +
      '  Othello: $500.00 (40 seats)\n' +
      'Amount owed is $1,730.00\n' +
      'You earned 47 credits\n'
    );
  });
});