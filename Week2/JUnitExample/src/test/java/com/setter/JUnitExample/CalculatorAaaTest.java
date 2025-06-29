package com.setter.JUnitExample;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class CalculatorAaaTest {

    private CalculatorAaa calculator;

    // This runs before every test method
    @Before
    public void setUp() {
        calculator = new CalculatorAaa();
        System.out.println("Setup: Calculator initialized");
    }

    // This runs after every test method
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown: Calculator destroyed");
    }

    @Test
    public void testAddition() {
        // Arrange & Act
        int result = calculator.add(5, 3);

        // Assert
        assertEquals(8, result);
    }

    @Test
    public void testSubtraction() {
        // Arrange & Act
        int result = calculator.subtract(10, 4);

        // Assert
        assertEquals(6, result);
    }
}
