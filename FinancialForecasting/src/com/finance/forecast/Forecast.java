package com.finance.forecast;

import java.util.HashMap;
import java.util.Map;

public class Forecast {

    // Recursive method to calculate future value
    public static double forecastRecursive(double value, double growthRate, int years) {
        if (years == 0) return value; // Base case
        return forecastRecursive(value * (1 + growthRate), growthRate, years - 1);
    }

    // Optimized version using memoization
    private static final Map<Integer, Double> memo = new HashMap<>();

    public static double forecastMemoized(double value, double growthRate, int years) {
        if (years == 0) return value;
        if (memo.containsKey(years)) return memo.get(years);

        double result = forecastMemoized(value * (1 + growthRate), growthRate, years - 1);
        memo.put(years, result);
        return result;
    }
}
