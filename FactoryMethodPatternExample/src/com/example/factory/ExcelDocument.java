package com.example.factory;

public class ExcelDocument implements IDocument {
    @Override
    public void open() {
        System.out.println("Opening Excel Document...");
    }
}
