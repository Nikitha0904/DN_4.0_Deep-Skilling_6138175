package com.example.factory;

public class ExcelFactory extends DocumentFactory {
    @Override
    public IDocument createDocument() {
        return new ExcelDocument();
    }
}
