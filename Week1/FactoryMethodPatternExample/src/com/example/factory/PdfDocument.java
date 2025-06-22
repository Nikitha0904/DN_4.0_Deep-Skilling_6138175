package com.example.factory;

public class PdfDocument implements IDocument {
    @Override
    public void open() {
        System.out.println("Opening PDF Document...");
    }
}
