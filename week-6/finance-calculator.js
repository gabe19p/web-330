export class FinanceCalculator {
  constructor(monthlyPayment, rate, years, field) {
    this.monthlyPayment = monthlyPayment;
    this.rate = rate;
    this.years = years;
    this.field = field;
  }

  calculateFutureValue(monthlyPayment, rate, years) {
    let MONTHS_IN_YEAR = 12;
    let months = years * MONTHS_IN_YEAR;
    let interestRate = 1 + rate / 100;
    let presentValue = monthlyPayment * months;
    let futureValue = presentValue * Math.pow(interestRate, months);
    return futureValue.toFixed(2);
  }

  static convertToCurrency(field) {
    let currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return currencyFormatter.format(field);
  }
}
