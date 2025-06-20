package FinancialForecasting;

public class varying {

    // Recursive method to calculate future value with different rates each year
    public static double calculateFutureValue(double presentValue, double[] rates, int year) {
        if (year == 0) {
            return presentValue;
        }
        return calculateFutureValue(presentValue, rates, year - 1) * (1 + rates[year - 1]);
    }

    public static void main(String[] args) {
        double presentValue = 10000.0;

        // Growth rates for 5 years (e.g., 8%, 7.5%, 6%, 9%, 10%)
        double[] rates = {0.08, 0.075, 0.06, 0.09, 0.10};

        System.out.println("Year\tRate\t\tFuture Value");
        System.out.println("---------------------------------------");

        for (int i = 1; i <= rates.length; i++) {
            double value = calculateFutureValue(presentValue, rates, i);
            System.out.printf("%d\t%.2f%%\t\t%.2f\n", i, rates[i - 1] * 100, value);
        }
    }
}
