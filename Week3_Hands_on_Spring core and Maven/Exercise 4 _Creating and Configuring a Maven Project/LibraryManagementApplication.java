package com.example;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        System.out.println("Spring Context starting...");
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext();
        System.out.println("Spring Context started (No Beans configured yet).");
        context.close();
    }
}
