package com.example.factory;

public class WordDocument implements IDocument {
    @Override
    public void open() {
        System.out.println("Opening Word Document...");
    }
}
