package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    // Setup method (runs before each test)
    @Before
    public void setUp() {
        calculator = new Calculator();  // Arrange
        System.out.println("Setup complete");
    }

    // Teardown method (runs after each test)
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown complete");
    }

    @Test
    public void testAdd() {
        // Arrange (done in @Before)

        // Act
        int result = calculator.add(2, 3);

        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testMultiply() {
        // Arrange (done in @Before)

        // Act
        int result = calculator.multiply(4, 5);

        // Assert
        assertEquals(20, result);
    }
}