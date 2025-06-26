package com.example;

import static org.junit.Assert.*;
import org.junit.Test;

public class AppTest {

    @Test
    public void testAdd() {
        App calc = new App();
        assertEquals(5, calc.add (2, 3));
    }
}
