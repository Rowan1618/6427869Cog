package FinancialForecasting;
public class FinancialForecast {

    // Recursive method to calculate future value
    public static double calculateFutureValue(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return calculateFutureValue(presentValue, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        double presentValue = 10000.0;
        double rate = 0.08; // 8% annual growth
        int years = 5;

        double futureValue = calculateFutureValue(presentValue, rate, years);
        System.out.printf("Future Value after %d years: %.2f\n", years, futureValue);
    }
}
