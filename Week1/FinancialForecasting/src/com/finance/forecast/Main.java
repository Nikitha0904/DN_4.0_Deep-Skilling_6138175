package com.finance.forecast;

public class Main {
    public static void main(String[] args) {
        double initialValue = 10000;     // Starting value (₹10,000)
        double growthRate = 0.1;         // 10% annual growth
        int years = 5;

        // Basic Recursive Forecast
        double forecast = Forecast.forecastRecursive(initialValue, growthRate, years);
        System.out.println("Forecast after " + years + " years (Recursive): ₹" + forecast);

        // Memoized Forecast (faster if reused)
        double forecastMemo = Forecast.forecastMemoized(initialValue, growthRate, years);
        System.out.println("Forecast after " + years + " years (Memoized): ₹" + forecastMemo);
    }
}
